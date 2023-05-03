import "./css/styles.css";
import templateMap from './hbs/Map.hbs';
import templateRoot from './hbs/root.hbs';
import tt from "@tomtom-international/web-sdk-maps"

import toxicStyle from "./js/toxic";



// use root template, apply to "app" div
let appEl = document.getElementById("app");
let mainEl;
appEl.innerHTML = templateRoot({ siteInfo: { title: "Map" } }); // apply root.hbs template to index.html div with id app
window.onload = () => {

	mainEl = document.getElementById("main");
	mainEl.innerHTML = templateMap(); // apply Map.hbs template to index.html div with id main
	initMap();
};
let map;

var markerHeight = 50, markerRadius = 10, linearOffset = 25;
var popupOffsets = {
	'top': [0, 0],
	'top-left': [0, 0],
	'top-right': [0, 0],
	'bottom': [0, -markerHeight],
	'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
	'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
	'left': [markerRadius, (markerHeight - markerRadius) * -1],
	'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};


let initMap = () => {
	map = tt.map({
		key: "Halz0PnAneUUAxyKTrE3lM5t4CwelDY1",
		container: "map",
		style: toxicStyle, //taken from toxic.js file, ehich is a json export fom tomtom webiste, inserted into a "export default{} object"
		center: [-75, 45], //the default center of the map
		zoom: 12, //the default zoom of the map
	});

	var marker = new tt.Marker()
		.setLngLat([-75.765, 45.455])
		.addTo(map);




	marker.on('click', function (e) {
		console.log(e)
	});


	var popup = new tt.Popup({ offset: popupOffsets, className: 'popup' })
		.setLngLat(marker.getLngLat())
		.setHTML("<h1>Hello I'm a Popup!</h1>")
		.addTo(map);

	marker.setPopup(popup);
};