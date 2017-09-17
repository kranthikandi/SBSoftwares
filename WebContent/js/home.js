
$("#calculateBtn").click(function(){
    
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

$("#spanGo").click(function(){
	$("#map").show();
})

$("#estimate").click(function(){
	$("#estimateDiv").show();
	$("#scheduleDiv").hide();
	$("#calculateDiv").hide();
	$("#estimateLi").addClass("active");
	$("#scheduleLi").removeClass("active")
	$("#calculateLi").removeClass("active")
});
$("#schedule").click(function(){
	$("#estimateDiv").hide();
	$("#scheduleDiv").show();
	$("#calculateDiv").hide();
	$("#estimateLi").removeClass("active");
	$("#scheduleLi").addClass("active")
	$("#calculateLi").removeClass("active")
});
$("#calculate").click(function(){
	$("#estimateDiv").hide();
	$("#scheduleDiv").hide();
	$("#calculateDiv").show();
	$("#estimateLi").removeClass("active");
	$("#scheduleLi").removeClass("active")
	$("#calculateLi").addClass("active")
});

var today = new Date();
var todayDate = today.getMonth()+'/'+today.getDate()+'/'+today.getFullYear()+' '+' '+' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
$("#scheduleHeader").append(todayDate);
$("#calculateHeader").append(todayDate);


$("#download").click(function(e) {
    window.open('data:application/vnd.ms-excel,' + $('#empTable').html());
    e.preventDefault();
});


window.onload = function() {
  L.mapquest.key = 'UShjaMayAC4UkuBJ5nu5rqFuraxzEOQU';

  var map = L.mapquest.map('map', {
    center: [37.4419 , -122.14304 ],
    layers: L.mapquest.tileLayer('map'),
    zoom: 11
  });

  L.marker([37.7749 , -122.4194 ], {
	    icon: L.mapquest.icons.marker(),
	    draggable: false
	  }).bindPopup('Denver, CO').addTo(map);
	  
	  L.marker([37.381278, -122.137829 ], {
		    icon: L.mapquest.icons.marker(),
		    draggable: false
		  }).bindPopup('Denver, CO').addTo(map);

	  L.marker([37.267184, -122.009206 ], {
	      icon: L.mapquest.icons.marker(),
	      draggable: false
	    }).bindPopup('Denver, CO').addTo(map);

	  L.marker([37.390735, -121.989862 ], {
	      icon: L.mapquest.icons.marker(),
	      draggable: false
	    }).bindPopup('Denver, CO').addTo(map);

	  L.marker([37.374693, -121.982940 ], {
	      icon: L.mapquest.icons.marker(),
	      draggable: false
	    }).bindPopup('Denver, CO').addTo(map);

	  L.marker([37.377779, -122.062273 ], {
	      icon: L.mapquest.icons.marker(),
	      draggable: false
	    }).bindPopup('Denver, CO').addTo(map);

	  L.marker([37.405267, -121.917030 ], {
	      icon: L.mapquest.icons.marker(),
	      draggable: false
	    }).bindPopup('Denver, CO').addTo(map);

	  L.marker([37.346414, -121.961649], {
	      icon: L.mapquest.icons.marker(),
	      draggable: false
	    }).bindPopup('Denver, CO').addTo(map);

	  L.marker([37.321028, -121.908132], {
	      icon: L.mapquest.icons.marker(),
	      draggable: false
	    }).bindPopup('Denver, CO').addTo(map);

	  L.marker([37.322412, -122.068345], {
	      icon: L.mapquest.icons.marker(),
	      draggable: false
	    }).bindPopup('Denver, CO').addTo(map);
  L.circle([37.3688 , -122.0363 ], { radius: 9000 }).addTo(map);

  var scheduleMap = L.mapquest.map('scheduleMap', {
	    center: [37.4419 , -122.14304 ],
	    layers: L.mapquest.tileLayer('map'),
	    zoom: 11
	  });
  //scheduleMap.addLayer(L.mapquest.trafficLayer());
  scheduleMap.addLayer(L.mapquest.incidentsLayer());
  scheduleMap.addLayer(L.mapquest.marketsLayer());
	 
  L.mapquest.directions().route({
      start: 'Cupertino, California',
      end: 'Cupertino, California',
      waypoints: [ '2173 Benton St, Santa Clara, CA', '14000 Fruitvale Ave, Saratoga, CA']
    });
  
  L.mapquest.directions().route({
      start: 'Stanford, California',
      end: 'Stanford, California',
      waypoints: [ '725 Sylvan Ave, Mountain View, CA', '1656 McCarthy Blvd, Milpitas, CA']
    });
  
  L.mapquest.directions().route({
      start: 'Snail, Sunnyvale, CA',
      end: 'Santa Clara, California',
      waypoints: [ '830 Auzerais Ave, San Jose, CA', '1235 Wildwood Ave, Sunnyvale, CA']
    });
  
  L.mapquest.directions().route({
      start: 'North San Jose, San Jose, CA',
      end: 'Santa Clara, California',
      waypoints: [ '1235 Wildwood Ave, Sunnyvale, CA', '12800-12836 Concepcion Rd, Los Altos Hills, CA']
    });
  
  L.mapquest.directions().route({
      start: 'Milpitas, California',
      end: 'Santa Clara, California',
      waypoints: [ 'Santa Clara, California', '725 Sylvan Ave, Mountain View, CA']
    });

};
