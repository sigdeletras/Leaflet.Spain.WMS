//Spain

L.TileLayer.WMS.Spain = {};	// Classes

L.tileLayer.wms.spain = {};	// Factories

// PNOA

L.TileLayer.WMS.Spain.PNOA = L.TileLayer.WMS.extend({
	options: {
		service: 'WMS',
		request: 'GetMap',
		version: '1.1.1',
		format: 'image/png',
		transparent: false,
		continuousWorld : true,
		attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
	}
});

// L.TileLayer.WMS.Spain.PNOA.mergeOptions();

L.tileLayer.wms.spain.pnoa = function(url, options) {
	return new L.TileLayer.WMS.Spain.PNOA(url, options);
}

// Ortofotos del PNOA. Máxima actualidad
// Capabilities:http://www.ign.es/wms-inspire/pnoa-ma?request=GetCapabilities&service=WMS
// El servicio permite visualizar las ortofotos de máxima actualidad del Plan Nacional de Ortofotografía Aérea
// (PNOA) a partir de una escala aproximada 1:70 000. Para escalas menores (menos detalladas) se visualizan las
// imágenes de satélite Spot5.

L.TileLayer.WMS.Spain.PNOA.Ortoimagen = L.TileLayer.WMS.Spain.PNOA.extend({
	initialize: function(options) {
		L.TileLayer.WMS.Spain.PNOA.prototype.initialize.call(this,
			'http://www.ign.es/wms-inspire/pnoa-ma',
			L.extend({ layers: 'OI.OrthoimageCoverage' }, options || {})
		);
	}
});

L.tileLayer.wms.spain.pnoa.ortoimagen = function(options) {
	return new L.TileLayer.WMS.Spain.PNOA.Ortoimagen(options);
}

L.TileLayer.WMS.Spain.PNOA.Mosaico = L.TileLayer.WMS.Spain.PNOA.extend({
	initialize: function(options) {
		L.TileLayer.WMS.Spain.PNOA.prototype.initialize.call(this,
			'http://www.ign.es/wms-inspire/pnoa-ma',
			L.extend({ layers: 'OI.MosaicElement' }, options)
		);
	}
});

L.tileLayer.wms.spain.pnoa.mosaico = function(options){
	return new L.TileLayer.WMS.Spain.PNOA.Mosaico(options);
}

// Ortofotos históricas del PNOA
// Capabilities: http://www.ign.es/wms/pnoa-historico?request=GetCapabilities&service=WMS

L.TileLayer.WMS.Spain.PNOA.Historico = L.TileLayer.WMS.Spain.PNOA.extend({
	initialize: function(year, options) {
		L.TileLayer.WMS.Spain.PNOA.prototype.initialize.call(this,
			'http://www.ign.es/wms/pnoa-historico',
			L.extend({ layers: 'PNOA' + year }, options)
		);
	}
});

L.tileLayer.wms.spain.pnoa.historico = function(year, options) {
	return new L.TileLayer.WMS.Spain.PNOA.Historico(year, options);
}

// Unidades administrativas
// Capabilities:http://www.ign.es/wms-inspire/unidades-administrativas?request=GetCapabilities&service=WMS
// Unidades administrativas tres niveles de administración (comunidad autónoma, provincia y municipio).

L.TileLayer.WMS.Spain.UnidadAdministrativa = L.TileLayer.WMS.extend({
	initialize: function(options) {
		L.TileLayer.WMS.Spain.PNOA.prototype.initialize.call(this, 'http://www.ign.es/wms-inspire/unidades-administrativas', options );
	},
	options: {
		layers: 'AU.AdministrativeUnit',
		format: 'image/png',
		transparent: false,
		continuousWorld : true,
		attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
	}
});

L.tileLayer.wms.spain.unidadadministrativa = function(options) {
	return new L.TileLayer.WMS.Spain.UnidadAdministrativa(options || {});
}

// Cartografía raster IGN.
// Capabilities: http://www.ign.es/wms-inspire/mapa-raster?request=GetCapabilities&service=WMS
// Cartografía raster del Instituto Geográfico Nacional.
// Mapa de España a escala 1:2 000 000 hasta una resolución de 420 m/pixel. 
// Mapa de España a escala 1:1 250 000 hasta una resolución de 104.44 m/pixel. 
// Mapa de España a escala 1:500 000 hasta una resolución de 40.04 m/pixel. 
// Mapa Provincial a escala 1:200 000 hasta una resolución de 20.16 m/pixel. 
// Mapa Topográfico Nacional a escala 1:50 000 hasta una resolución de 5.04 m/pixel
// Mapa Topográfico Nacional a escala 1:25 000 a partir de una resolución de 5.04 m/pixel. 


