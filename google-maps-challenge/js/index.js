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
    var storesHtml = '';
    for(var store of stores){
        storesHtml += `
            <div class="store-container">
                <div class="store-info-container">
                    <div class="store-address">
                        <span>8480 Beverly Blvd</span>
                        <span>Los Angeles, CA 90048</span>
                    </div>
                    <div class="store-phone-number">
                        727-867-5309
                    </div>
                </div>
                <div class="store-number-container">
                    <div class="store-number">
                        1
                    </div>
                </div>
            </div>
        `
        document.querySelector('.stores-list').innerHTML = storesHtml
    }
}