$("#calculate").click(function(){
    
    var material = Number($("#material").val());
    var labour = Number($("#labour").val());
    var machine = Number($("#machine").val());
    var commission = Number($("#commission").val());
    var other = Number($("#other").val());
    var margin = Number($("#margin").val());
    
    var total = material+labour+machine+commission+other;
    var percent = (total*margin);
    var final = total+percent;
    $("#total").val(final);
});


window.onload = function() {
  L.mapquest.key = 'UShjaMayAC4UkuBJ5nu5rqFuraxzEOQU';

  var map = L.mapquest.map('map', {
    center: [37.7749 , -122.4194 ],
    layers: L.mapquest.tileLayer('map'),
    zoom: 6
  });

  L.marker([37.7749 , -122.4194 ], {
    icon: L.mapquest.icons.marker(),
    draggable: false
  }).bindPopup('Denver, CO').addTo(map);
  
  L.marker([37.3688 , -122.0363 ], {
	    icon: L.mapquest.icons.marker(),
	    draggable: false
	  }).bindPopup('Denver, CO').addTo(map);

  L.circle([37.7749 , -122.4194 ], { radius: 20000 }).addTo(map);

  var denverLatLngs = [
    [36.99, -102.05],
    [37, -109.05],
    [41, -109.05],
    [41, -102.05]
  ];

  L.polygon(denverLatLngs, {color: 'red'}).addTo(map);
};
