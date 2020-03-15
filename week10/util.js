let url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

export function getJSON(url){
    console.log("Hello!");
    return fetch(url).then((response) => {
        if(response.ok) {
            //console.log(response.json());
            return response.json();
        }
        throw Error(response.statusText);
    }).catch( error => console.log('There was an error!', error) );
};

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};