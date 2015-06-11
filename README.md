Leaflet.Spain.WMSProviders
=================
An extension to [Leaflet](http://leafletjs.com/) that contains configurations for various Spain WMS providers.

Install Options
===
- Clone.. `git clone https://github.com/ljagis/leaflet-measure.git`

Use bundled `Leaflet.Spain.WMSProviders.js`
===

Include the [Leaflet Source](http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js) and `Leaflet.Spain.WMSProviders.js`

```html
<!doctype HTML>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css">

</head>
<body>
  <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
  <script src="../src/Leaflet.Spain.WMSProviders.js"></script>
  <script>
    // Start creating maps
  </script>
</body>
</html>
```

Usage
===

```Javascript
//add Daum Street Layer to map.
Spain_PNOA_Mosaico.addTo(map);
```

Example
===

```Javascript
v	var map = L.map('map', {
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
There are more examples at the examples folder like below.
```
./examples/pnoa.html
```

Live Demo
===

[Spain WMS Services on Leaflet](http://sigdeletras.github.io/Leaflet.Spain.WMSProviders/examples/pnoa.html) 

Providers
===

Ministerio de Fomento:
* Instituto Geográfico Nacinal
    * PNOA
    * PNOA Histórico
    * Unidades administrativas

### License 
<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.
