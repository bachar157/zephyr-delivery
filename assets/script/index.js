'use strict';


    const figure = document.querySelector('figure');
    const mapbox = document.getElementById('map');
    const icon = document.querySelector('.icon');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

  

    
        mapboxgl.accessToken = 'pk.eyJ1IjoiYmFjaGFyYWxoYW1hZGEiLCJhIjoiY2xxNmNjYWRjMDc0ejJpbno3cmNyZWN2ZSJ9.SJcOC6oDZhFYpJP5iKvq9A';
    
        // Initialize map with a default location (e.g., New York City)
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-97.1384, 49.8951],
                        zoom: 10,
        });
    
        function updateMap(longitude, latitude) {
            map.flyTo({
                center: [longitude, latitude],
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
    
            new mapboxgl.Marker()
                .setLngLat([longitude, latitude])
                .addTo(map);
        }
    
        icon.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function getLocation(position) {
                        const longitude = position.coords.longitude;
                        const latitude = position.coords.latitude;
                        updateMap(longitude, latitude);
                    },
                    function error() {
                        modal.style.display = 'block';
                    }
                );
            } else {
                modal.style.display = 'block';
            }
        });
    
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    