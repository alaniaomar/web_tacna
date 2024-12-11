var map = L.map('map', {
    center: [-17.988772512089067, -70.23930785582671],
    zoom: 9,
    minZoom: 17,
    maxZoom: 20,
    maxBounds: [[-17.99178,-70.246045], [-17.980808,-70.23135]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
bgoogleSat.addTo(map);

var calles = L.tileLayer.wms("http://localhost:8080/geoserver/web_tacna/wms?", {
	   layers: "web_tacna:calles", //gisweb:calles_tacna
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
calles.addTo(map);
var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/web_tacna/wms?", {
	   layers: "web_tacna:colegio", //gisweb:calles_tacna
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
colegios.addTo(map);
var guarderia = L.tileLayer.wms("http://localhost:8080/geoserver/web_tacna/wms?", {
	   layers: "web_tacna:guarderia", //gisweb:calles_tacna
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
guarderia.addTo(map);
var instituciones = L.tileLayer.wms("http://localhost:8080/geoserver/web_tacna/wms? ", {
	   layers: "	web_tacna:instituciones", //gisweb:calles_tacna
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
instituciones.addTo(map);
var lotes = L.tileLayer.wms("http://localhost:8080/geoserver/web_tacna/wms?", {
	   layers: "web_tacna:lotess", //gisweb:calles_tacna
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
lotes.addTo(map);
var mercado = L.tileLayer.wms("http://localhost:8080/geoserver/web_tacna/wms?", {
	   layers: "	web_tacna:mercado", //gisweb:calles_tacna
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
mercado.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "Google satelite": bgoogleSat
};

var overlayMaps = {
    "Centros educativos": colegios,
    "lotes": lotes,
    "mercado": mercado,
    "guarderia": guarderia,
    "instituciones": instituciones,
    "calles":calles
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);