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
  
  L.marker([37.3688 , -122.0363 ], {
	    icon: L.mapquest.icons.marker(),
	    draggable: false
	  }).bindPopup('Denver, CO').addTo(map);

  L.circle([37.4419 , -122.1430 ], { radius: 9000 }).addTo(map);

};
