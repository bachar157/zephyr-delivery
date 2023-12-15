'use strit'
const figure = document.querySelector('figure');
const mapbox = document.getElementById('map-container');   
const icon = document.querySelector('.icon');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');


let start = 0;
function slider() {
    start < slides.length ? start = start + 1  :  start = 1; 
    figure.innerHTML = "<img src='./assets/image/" + slides[start-1] + "'>";
}
setInterval(slider, 2000);

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFjaGFyYWxoYW1hZGEiLCJhIjoiY2xxNXpkNDN4MG5vdjJrbXg4ZGxqc2ExbSJ9.YU3s-nwlVBqMAGduw-EWMg';

function makeMap(longitude, latitude) {
    var map = new mapboxgl.Map({
        container: 'map-container',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude],
        zoom: 15,
    });

    new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
}

// Modal close event
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Geolocation event
icon.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function getLocation(position) {
                const longitude = position.coords.longitude;
                const latitude = position.coords.latitude;
                makeMap(longitude, latitude); 
            });
    } else {
        modal.style.display = 'block';
    }
});
