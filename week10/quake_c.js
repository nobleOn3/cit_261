import { getLocation } from './util.js';
import Quake from './quake.js';
import QuakesView from './quake_v.js';

// Quake controller
export default class QuakesController {
  constructor(parent, position = null) {
    this.parent = parent;
    // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
    this.parentElement = null;
    // let's give ourselves the option of using a location other than the current location by passing it in.
    this.position = position || {
      lat: 0,
      lon: 0
    };
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.quakes = new Quake();
    this.quakesView = new QuakesView();
  }
  async init() {
    // use this as a place to grab the element identified by this.parent, do the initial call of this.initPos(), and display some quakes by calling this.getQuakesByRadius()
    this.parentElement = document.querySelector(this.parent);
    console.log(this.parentElement);
    await this.initPos();
    this.getQuakesByRadius(100);
  }
  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        // try to get the position using getLocation()
        await getLocation().then(loc => {
            this.position.lat = loc.coords.latitude;
            this.position.lon = loc.coords.longitude;
        });
        // if we get the location back then set the latitude and longitude into this.position
      } catch (error) {
        console.log(error);
      }
    }
    console.log("Position right after the init stuff:");
    console.log(this.position);
  }

  async getQuakesByRadius(radius = 100) {
    // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
    //set loading message
    this.parentElement.innerHTML = 'Loading...';
    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quakes.getEarthQuakesByRadius(
      this.position,
      100
    );
    // render the list to html
    this.quakesView.renderQuakeList(quakeList, this.parentElement);
    // add a listener to the new list of quakes to allow drill down in to the details
    this.parentElement.addEventListener('touchend', e => {
        //console.log(e.target);
        //console.log(e.target.dataset.id)
      this.getQuakeDetails(e.target.dataset.id);
    });
  }
  async getQuakeDetails(quakeId) {
    // get the details for the quakeId provided from the model, then send them to the view to be displayed
    let qke = this.quakes.getQuakeById(quakeId);
    console.log("This is qke!",qke);
    this.quakesView.renderQuake(qke, this.parentElement);
  }
}