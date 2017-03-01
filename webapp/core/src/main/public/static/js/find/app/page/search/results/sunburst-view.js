/*
 * Copyright 2016-2017 Hewlett Packard Enterprise Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

define([
    'underscore',
    'jquery',
    'd3',
    'sunburst/js/sunburst',
    'find/app/page/search/results/parametric-results-view',
    'i18n!find/nls/bundle',
    'find/app/util/generate-error-support-message',
    'text!find/templates/app/page/search/results/sunburst/sunburst-label.html'
], function(_, $, d3, Sunburst, ParametricResultsView, i18n, generateErrorHtml, labelTemplate) {
    'use strict';

    var HIDDEN_COLOR = '#f0f0f0';

    var sunburstLabelIcon = '<i class="icon-zoom-out"></i>';
    var sunburstLabelTemplate = _.template(labelTemplate);

    function drawSunburst($el, data, onClick) {
        const color = d3.scale.category20c();
        $el.empty();

        this.sunburst = new Sunburst($el, {
            animate: false,
            nameAttr: 'text',
            sizeAttr: 'count',
            comparator: null,
            clickCallback: onClick,
            outerRingAnimateSize: 15,
            data: {
                text: i18n['search.sunburst.title'],
                children: data,
                count: _.reduce(_.pluck(data, 'count'), function(a, b) {
                    return a + b;
                })
            },
            fillColorFn: function(data) {
                if(!data.parent) {
                    // Set the centre of the Sunburst to a fixed color
                    return 'white';
                }

                if(data.hidden || data.parent.hidden) {
                    return HIDDEN_COLOR;
                }

                // First tier sector
                if(data.parent.parent) {
                    // Second tier sector
                    data.color = color(data.text);
                } else {
                    data.color = data.count
                        ? color(data.parent.children.indexOf(data))
                        : 'black';
                }

                return data.color;
            },
            labelFormatter: function(datum, prevClicked) {
                const zoomedOnRoot = !prevClicked || prevClicked.depth === 0;
                const hoveringCenter = prevClicked ? datum === prevClicked.parent : datum.depth === 0;
                const textIsEmpty = datum.text === '';

                const hiddenFilterCount = datum.hiddenFilterCount;
                const templateArguments = {
                    size: datum.count,
                    icon: !zoomedOnRoot && hoveringCenter
                        ? sunburstLabelIcon
                        : '',
                    hasValue: !textIsEmpty,
                    italic: textIsEmpty,
                    name: textIsEmpty && hiddenFilterCount > 0
                        ? i18n['search.sunburst.noValue'](hiddenFilterCount)
                        : datum.text
                };

                return sunburstLabelTemplate(templateArguments);
            },
            hoverCallback: function(d, arc, outerRingAnimateSize, arcEls, arcData, paper) {
                _.chain(_.zip(arcData, arcEls))
                    .filter(function(dataEl) {
                        const data = dataEl[0];

                        // TODO Assumes depth=2 is the outer ring - will need to change if this changes
                        return data.text !== '' && data.depth === 2 && data.text === d.text;
                    })
                    .each(function(dataEl) {
                        const el = dataEl[1];
                        paper.set(el).animate({path: arc(outerRingAnimateSize)(dataEl[0])}, 100);
                    });
            }
        });

        return this.sunburst;
    }

    return ParametricResultsView.extend({
        initialize: function(options) {
            ParametricResultsView.prototype.initialize.call(this, _.defaults({
                emptyDependentMessage: i18n['search.resultsView.sunburst.error.noDependentParametricValues'],
                emptyMessage: generateErrorHtml({errorLookup: 'emptySunburstView'}),
                errorMessageArguments: {messageToUser: i18n['search.resultsView.sunburst.error.query']}
            }, options));
        },

        update: function() {
            if(!this.parametricCollection.isEmpty()) {
                drawSunburst.call(this,
                    this.$content,
                    this.dependentParametricCollection.toJSON(),
                    _.bind(this.onClick, this));

                const noValidChildren = _.chain(this.dependentParametricCollection.pluck('children'))
                    .flatten()
                    .compact()
                    .isEmpty()
                    .value();

                if(this.fieldsCollection.at(1).get('field') !== '' && noValidChildren) {
                    this.$message.text(i18n['search.resultsView.sunburst.error.noSecondFieldValues']);
                } else {
                    this.$message.empty();
                }
            }
        },

        render: function() {
            ParametricResultsView.prototype.render.apply(this);

            this.$content.addClass('sunburst');

            $(window).resize(_.bind(function() {//???why not listen to vent resize?
                if(this.sunburst) {
                    this.sunburst.resize();
                    this.sunburst.redraw();
                }
            }, this));
        }
    });
});
