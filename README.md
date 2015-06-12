Leaflet.Spain.WMS
=================
Archivo JavaScript con una recopilación de  servicios de visualización de mapas (WMS) para España para ser visualizados en [Leaflet](http://leafletjs.com/). 

JavaScript file with a compilation of some Web Map Services (WMS) to Spain to be used in [Leaflet](http://leafletjs.com/).

##Opciones de instalación / Install Options

- Clonar/Clone.. `https://github.com/sigdeletras/Leaflet.Spain.WMS.git`

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
  <script src="../src/Leaflet.Spain.WMS.js"></script>
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
Para ver algunos ejemplos acceder a la carpeta *examples*
```
./examples/pnoa.html
```

##Demo


[Spain WMS Services on Leaflet](http://sigdeletras.github.io/Leaflet.Spain.WMS/examples/pnoa.html) 

## Proveedores / Providers


Ministerio de Fomento:
* Instituto Geográfico Nacinal
    * PNOA
    * PNOA Histórico
    * Unidades administrativas

## Licencia/License 
<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.