L.TileLayer.WMS.Spain.MapasrasterIGN = L.TileLayer.WMS.extend({
	initialize: function(options) {
		L.TileLayer.WMS.Spain.MapasrasterIGN.prototype.initialize.call(this, 'http://www.ign.es/wms-inspire/mapa-raster', options );
	},
	options: {
		layers: 'mtn_rasterizado',
		format: 'image/png',
		transparent: false,
		continuousWorld : true,
			attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
	}
});

L.tileLayer.wms.spain.mapasrasterign = function(options) {
	return new L.TileLayer.WMS.Spain.MapasrasterIGN(options || {});
}


// Mapa base de España del Instituto Geográfico Nacional
// Capabilities: http://www.ign.es/wms-inspire/ign-base?request=GetCapabilities&service=WMS
// Cartografía procedente de diversas bases de datos geográficas del IGN. 
// Para escalas menores se usa la Base Cartográfica Nacional escala 1:500.000 (BCN500) y 
// Base Topográfica Nacional escala 1:100.000 (BTN100) 
// y para escalas mayores se usa la Base Topográfica Nacional 1:25.000 (BTN25) junto con la Base Cartográfica Numérica 1:25.000 (BCN25).
// También se visualiza información procedente de NGBE (Nomenclátor Geográfico Básico de España), 
// SIGLIM (Sistema Geográfico de Líneas Límite) y Cartociudad.
var Spain_IGNBase = L.tileLayer.wms('http://www.ign.es/wms-inspire/ign-base', {
	layers: 'IGNBaseTodo',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
});

// Modelos Digitales del Terreno de España
// http://www.ign.es/wms-inspire/mdt?request=GetCapabilities&service=WMS
// Modelos Digitales del Terreno de España en diversos sistemas de referencia: 
// Modelo Digital de Elevaciones, Modelo Digital de Pendientes y Modelo Digital de Orientaciones.

var Spain_MDT_Elevaciones = L.tileLayer.wms('http://www.ign.es/wms-inspire/mdt?', {
	layers: 'EL.GridCoverage',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
});

var Spain_MDT_Orientaciones = L.tileLayer.wms('http://www.ign.es/wms-inspire/mdt?', {
	layers: 'Orientaciones',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
});

var Spain_MDT_Pendientes = L.tileLayer.wms('http://www.ign.es/wms-inspire/mdt?', {
	layers: 'Pendientes',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
});

// Cartografía Catastral
// Capabilities: http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?request=GetCapabilities&service=WMS
// Cartografía Catastral de la Dirección General del Catastro.

var Spain_Catastro = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
	layers: 'Catastro',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: ' <a href="http://www.catastro.meh.es/" target="_blank">Dirección General del Catastro</a>'
});

// ANDALUCIA

L.TileLayer.WMS.Andalucia = {};

// Callejero Digital de Andalucía Unificado
// Capabilities: http://www.callejerodeandalucia.es/servicios/cdau/wms?request=GetCapabilities&service=WMS
// Ejes de vía y los portales del Callejero Digital de Andalucía Unificado. 

var Andalucia_CDAUVialyPortal = L.tileLayer.wms('http://www.callejerodeandalucia.es/servicios/cdau/wms?', {
	layers: 'CDAU_wms',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
attribution: '<a href="http://www.callejerodeandalucia.es/portal/web/cdau/" target="_blank">Fuente: CDAU (Entidades Locales-Junta de Andalucía- IGN).</a>'
});

// CDAU Base Cartográfica
// Capabilities: http://www.callejerodeandalucia.es/servicios/base/wms?request=GetCapabilities&service=WMS
// Base cartográfica del Callejero Digital de Andalucía Unificado


var Andalucia_CDAUBase = L.tileLayer.wms('http://www.callejerodeandalucia.es/servicios/base/wms?', {
	layers: 'CDAU_base',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: '<a href="http://www.callejerodeandalucia.es/portal/web/cdau/" target="_blank">Fuente: CDAU (Entidades Locales-Junta de Andalucía- IGN).</a>'
});

// Mapa Toporaster10
// Capabilities: http://www.ideandalucia.es/services/toporaster10/wms?request=GetCapabilities&service=WMS

var Andalucia_MapaToporaster10 = L.tileLayer.wms('http://www.ideandalucia.es/services/toporaster10/wms?', {
	layers: 'toporaster10',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: '<a href="http://www.juntadeandalucia.es/institutodeestadisticaycartografia" target="_blank">Instituto de Estadística y Cartografía de Andalucía</a>'

});
