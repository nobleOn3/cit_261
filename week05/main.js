 import {showHikeList, showDetails} from "./hike.js"
 //on load grab the array and insert it into the page
  window.addEventListener('load', showHikeList);
  document.getElementById('hikes').addEventListener('click', showDetails)