import { qs, qsa, bindTouch } from "./utl.js";
//create an array of hikes

const hikeList = [
    {
      name: 'Bechler Falls',
      imgSrc: 'falls.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',
      description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
      directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
    {
      name: 'Teton Canyon',
      imgSrc: 'falls.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',
      description: 'Beautiful short (or long) hike through Teton Canyon.',
      directions:
        'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
    },
    {
      name: 'Denanda Falls',
      imgSrc: 'falls.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '7 miles',
      difficulty: 'Moderate',
      description:
        'Beautiful hike through Bechler meadows river to Denanda Falls',
      directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
    }
  ];
  
  const imgBasePath = '//byui-cit.github.io/cit261/examples/';

  export function showHikeList() {
    const hikeListElement = document.getElementById('hikes');
    hikeListElement.innerHTML = '';
    renderHikeList(hikeList, hikeListElement);
  }

  export function showDetails(e){
    console.log(e.target);
    let hike = e.target;
    let details = document.createElement('div');
    let title = document.createElement('h3');
    let info = document.createElement('p');
    title.innerHTML = "Details";
    console.log(hike.childNodes[5].childNodes[5].value);
    console.log(hike.childNodes[5].childNodes[5].value);
    console.log(hike.childNodes[5].childNodes[5].value);
    info.innerHTML = hikeList[hike.childNodes[5].childNodes[5].value].description;
    details.appendChild(title);
    details.appendChild(info);
    hike.removeChild(hike.childNodes[5]);
    hike.appendChild(details);
  }
  
  function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(renderOneHike(hike));
    });
  }
  function renderOneHike(hike) {
    const item = document.createElement('li');
    let i = 0;
  
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div class ="info">
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
                  <div id='placeInArr' value = ${i}></div>
          </div>`;
  
    return item;
  }
  