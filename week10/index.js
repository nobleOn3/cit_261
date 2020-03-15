import{getJSON, getLocation} from './util.js'; //Non-default import, remember that this is dumb, cant find with simple reference to filename.
import QuakesController from './quake_c.js';
const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';


let quake_c = new QuakesController("#quakeList");
console.log(quake_c.parent);
quake_c.init();







// getLocation().then(data => {
//     //console.log();
//     let url = baseUrl + `&latitude=${data.coords.latitude}&longitude=${data.coords.longitude}&maxradiuskm=100`;
//     console.log(url);
//     getJSON(url).then(data=>{
//         console.log(data);
//         for(let i = 0; i < data.features.length; i++)
//             document.getElementById("tmp").innerHTML += (data.features[i].properties.mag + 
//                 " " + data.features[i].properties.place);
//     })
// });

// document.addEventListener('load', () => {
//     getJSON(url).then(data => console.log(data.results));
// });

//console.log("Hello, from index.js!");

//let response = getJSON(url);
//console.log(response);