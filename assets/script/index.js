'use strict';

window.onload = function() {
    const figure = document.querySelector('figure');
    const mapbox = document.getElementById('map-container');
    const icon = document.querySelector('.icon');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    setInterval(slider, 2000);

    mapbox.accessToken = 'pk.eyJ1IjoiYmFjaGFyYWxoYW1hZGEiLCJhIjoiY2xxNjEwZWhuMG5pMzJscGUxbHZmNTY1cyJ9.WVtKt8B3LU2cCkIz7Ln5vw';

    function makeMap(longitude, latitude) {
        let map = new mapbox.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [longitude, latitude],
            zoom: 15
        });

        new mapbox.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map);
    }

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    icon.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function getLocation(position) {
                    const longitude = position.coords.longitude;
                    const latitude = position.coords.latitude;
                    makeMap(longitude, latitude);
                },
                function error() {
                    modal.style.display = 'block';
                }
            );
        } else {
            modal.style.display = 'block';
        }
    });
};
