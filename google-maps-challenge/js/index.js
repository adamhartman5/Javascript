window.onload = () => {
    displayStores();
}

function initMap() {
    var losAngeles = {lat: 34.063380, lng: -118.358080};
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap',
    });
}

function displayStores() {
    for(var store of stores){
        console.log(store)
    }
}