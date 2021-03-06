/*
 * Copyright 2015 Hewlett-Packard Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

package com.hp.autonomy.frontend.find.hod.fields;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.hp.autonomy.frontend.find.core.fields.AbstractFieldsControllerTest;
import com.hp.autonomy.frontend.find.core.fields.FieldAndValueDetails;
import com.hp.autonomy.frontend.find.hod.configuration.HodFindConfig;
import com.hp.autonomy.hod.client.api.resource.ResourceName;
import com.hp.autonomy.hod.client.error.HodErrorException;
import com.hp.autonomy.searchcomponents.core.fields.FieldsService;
import com.hp.autonomy.searchcomponents.core.parametricvalues.ParametricValuesService;
import com.hp.autonomy.searchcomponents.hod.beanconfiguration.HavenSearchHodConfiguration;
import com.hp.autonomy.searchcomponents.hod.fields.HodFieldsRequest;
import com.hp.autonomy.searchcomponents.hod.fields.HodFieldsRequestBuilder;
import com.hp.autonomy.searchcomponents.hod.fields.HodFieldsService;
import com.hp.autonomy.searchcomponents.hod.parametricvalues.HodParametricRequest;
import com.hp.autonomy.searchcomponents.hod.parametricvalues.HodParametricRequestBuilder;
import com.hp.autonomy.searchcomponents.hod.parametricvalues.HodParametricValuesService;
import com.hp.autonomy.searchcomponents.hod.search.HodQueryRestrictions;
import com.hp.autonomy.searchcomponents.hod.search.HodQueryRestrictionsBuilder;
import com.hp.autonomy.types.requests.idol.actions.tags.TagName;
import com.hp.autonomy.types.requests.idol.actions.tags.ValueDetails;
import com.hp.autonomy.types.requests.idol.actions.tags.params.FieldTypeParam;
import org.junit.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Collections;
import java.util.EnumMap;
import java.util.List;
import java.util.Map;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertThat;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.*;
import static org.mockito.Mockito.when;

@SuppressWarnings("SpringJavaAutowiredMembersInspection")
@SpringBootTest(classes = HavenSearchHodConfiguration.class, properties = {"mock.authentication=false", "mock.authenticationRetriever=false"}, webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class HodFieldsControllerTest extends AbstractFieldsControllerTest<HodFieldsController, HodFieldsRequest, HodErrorException, ResourceName, HodQueryRestrictions, HodParametricRequest, HodFindConfig> {
    @Mock
    private HodFieldsService hodFieldsService;
    @Mock
    private HodParametricValuesService hodParametricValuesService;
    @Mock
    private ObjectFactory<HodParametricRequestBuilder> parametricRequestBuilderFactory;

    @Mock
    private HodParametricRequestBuilder parametricRequestBuilder;

    @Mock
    private ObjectFactory<HodFieldsRequestBuilder> fieldsRequestBuilderFactory;

    @Mock
    private HodFieldsRequestBuilder fieldsRequestBuilder;

    @Mock
    private HodFieldsRequest fieldsRequest;

    @Mock
    private ObjectFactory<HodQueryRestrictionsBuilder> queryRestrictionsBuilderFactory;

    @Mock
    private HodQueryRestrictionsBuilder queryRestrictionsBuilder;

    @Mock
    private HodFindConfig hodFindConfig;

    @Override
    protected HodFieldsController constructController() {
        when(parametricRequestBuilderFactory.getObject()).thenReturn(parametricRequestBuilder);
        when(parametricRequestBuilder.fieldNames(any())).thenReturn(parametricRequestBuilder);
        when(parametricRequestBuilder.queryRestrictions(any())).thenReturn(parametricRequestBuilder);

        when(fieldsRequestBuilderFactory.getObject()).thenReturn(fieldsRequestBuilder);
        when(fieldsRequestBuilder.databases(any())).thenReturn(fieldsRequestBuilder);
        when(fieldsRequestBuilder.build()).thenReturn(fieldsRequest);
        when(fieldsRequest.getDatabases()).thenReturn(Collections.singletonList(ResourceName.WIKI_ENG));

        when(queryRestrictionsBuilderFactory.getObject()).thenReturn(queryRestrictionsBuilder);
        when(queryRestrictionsBuilder.queryText(anyString())).thenReturn(queryRestrictionsBuilder);
        when(queryRestrictionsBuilder.databases(any())).thenReturn(queryRestrictionsBuilder);

        return new HodFieldsController(hodFieldsService, hodParametricValuesService, parametricRequestBuilderFactory, tagNameFactory, configService, fieldsRequestBuilderFactory, queryRestrictionsBuilderFactory);
    }

    @Override
    protected FieldsService<HodFieldsRequest, HodErrorException> constructService() {
        return hodFieldsService;
    }

    @Override
    protected ParametricValuesService<HodParametricRequest, HodQueryRestrictions, HodErrorException> constructParametricValuesService() {
        return hodParametricValuesService;
    }

    @Override
    protected HodFindConfig mockConfig() {
        return hodFindConfig;
    }

    @Override
    protected List<TagName> getParametricFields() throws HodErrorException {
        return controller.getParametricFields(Collections.singleton(ResourceName.WIKI_ENG));
    }

    @Override
    protected List<FieldAndValueDetails> getParametricNumericFields() throws HodErrorException {
        return controller.getParametricNumericFields(Collections.singleton(ResourceName.WIKI_ENG));
    }

    @Override
    protected List<FieldAndValueDetails> getParametricDateFields() throws HodErrorException {
        return controller.getParametricDateFields(Collections.singleton(ResourceName.WIKI_ENG));
    }

    // TODO: Remove this override once we can support autn date in HOD (FIND-180)
    @Override
    @Test
    public void getParametricDateFieldsTest() throws HodErrorException {
        final Map<FieldTypeParam, List<TagName>> response = new EnumMap<>(FieldTypeParam.class);
        response.put(FieldTypeParam.NumericDate, ImmutableList.of(tagNameFactory.buildTagName("date_field"), tagNameFactory.buildTagName("parametric_date_field")));
        response.put(FieldTypeParam.Parametric, ImmutableList.of(tagNameFactory.buildTagName("parametric_field"), tagNameFactory.buildTagName("parametric_numeric_field"), tagNameFactory.buildTagName("parametric_date_field")));
        when(hodFieldsService.getFields(any(), eq(FieldTypeParam.Parametric), eq(FieldTypeParam.NumericDate))).thenReturn(response);

        final ValueDetails valueDetails = new ValueDetails.Builder()
                .setMin(146840000d)
                .setMax(146860000d)
                .setAverage(146850000d)
                .setSum(1046850000d)
                .setTotalValues(1000)
                .build();

        final Map<TagName, ValueDetails> valueDetailsOutput = ImmutableMap.<TagName, ValueDetails>builder()
                .put(tagNameFactory.buildTagName("parametric_date_field"), valueDetails)
                .build();

        when(hodParametricValuesService.getValueDetails(any())).thenReturn(valueDetailsOutput);

        final List<FieldAndValueDetails> fields = getParametricDateFields();
        assertThat(fields, hasSize(1));
        assertThat(fields, hasItem(is(new FieldAndValueDetails("parametric_date_field", "Parametric Date Field", 146840000d, 146860000d, 1000))));
    }
}
