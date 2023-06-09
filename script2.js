const back = document.getElementById('button');
const pageTwo = document.getElementById('div');

back.addEventListener('click', getBack);
function getBack() {
    location.replace('index.html');
};

pageTwo.addEventListener('mouseover', getCall);
function getCall() {
    console.log('Висота екрана', screen.height, 'Ширина екрана', screen.width);
};

function initMap() {
    const geocoder = new google.maps.Geocoder();

    navigator.geolocation.getCurrentPosition(function (position) {
        const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        console.log('Широта', pos.lat);
        console.log('Довгота', pos.lng);

        geocodeLatLng(geocoder, pos);

        const opt = {
            center: pos,
            zoom: 12
        };

        const myMap = new google.maps.Map(document.getElementById("map"), opt);

        const marker = new google.maps.Marker({
            position: pos,
            map: myMap,
            title: 'Ты навел на меня',
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });
    });

    document.cookie = "SameSite=None; Secure";
}

function geocodeLatLng(geocoder, pos) {
    geocoder.geocode({ location: pos }, (results, status) => {
        if (status === "OK" && results[0]) {
            const address = results[0].formatted_address;
            console.log('Адреса:', address);
        } else {
            console.log('Не вдалося знайти адресу');
        };
    });
};