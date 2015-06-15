Leaflet.Spain.WMS
=================
Archivo JavaScript con una recopilación de  servicios de visualización de mapas (WMS) para España para ser visualizados en [Leaflet](http://leafletjs.com/). 

JavaScript file with a compilation of some Web Map Services (WMS) for Spain to be used in [Leaflet](http://leafletjs.com/).

##Opciones de instalación / Install Options

- Clonar/Clone.. `https://github.com/sigdeletras/Leaflet.Spain.WMS.git`
- Incluir `Leaflet.Spain.WMS.js` dentro de la etiqueta `<head>`. Include `Leaflet.Spain.WMS.js` inside the `<head>` tag.

##¿Cómo usar Leaflet.Spain.WMS.js? / How to use Leaflet.Spain.WMS.js?

Incluir las fuentes de [Leaflet](http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js) y `Leaflet.Spain.WMS.js` dentro de la etiqueta `<head>` del documento HTML. 

Include the [Leaflet Source](http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js) and `Leaflet.Spain.WMS.js` inside the `<head>` tag of the HTML document.

```html
<!doctype HTML>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css">

</head>
<body>
  <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
  <script src="https://sigdeletras.github.io/Leaflet.Spain.WMS/src/Leaflet.Spain.WMS.js"></script>
  
  <script>
    // Start creating maps
  </script>
</body>
</html>
```

##Uso/Usage

```Javascript
//add PNOA Layer to map.
Spain_PNOA_Mosaico.addTo(map);
```

##Ejemplo/Example


```Javascript
	var map = L.map('map', {
		zoomControl:true, 
		maxZoom:20,
		layers:[Spain_UnidadAdministrativa,Spain_PNOA_Ortoimagen]
	}).fitBounds([[24.9300000311,-19.6],[46.0700000311,5.6]]);
	
	var baselayers = {
		"PNOA Mosaico": Spain_PNOA_Mosaico,
		"PNOA Máx. Actualidad": Spain_PNOA_Ortoimagen,
		"PNOA 2010": Spain_PNOA_2010
	};

	var overlayers = {
		"Unidades administrativas": Spain_UnidadAdministrativa
	};
	
	L.control.layers(baselayers, overlayers,{collapsed:false}).addTo(map);
```
Para ver algunos ejemplos acceder a la carpeta examples.

To see some examples access the examples folder.

```
./examples/index.html
./examples/pnoa.html
./examples/andalucia.html
```

##Demo

* [Spain](http://sigdeletras.github.io/Leaflet.Spain.WMS/examples/)
* [Spain PNOA Orthoimages](http://sigdeletras.github.io/Leaflet.Spain.WMS/examples/pnoa.html) 
* [Andalucía](http://sigdeletras.github.io/Leaflet.Spain.WMS/examples/andalucia.html) 

## Proveedores, metadatos y capas / Providers, metadata and layers


### España / Spain
#### Instituto Geográfico Nacional

<table><tr><th>WMS</th><th>Layers</th></tr>
    <tr>
		<td>
                    <a href="http://www.ign.es/wms-inspire/pnoa-ma?request=GetCapabilities&service=WMS">PNOA Máxima actualidad</a>
		</td><td>
			Spain_PNOA_Ortoimagen, Spain_PNOA_Mosaico
		</td>
	</tr>	
    <tr>
		<td>
                        <a href="http://www.ign.es/wms/pnoa-historico?request=GetCapabilities&service=WMS">PNOA Histórico</a>
		</td><td>
			Spain_PNOA_2004, Spain_PNOA_2005, Spain_PNOA_2006, Spain_PNOA_2007, Spain_PNOA_2008, Spain_PNOA_2009, Spain_PNOA_2010
		</td>
	</tr>
    <tr>
		<td>
                        <a href="http://www.ign.es/wms-inspire/unidades-administrativas?request=GetCapabilities&service=WMS">Unidades administrativas</a>
		</td><td>
			Spain_UnidadAdministrativa
		</td>
	</tr>
    <tr>
		<td>
                        <a href="http://www.ign.es/wms-inspire/mapa-raster?request=GetCapabilities&service=WMS">Cartografía raster IGN</a>
		</td><td>
			Spain_MapasrasterIGN
		</td>
	</tr>
	<tr>
		<td>
                    <a href="http://www.ign.es/wms-inspire/ign-base?request=GetCapabilities&service=WMS">Mapa base de España IGN</a>
		</td><td>
			Spain_IGNBase
		</td>
	</tr>
		<tr>
		<td>
                    <a href="http://www.ign.es/wms-inspire/mdt?request=GetCapabilities&service=WMS">Modelos Digitales del Terreno de España</a>
		</td><td>
			Spain_MDT_Elevaciones,Spain_MDT_Orientaciones, Spain_MDT_Pendientes
		</td>
	</tr>
		</tr>

</table>
#### Dirección General del Catastro
<table><tr><th>WMS</th><th>Layers</th></tr>
		<tr>
		<td>
                    <a href="http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?request=GetCapabilities&service=WMS">Cartografía Catastral</a>
		</td><td>
			Spain_Catastro
		</td>
	</tr>
</table>

## Andalucía
###Instituto de Estadística y Cartografía de Andalucía
<table><tr><th>WMS</th><th>Layers</th></tr>
	<tr>
		<td>
                    <a href="http://www.callejerodeandalucia.es/servicios/cdau/wms?request=GetCapabilities&service=WMS">Callejero Digital de Andalucía Unificado</a>
		</td><td>
			Andalucia_CDAUVialyPortal, Andalucia_CDAUBase
		</td>
	</tr>
	<tr>
		<td>
                    <a href="http://www.ideandalucia.es/services/toporaster10/wms?request=GetCapabilities&service=WMS">Mapa Toporaster10</a>
		</td><td>
			Andalucia_MapaToporaster10
		</td>
	</tr>
</table>

## Licencia/License 
<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.
