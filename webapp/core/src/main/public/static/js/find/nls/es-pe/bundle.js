/*
 * Copyright 2014-2015 Hewlett-Packard Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

 define([
    'js-whatever/js/substitution'
], function(substitution) {
    return substitution({
        'about.app.version': "Versión",
        'about.copyright': "Find © Derechos de Autor 2014-2017 Hewlett Packard Enterprise Development Company, L.P.",
        'about.foss': "Agradecimientos de Software libre y de código abierto",
        'about.lib.name': "Nombre de librería",
        'about.lib.version': "Versión",
        'about.lib.licence': "Licencia",
        'about.search': "Buscar",
        'about.tagLine': "Hecho artesanalmente en Cambridge.",
        'about.versionString': "{0} commit {1}",
        'app.about': "Acerca de\u2026",
        'app.apply': "Aplicar",
        'app.backToSearch': "Volver\u2026",
        'app.cancel': "Cancelar",
        'app.compare': "Comparar",
        'app.conceptBoxPlaceholder': "Agregar un Concepto",
        'app.delete': "Borrar\u2026",
        'app.button.delete': "Borrar",
        'app.exportToCsv': "Exportar Resultados a CSV\u2026",
        'app.exportToCsv.modal.title': "Seleccione los campos que desea exportar",
        'app.button.exportCsv': "Exportar a CSV",
        'app.from': "Desde",
        'app.loading': "Cargando\u2026",
        'app.logout': "Cerrar sesión",
        'app.less': "menos",
        'app.more': "más",
        'app.name': "HPE Find",
        'app.ok': "OK",
        'app.rename': "Renombrar",
        'app.reset': "Resetear",
        'app.roles': "Roles",
        'app.seeAll': "Ver todo",
        'app.seeMore': "Ver más",
        'app.search': "Buscar",
        'app.searchPlaceholder': "¿Qué quieres buscar?",
        'app.settings': "Ajustes",
        'app.unfiltered': "Sin filtrar",
        'app.unknown': "Desconocido",
        'app.until': "Hasta",
        'app.user': "Usuario",
        'app.users': "Usuarios",
        'datepicker.language': "es",
        'default.title': "Página no disponible",
        'default.message': "No podemos encontrar la página solicitada.",
        'default.button': "Volver a la búsqueda",
        'login.defaultLogin': "Los detalles del inicio de sesión predeterminado se pueden encontrar en el archivo config.json",
        'login.error.auth': "Por favor verifique su nombre de usuario y contraseña.",
        'login.error.connection': "Se produjo un error al autenticar con el servicio de Community. Compruebe si el servicio de Community está disponible.",
        'login.error.nonadmin': "Este usuario no tiene permisos de administrador.",
        'login.important': "Importante",
        'login.infoDefaultLogin': "Contiene un nombre de usuario predeterminado (que se muestra a continuación) y una contraseña.",
        'login.infoPasswordCopyPaste': "Puede copiar y pegar la contraseña en el siguiente campo.",
        'login.infoSearchConfig': "Utilizando su editor de texto favorito, busque dentro del config.json el defaultLogin, en la sección login.",
        'login.moreInfo': "Más",
        'login.newCredentials': "Iniciar sesión con nuevas credenciales",
        'login.login': "Iniciar sesión",
        'login.title': "Iniciar sesión en {0}",
        'old.browser.chrome': "Última versión de Chrome",
        'old.browser.edge': "Última versión de Microsoft Edge",
        'old.browser.firefox': "Última versión de Firefox",
        'old.browser.ie': "Internet Explorer 11",
        'old.browser.supportedBrowsers': "Utilice uno de los siguientes navegadores compatibles:",
        'old.browser.title': "Navegador no compatible",
        'old.browser.unsupported': "Parece que tu navegador no es compatible con esta aplicación.",
        'placeholder.hostname': "Nombre de host",
        'placeholder.ip': "IP",
        'placeholder.port': "Puerto",
        'search.answeredQuestion.question': "Pregunta: ",
        'search.answeredQuestion.answer': "Respuesta: ",
        'search.alsoSearchingFor': "También buscando por",
        'search.concepts': "Conceptos",
        'search.concepts.empty': "No hay conceptos seleccionados",
        'search.databases': "Bases de datos",
        'search.dates': "Fechas",
        'search.dates.timeInterval.CUSTOM': "Personalizado",
        'search.dates.timeInterval.WEEK': "Última semana",
        'search.dates.timeInterval.MONTH': "Último mes",
        'search.dates.timeInterval.YEAR': "Último año",
        'search.dates.timeInterval.NEW': "Desde la última búsqueda",
        'search.dates.timeInterval.new.description': "Mostrar los resultados desde la última vez que utilizó este filtro o ha cambiado la búsqueda",
        'search.document.authors': "Autores",
        'search.document.contentType': "Tipo de contenido",
        'search.document.sourceType': "Tipo de fuente",
        'search.document.date': "Fecha",
        'search.document.dateModified': "Fecha de modificación",
        'search.document.dateCreated': "Fecha de creación",
        'search.document.detail.expand': "Expandir vista preliminar",
        'search.document.detail.openOriginal': "Abrir original",
        'search.document.detail.highlightQueryTerms': "Resalte los términos de consulta",
        'search.document.detail.tabs.authors': "Autores",
        'search.document.detail.tabs.location': "Locación",
        'search.document.detail.tabs.location.latitude': "Latitud",
        'search.document.detail.tabs.location.longitude': "Longitud",
        'search.document.detail.tabs.metadata': "Metadatos",
        'search.document.detail.tabs.metadata.noAdvanced': "Este documento no tiene campos de metadatos avanzados",
        'search.document.detail.tabs.metadata.showAdvanced': "Mostrar avanzado",
        'search.document.detail.tabs.metadata.hideAdvanced': "Esconder avanzado",
        'search.document.detail.tabs.similarDocuments': "Documentos similares",
        'search.document.detail.tabs.similarDates': "Fechas similares",
        'search.document.detail.tabs.similarDates.pickMessage': "Establecer una ventana de tiempo con los controles deslizantes",
        'search.document.detail.tabs.similarDates.after': "Después del documento",
        'search.document.detail.tabs.similarDates.before': "Antes del documento",
        'search.document.detail.tabs.similarDates.temporalSummaryHtml': "Entre <strong>{0}</ strong> antes y <strong>{1}</ strong> después del documento",
        'search.document.detail.tabs.similarSources': "Fuentes similares",
        'search.document.detail.tabs.transcript': "Transcripción",
        'search.document.domain': "Dominio",
        'search.document.openInNewTab': "Abrir en una pestaña nueva",
        'search.document.reference': "Referencia",
        'search.document.staticContent': "Contenido estático",
        'search.document.summary': "Resumen",
        'search.document.title': "Título",
        'search.document.thumbnail': "Miniatura",
        'search.document.thumbnailUrl': "Miniatura URL",
        'search.document.url': "URL",
        'search.document.mmapUrl': "MMAP URL",
        'search.document.weight': "Peso",
        'search.editConcept.save': "Grabar",
        'search.editConcept.cancelSave': "Cancelar",
        'search.error.promotions': "Se ha producido un error al recuperar las promociones",
        'search.error.relatedConcepts': "Error: no se han podido recuperar los conceptos relacionados",
        'search.error.parametric': "Se ha producido un error al recuperar los filtros adicionales",
        'search.filters': "Filtros",
        'search.filters.applied': "Filtros aplicados",
        'search.filters.filter': "Filtros\u2026",
        'search.filters.empty': "No se encontraron filtros",
        'search.filters.removeAll': "Eliminar todo",
        'search.indexes': "Índices",
        'search.indexes.all': "Todo",
        'search.indexes.publicIndexes': "Índices público",
        'search.indexes.privateIndexes': "Índices privados",
        'search.indexes.empty': "Esperando Índices\u2026",
        'search.newSearch': "Nueva Búsqueda",
        'search.numericParametricFields': "Campos paramétricos numéricos",
        'search.numericParametricFields.error': "Error al cargar datos",
        'search.numericParametricFields.noValues': "Sin valores",
        'search.numericParametricFields.noMax': "Nro Max",
        'search.numericParametricFields.noMin': "Nro Min",
        'search.numericParametricFields.reset': "Reiniciar",
        'search.numericParametricFields.tooltip': "Rango: {0} \u2013 {1}\nContar: {2}",
        'search.noResults': "No se han encontrado resultados",
        'search.noMoreResults': "No se encontraron más resultados",
        'search.parametricFilters.modal.title': "Seleccionar filtros paramétricos",
        'search.parametricFields': "Campos paramétricos",
        'search.parametric.empty': "No se han encontrado campos paramétricos",
        'search.preview': "Previsualización",
        'search.preview.previewMode': "Modo Previsualización",
        'search.preview.mmap': "Explorar en MMAP",
        'search.preview.selectDocument': "Seleccione un documento de la lista para previsualizar",
        'search.relatedConcepts': "Conceptos relacionados",
        'search.relatedConcepts.topResults.error': "Se ha producido un error al obtener los mejores resultados",
        'search.relatedConcepts.topResults.none': "No se encontraron resultados",
        'search.relatedConcepts.notLoading': "La lista de índices aún no se ha recuperado",
        'search.relatedConcepts.none': "No hay conceptos relacionados",
        'search.results': "resultados",
        'search.results.pagination.of': "de",
        'search.results.pagination.showing': "Resultados",
        'search.results.pagination.to': "a",
        'search.resultsSort': "Ordenar",
        'search.resultsSort.date': "Por fecha",
        'search.resultsSort.relevance': "Por relevancia",
        'search.resultsView.list': "Lista",
        'search.resultsView.topic-map': "Mapa de tópicos",
        'search.resultsView.sunburst': "Sectores en Multinivel",
        'search.resultsView.sunburst.error.noParametricValues': "No se pudo mostrar los Sectores en Multinivel: su búsqueda no devolvió valores paramétricos.",
        'search.resultsView.sunburst.error.query': "Error: no se pudo mostrar los Sectores en Multinivel.",
        'search.resultsView.sunburst.error.noDependentParametricValues': "Hay demasiados campos paramétricos para mostrar en los Sectores en Multinivel.",
        'search.resultsView.sunburst.error.noSecondFieldValues': "No hay documentos con valores para ambos campos. Mostrar sólo los resultados del primer campo.",
        'search.resultsView.map': "Mapa",
        'search.resultsView.map.show.more': "Mostrar más",
        'search.resultsView.table': "Tabla",
        'search.resultsView.table.count': "Contar",
        'search.resultsView.table.error.query': "Error: no se pudo mostrar la vista de tabla.",
        'search.resultsView.table.error.noDependentParametricValues': "Hay demasiados campos paramétricos para mostrar en la vista de tabla.",
        'search.resultsView.table.info': "Mostrando _START_ a _END_ de _TOTAL_ entradas", // see https://datatables.net/reference/option/language.info
        'search.resultsView.table.infoFiltered': "(Filtrado desde _MAX_ de total de entradas)", // see https://datatables.net/reference/option/language.infoFiltered
        'search.resultsView.table.lengthMenu': "Mostrando _MENU_ entradas", // see https://datatables.net/reference/option/language.lengthMenu
        'search.resultsView.table.next': "Próximo",
        'search.resultsView.table.noneHeader': "Ninguno",
        'search.resultsView.table.previous': "Anterior",
        'search.resultsView.table.searchInResults': "Buscar en resultados",
        'search.resultsView.table.zeroRecords': "No se encontraron registros coincidentes",
        'search.resultsView.amount.shown': "Mostrando <strong>{0}</strong> hasta <strong>{1}</strong> de <strong>{2}</strong> resultados",
        'search.resultsView.amount.shown.no.increment': "Mostrando los mejores <strong>{0}</strong> resultados de <strong>{1}</strong>",
        'search.resultsView.amount.shown.no.results': "No hay resultados con el campo de ubicación seleccionado",
        'search.answeredQuestion': "Pregunta contestada",
        'search.answeredQuestion.systemName': "Contestada por {0}",
        'search.promoted': "Promocionado",
        'search.savedSearchControl.save': "Guardar",
        'search.savedSearchControl.openEdit.create': "Guardar Consulta",
        'search.savedSearchControl.openEdit.edit': "Guardar como consulta",
        'search.savedSearchControl.update': "Guardar",
        'search.savedSearchControl.nameSearch': "Nombra tu búsqueda",
        'search.savedSearchControl.searchType.QUERY': "Consulta",
        'search.savedSearchControl.searchType.SNAPSHOT': "Instantánea",
        'search.savedSearchControl.cancelSave': "Cancelar",
        'search.savedSearchControl.error': "Error: no se pudo guardar la búsqueda",
        'search.savedSearchControl.error.timeout': "Se acabó el tiempo de espera para guardar la búsqueda actual. Trate de refinar su consulta",
        'search.savedSearchControl.rename': "Renombrar",
        'search.savedSearchControl.openAsSearch': "Abrir como consulta",
        'search.savedSearchControl.titleBlank': "El título no debe estar en blanco",
        'search.savedSearchControl.nameAlreadyExists': "Una búsqueda con este nombre ya existe",
        'search.savedSearchControl.nameEmptyOrWhitespace': "El nombre debe contener al menos un carácter imprimible",
        'search.suggest.title': "Resultados similares a {0}",
        'search.topicMap.empty': "No se encontraron temas para esta consulta",
        'search.topicMap.error': "Error: no se han podido recuperar los temas de esta búsqueda",
        'search.topicMap.fast': "Rápido",
        'search.topicMap.accurate': "Preciso",
        'search.sunburst.title': "Distribución paramétrica",
        'search.sunburst.fieldPlaceholder.first': "Seleccione un campo",
        'search.sunburst.fieldPlaceholder.second': "Seleccione un campo",
        'search.sunburst.noValue': "Existen {0} valores adicionales con los recuentos de documentos demasiado pequeños para mostrarlos. Refine su búsqueda.",
        'search.savedSearches': "Búsquedas",
        'search.savedSearches.confirm.deleteMessage': "¿Seguro que desea eliminar {0} la búsqueda guardada?",
        'search.savedSearches.confirm.deleteMessage.title': "Eliminar la búsqueda guardada",
        'search.savedSearches.confirm.resetMessage': "¿Seguro que desea restablecer {0} la búsqueda guardada?",
        'search.savedSearches.confirm.resetMessage.title': "Restablecer búsqueda guardada",
        'search.savedSearches.deleteFailed': "Error: no se pudo eliminar la búsqueda guardada",
        'search.selected': "Seleccionado",
        'search.similarDocuments': "Documentos similares",
        'search.similarDocuments.error': "Error: no se han podido obtener documentos similares",
        'search.similarDocuments.none': "No se encontraron documentos similares",
        'search.spellCheck.showingResults': "Mostrando los resultados para",
        'search.spellCheck.searchFor': "Buscar",
        'settings.cancel': "Cancelar",
        'settings.cancel.message': "Se perderán todos los cambios no guardados.",
        'settings.cancel.title': "¿Cambiar la configuración?",
        'settings.close': "Cerrar",
        'settings.unload.confirm': "¡Tiene configuraciones no guardadas!",
        'settings.adminUser': "Usuario administrador",
        'settings.adminUser.description': "Configurar el nombre de usuario y la contraseña de admin para HPE Find.",
        'settings.answerServer.description': "Especificar dónde se encuentra el servidor de respuesta.",
        'settings.answerServer.enable': "Habilitar Answer Server",
        'settings.answerServer.enabled': "Answer Server está habilitado",
        'settings.answerServer.disable': "Deshabilitar Answer Server",
        'settings.answerServer.disabled': "Answer Server esta deshabilitado",
        'settings.answerServer.loading': "Cargando\u2026",
        'settings.answerServer.title': "Answer Server",
        'settings.community.description': "El Community server gestiona la autenticación en HPE Find. Recomendamos utilizar uno dedicado para HPE Find y no utilizarlo para ninguna otra actividad en la instalación de IDOL. El servidor de la comunidad necesitará un servidor Agentstore para el almacenamiento de datos.",
        'settings.community.login.type': "Tipo de acceso",
        'settings.community.login.fetchTypes': "Pruebe la conexión para recuperar los tipos de inicio de sesión disponibles.",
        'settings.community.login.invalidType': "Debe probar la conexión y elegir un tipo de inicio de sesión válido.",
        'settings.community.serverName': "community",
        'settings.community.title': "Community",
        'settings.content.description': "Especificar dónde se indexa el contenido.",
        'settings.content.title': "Contenido",
        'settings.description': "Esta página sirve para editar el archivo de configuración de la búsqueda. La ubicación del archivo de configuración se almacena en la propiedad del sistema Java {0}. La ubicación actual es {1}.",
        'settings.iod.apiKey': "API key",
        'settings.iod.application': "Aplicación",
        'settings.iod.domain': "Dominio",
        'settings.locale.title': "Lugar",
        'settings.locale.default': "Configuración predeterminada",
        'settings.logoutFromSettings': "Cerrar sesión de ajustes",
        'settings.map': "Mapping",
        'settings.map.attribution': "Atribución",
        'settings.map.description': "Ver información de ubicación. La URL del servidor de mosaico debe contener variables {x}, {y} y {z}",
        'settings.map.disable': "Deshabilitar Mapping",
        'settings.map.disabled': "Mapping está deshabilitado",
        'settings.map.enable': "Habilitar Mapping",
        'settings.map.enabled': "Mapping está habilitado",
        'settings.map.loading': "Cargando\u2026",
        'settings.map.results.step': "Resultados a cargar cada vez",
        'settings.map.url': "URL de la Plantilla del servidor mosaico",
        'settings.mmap': "MMAP",
        'settings.mmap.description': "Ver con MMAP",
        'settings.mmap.disable': "Deshabilitado MMAP",
        'settings.mmap.disabled': "MMAP está deshabilitado",
        'settings.mmap.enable': "Habilitar MMAP",
        'settings.mmap.enabled': "MMAP está habilitado",
        'settings.mmap.loading': "Cargando\u2026",
        'settings.mmap.url': "URL",
        'settings.savedSearches': "Búsquedas guardadas",
        'settings.savedSearches.description': "Configuración relacionada con búsquedas guardadas",
        'settings.savedSearches.loading': "Cargando\u2026",
        'settings.savedSearches.polling.disable': "Inhabilitar el sondeo",
        'settings.savedSearches.polling.disabled': "El sondeo de las actualizaciones de las búsquedas guardadas está deshabilitado",
        'settings.savedSearches.polling.enable': "Habilitar sondeo",
        'settings.savedSearches.polling.enabled': "Se activa la sondeo de actualizaciones de búsquedas guardadas",
        'settings.savedSearches.polling.interval': "Intervalo de sondeo (en minutos)",
        'settings.password': "Contraseña",
        'settings.password.description': "La contraseña se almacenará encriptada",
        'settings.password.redacted': "(redactado)",
        'settings.queryManipulation': "Manipulación de consultas",
        'settings.queryManipulation.blacklist': "Nombre de la lista negra",
        'settings.queryManipulation.description': "Habilitar la manipulación de consultas con QMS",
        'settings.queryManipulation.disable': "Deshabilitar la manipulación de consultas",
        'settings.queryManipulation.disabled': "La manipulación de consultas está deshabilitada",
        'settings.queryManipulation.dictionary': "Diccionario",
        'settings.queryManipulation.enable': "Habilitar la manipulación de consultas",
        'settings.queryManipulation.enabled': "La manipulación de consultas está habilitada",
        'settings.queryManipulation.expandQuery': "Habilitar sinónimos",
        'settings.queryManipulation.index': "Índice",
        'settings.queryManipulation.loading': "Cargando\u2026",
        'settings.queryManipulation.typeaheadMode': "Modo de mecanografía",
        'settings.requiredFields': "requiere todos los campos",
        'settings.restoreChanges': "Revertir cambios",
        'settings.retry': "Volver a intentar guardar",
        'settings.save': "Guardar cambios",
        'settings.save.confirm': "¿Está seguro de que desea guardar esta configuración?",
        'settings.save.confirm.title': "Confirmar Guardar",
        'settings.save.saving': "Guardando la configuración. Por favor espere\u2026",
        'settings.save.retypePassword': "(Puede que necesite volver a escribir su contraseña)",
        'settings.save.success': "¡Éxito!",
        'settings.save.success.message': "La configuración se ha guardado.",
        'settings.save.errorThrown': "Lanzó una excepción: ",
        'settings.save.failure': "¡Error!",
        'settings.save.failure.validation.message': "Error de validación en",
        'settings.save.failure.and': "y",
        'settings.save.failure.text': "¿Quieres volver a intentarlo?",
        'settings.save.unknown': "Error devuelto por el servidor: ",
        'settings.statsserver.description': "Enviar estadísticas a StatsServer para su análisis",
        'settings.statsserver.disable': "Desactivar la colección de estadísticas",
        'settings.statsserver.disabled': "La colección de estadísticas está deshabilitada",
        'settings.statsserver.enable': "Habilitar la colección de estadísticas",
        'settings.statsserver.enabled': "La colección de estadísticas está habilitada",
        'settings.statsserver.title': "StatsServer",
        'settings.statsserver.validation.CONNECTION_ERROR': "Se ha producido un error al ponerse en contacto con el servidor Stats",
        'settings.statsserver.validation.INVALID_CONFIGURATION': "StatsServer no está configurado correctamente para HPE Find",
        'settings.test': "Conexión de prueba",
        'settings.test.ok': "Conexión OK",
        'settings.test.databaseBlank': "¡La base de datos no debe estar en blanco!",
        'settings.test.failed': "La conexión falló",
        'settings.test.failed.password': "Se ha producido un error en la conexión (puede que tenga que volver a escribir su contraseña)",
        'settings.test.hostBlank': "¡El nombre del servidor no puede estar en blanco!",
        'settings.test.passwordBlank': "¡Las clave no puede estar en blanco!",
        'settings.test.portInvalid': "¡El rango de puertos no puede estar en blanco o fuera del rango 1-65535!",
        'settings.test.usernameBlank': "¡El nombre de usuario no puede estar en blanco!",
        'settings.username': "Usuario",
        'settings.view': "Visualización",
        'settings.view.connector': "Conector",
        'settings.view.description': "Ver documentos por un campo personalizado o mediante un conector",
        'settings.view.referenceFieldBlank': "El campo de referencia no debe estar en blanco",
        'settings.view.referenceFieldLabel': "Campo de referencia",
        'settings.view.referenceFieldPlaceholder': "Introduzca el campo de referencia",
        'settings.view.viewingMode': "Modo de visualización",
        'settings.CONNECTION_ERROR': "Se ha producido un error al contactar el servidor ACI",
        'settings.FETCH_PORT_ERROR': "Se ha producido un error al obtener los detalles de los puertos de índice y el servicio en el servidor.",
        'settings.FETCH_SERVICE_PORT_ERROR': "Se ha producido un error al obtener los detalles del puerto de servicio en el servidor",
        'settings.INCORRECT_SERVER_TYPE': "Tipo de servidor incorrecto. Asegúrese de que está usando uno de {0}",
        'settings.INDEX_PORT_ERROR': "Se ha producido un error al obtener los detalles del puerto de índice del servidor",
        'settings.REQUIRED_FIELD_MISSING': "Falta uno o más campos obligatorios",
        'settings.REGULAR_EXPRESSION_MATCH_ERROR': "El servidor de destino es de un tipo incorrecto",
        'settings.SERVICE_AND_INDEX_PORT_ERROR': "No se pudo determinar los puertos de servicio o de índice del servidor",
        'settings.SERVICE_PORT_ERROR': "No se pudo determinar el puerto de servicio",
        'users.password': "Contraseña",
        'users.admin': "Admin",
        'users.noUsers': "No se recuperaron usuarios del servicio Community.",
        'users.refresh': "Actualizar",
        'users.none': "Actualmente no hay usuarios administradores",
        'users.title': "Gestión de usuarios",
        'users.button.create': "Crear",
        'users.button.createUser': "Crear Usuario",
        'users.button.cancel': "Close",
        'users.create': "Crear Nuevo Usuario",
        'users.delete': "Borrar Usuario",
        'users.delete.text': "¿Está usted seguro?",
        'users.delete.confirm': "Confirmar",
        'users.delete.cancel': "Cancelar",
        'users.info.done': "¡Hecho!",
        'users.info.createdMessage': "Usuario {0} creado con éxito.",
        'users.info.deletedMessage': "Usuario {0} borrado con éxito.",
        'users.info.error': "¡Error!",
        'users.info.creationFailedMessage': "Error al crear un nuevo perfil de usuario.",
        'users.password.confirm': "Confirmar contraseña",
        'users.password.error': "La contraseña no debe estar en blanco",
        'users.select.level': "Seleccione el nivel de usuario:",
        'users.serverError': "Error devuelto por el servidor.",
        'users.admin.role.add': "Crear rol",
        'users.admin.role.add.title': "Función de administrador requerida",
        'users.admin.role.add.description': "El servicio de Community no tiene una función de administrador. ¿Desea crear una?",
        'wizard.last': "Cerrar sesión",
        'wizard.next': "Próximo",
        'wizard.prev': "Anterior",
        'wizard.step.settings': "Ajustes",
        'wizard.step.users': "Usuarios",
        'wizard.step.welcome': "Bienvenido",
        'wizard.welcome': "Bienvenido al asistente de configuración de Find",
        'wizard.welcome.helper': "Este asistente le ayudará a configurar Find en dos pasos rápidos:",
        'wizard.welcome.step1': "En la página Configuración, ajuste los detalles de la conexión y haga clic en Guardar",
        'wizard.welcome.step2': "En la página Usuarios, cree cuentas de usuario iniciales y haga clic en Cerrar sesión",
        'wizard.welcome.finish': "Después de completar el asistente de configuración, puede empezar a utilizar Find",
        'error.details': "Detalle error: {0}",
        'error.UUID': "Error UUID: {0}",	
        'error.message.default': "Un error ha ocurrido."
	});
});

