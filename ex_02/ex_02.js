window.onload = function() {
  var map = L.map('map').setView([48.8566, 2.3522], 6);


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  var epitechIcon = L.icon({
      iconUrl: 'https://www.pngkit.com/png/full/459-4596239_epitech-epitech-logo-transparent.png',
      iconSize: [38, 45], 
      iconAnchor: [19, 45], 
      popupAnchor: [0, -45] 
  });

  var schools = [
      { name: "Paris", lat: 48.8566, lng: 2.3522 },
      { name: "Bordeaux", lat: 44.8378, lng: -0.5792 },
      { name: "Lyon", lat: 45.7640, lng: 4.8357 },
      { name: "Nantes", lat: 47.2184, lng: -1.5536 },
      { name: "Toulouse", lat: 43.6047, lng: 1.4442 },
      { name: "Lille", lat: 50.6292, lng: 3.0573 }
  ];

  schools.forEach(function(school) {
      L.marker([school.lat, school.lng], { icon: epitechIcon })
          .addTo(map)
          .bindPopup(school.name + " rocks!");
  });
};
