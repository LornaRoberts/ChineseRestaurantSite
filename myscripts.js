
var latestMenu= '<div id="menutext"><img src="https://res.cloudinary.com/dytmcam8b/image/upload/v1592679352/Chinese%20Restaurant/louis-hansel-shotsoflouis-U6-KvV7HlMk-unsplash.jpg" id="menupic" alt=""></br>Hotpot</br>Chow Mein</br>Sichuan Beef</br>Shrimps with vermicelli and garlic</br>Dumplings</br>Peking Roasted Duck</div>';
var approach1 = '<div id="approach"><img src="https://res.cloudinary.com/dytmcam8b/image/upload/v1560167054/Chinese%20Restaurant/squid.jpg" id="approachpic" alt=""></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>'
var locationmap = '<div id="location"><img src="https://res.cloudinary.com/dytmcam8b/image/upload/v1592751189/Chinese%20Restaurant/map.png" id="map" alt=""></br>Sat-nav-  Postcode PH1 5RP </div>'
var reserveInfo = '<div id="reservations">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>'
var gifts= '<div id="gifting"><img id="giftpic" src="https://res.cloudinary.com/dytmcam8b/image/upload/v1592679360/Chinese%20Restaurant/kyndall-ramirez-3HpyvyPCjPA-unsplash.jpg" alt=""></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>'

function reload(){
    window.location.reload(true);  
}


function menu() {
  
    var el = document.getElementById("changetotext");
    el.innerHTML = latestMenu;

}

function approach() {
    
    var el = document.getElementById("changetotext");
    document.getElementById("changetotext").innerHTML = approach1;
}

function location1(){
    var el = document.getElementById("changetotext");
    document.getElementById("changetotext").innerHTML = locationmap;

}

function reserve(){
    var el = document.getElementById("changetotext");
    document.getElementById("changetotext").innerHTML = reserveInfo;
}

function gifting1(){
    var el = document.getElementById("changetotext");
    document.getElementById("changetotext").innerHTML = gifts;
}