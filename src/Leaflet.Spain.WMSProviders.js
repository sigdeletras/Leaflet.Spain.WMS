//Spain

// Ortofotos del históricas del PNOA 

		var Spain_PNOA_2004 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
			layers: 'PNOA2004',			format: 'image/png',
			transparent: true,
			continuousWorld : true,
			attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
		});
		var Spain_PNOA_2005 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
			layers: 'PNOA2005',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
			attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
		});
		var Spain_PNOA_2006 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
			layers: 'PNOA2006',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
			attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
		});
		var Spain_PNOA_2007 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
			layers: 'PNOA2007',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
			attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
		});
		var Spain_PNOA_2008 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
			layers: 'PNOA2008',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
			attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
		});
		var Spain_PNOA_2009 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
			layers: 'PNOA2009',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
			attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
		});
		var Spain_PNOA_2010 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
			layers: 'PNOA2010',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
			attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
		});

// Ortofotos del PNOA 
// El servicio permite visualizar las ortofotos de máxima actualidad del Plan Nacional de Ortofotografía Aérea 
// (PNOA) a partir de una escala aproximada 1:70 000. Para escalas menores (menos detalladas) se visualizan las 
// imágenes de satélite Spot5.

		var Spain_PNOA_Ortoimagen = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
			layers: 'OI.OrthoimageCoverage',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
			attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
		});
		var Spain_PNOA_Mosaico = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
			layers: 'OI.MosaicElement',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
			attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
		});

// Unidades administrativas
// Unidades administrativas tres niveles de administración (comunidad autónoma, provincia y municipio).

		var Spain_UnidadAdministrativa = L.tileLayer.wms('http://www.ign.es/wms-inspire/unidades-administrativas', {
			layers: 'AU.AdministrativeUnit',
			format: 'image/png',
			transparent: true,
			continuousWorld : true,
			attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a>'
			
		});