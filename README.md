Leaflet.Spain.WMSProviders
=================
An extension to [Leaflet](http://leafletjs.com/) that contains configurations for various Spain WMS providers.

Usage
===

```Javascript
//add Daum Street Layer to map.
new L.Proj.TileLayer.TMS.Provider('DaumMap.Street').addTo(map);
```
```Javascript
//add Daum Street Layer to map.
L.Proj.TileLayer.TMS.provider('DaumMap.Street').addTo(map);
```
This library provides a prefilled layer control, so you can just provide an array of strings:
```JavaScript
var baseLayers = {
	'PNOA': L.Proj.TileLayer.TMS.provider('DaumMap.Street').addTo(map),
	'Daum Satellite Map' : L.Proj.TileLayer.TMS.provider('DaumMap.Satellite')
};

var overlayLayers = {
	'Daum Hybrid Map' : L.Proj.TileLayer.TMS.provider('DaumMap.Hybrid'),
	'Daum Physical Map' : L.Proj.TileLayer.TMS.provider('DaumMap.Physical')
};		

var layerControl = L.control.layers.provided(baseLayers, overlays).addTo(map);

//you can still add your own afterwards with
layerControl.addBaseLayer(layer, name);
```
```JavaScript
var baseLayers = {
	'Naver Street Map': L.Proj.TileLayer.TMS.provider('NaverMap.Street').addTo(map),
	'Naver Satellite Map': L.Proj.TileLayer.TMS.provider('NaverMap.Satellite'),
	'Naver Hybrid Map': L.Proj.TileLayer.TMS.provider('NaverMap.Hybrid'),
	'Naver Cadastral Map': L.Proj.TileLayer.TMS.provider('NaverMap.Cadastral', null, {opacity : 1.0})
};

var overlayLayers = {
	'Naver Cadastral Map': L.Proj.TileLayer.TMS.provider('NaverMap.Cadastral')
};

L.control.layers(baseLayers, overlayLayers, {collapsed: false}).addTo(map);
```

Example
===

```Javascript
var map = L.map('map', {
	crs: L.Proj.CRS.TMS.Daum, 
	continuousWorld: true,
	worldCopyJump: false,
	zoomControl: true
});

var baseLayers = {
	'Daum Street Map': L.Proj.TileLayer.TMS.provider('DaumMap.Street').addTo(map),
	'Daum Satellite Map' : L.Proj.TileLayer.TMS.provider('DaumMap.Satellite')
};

var overlayLayers = {
	'Daum Hybrid Map' : L.Proj.TileLayer.TMS.provider('DaumMap.Hybrid'),
	'Daum Physical Map' : L.Proj.TileLayer.TMS.provider('DaumMap.Physical')
};

L.control.layers(baseLayers, overlayLayers, {collapsed: false}).addTo(map);
map.setView([38, 127], 0);
```
There are more examples at the examples folder like below.
```
./examples/pnoa.html
```

Live Demo
===

[Spain WMS Services on Leaflet](http://tontita.github.io/Leaflet.KoreanTmsProviders/) 

WMS Services Providers
===

Ministerio de Fomento:
* Instituto Geográfico Nacinal
    * PNOA
    * PNOA Histórico
    * Unidades administrativas

### License 
<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.
