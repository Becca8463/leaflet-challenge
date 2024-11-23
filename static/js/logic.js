// Storing the API endpoint as queryUrl.
let queryUrl = https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson;

// Creating get request
d3.json(url).then(function(data) {
    createFeatures(data.features)
});

let myMap =  L.map("map"), {
    center: [45.52, -122.67],
    zoom: 7
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
                                                                                                                   m m