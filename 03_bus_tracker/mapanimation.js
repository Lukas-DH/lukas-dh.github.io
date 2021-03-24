const busIcon = (color) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" height="100%" width="100%"><title>bus-11.svg</title><rect fill="#FFF" x="0" y="0" width="100%" rx="50%" height="100%"></rect>
	<path fill=${color} transform="translate(2 2)" d="M3,0C2,0,1,0.5312,1,2v4v3.5c0,0,0,0.5,0.5,0.5L2,10.0156V10.5
	c0,0,0,0.5,0.5,0.5H3c0,0,0.5,0,0.5-0.5v-0.4844L7.5,10v0.5c0,0,0,0.5,0.5,0.5h0.5C9,11,9,10.5,9,10.5v-0.4844L9.5,10
	c0,0,0.5,0,0.5-0.5V6V2c0-1.5-1-2-2-2H3z M3.75,1h3.5C7.3885,1,7.5,1.1115,7.5,1.25S7.3885,1.5,7.25,1.5h-3.5
	C3.6115,1.5,3.5,1.3885,3.5,1.25S3.6115,1,3.75,1z M3,2h5c1,0,1,1,1,1v2c0,0,0,1-1,1H3C2,6,2,5,2,5V3C2,3,2,2,3,2z M2.75,7.5
	c0.4142,0,0.75,0.3358,0.75,0.75C3.5,8.6642,3.1642,9,2.75,9S2,8.6642,2,8.25C2,7.8358,2.3358,7.5,2.75,7.5z M8.25,7.5
	C8.6642,7.5,9,7.8358,9,8.25C9,8.6642,8.6642,9,8.25,9C7.8358,9,7.5,8.6642,7.5,8.25C7.5,7.8358,7.8358,7.5,8.25,7.5z">
	</path>
</svg>`

// let el = document.createElement('div');
// //   el.className = 'marker';

// mapboxgl.accessToken = 'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';
mapboxgl.accessToken = 'pk.eyJ1IjoibHVrYXMtZGgiLCJhIjoiY2ttMjJtNGMwMDU4bjJxbnJzMzJrdW42NCJ9.srMNV3NUZpejEUsAuunpZQ'


// Load Light Styled Map
var map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/outdoors-v11",
    
	center: [-71.090081, 42.352554],
	zoom: 12,
});

const busArray = [];

function busColor() {
	const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	return  randomColor}

async function createMarkers(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);


	locations.forEach(bus => {
        if (!busArray[bus.id]) {
			var busDiv = document.createElement('div');
			busDiv.classList.add("marker");
			busDiv.innerHTML = busIcon(busColor())
            busArray[bus.id] = new mapboxgl.Marker({
				element:busDiv,
			})
			
    }

    busArray[bus.id]
        .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
        .addTo(map)
		console.log(bus.id)
		console.log(bus.attributes.latitude)
		console.log(bus.attributes.longitude)
	});
    setTimeout(() => createMarkers(), 5000);
}

async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

createMarkers()
