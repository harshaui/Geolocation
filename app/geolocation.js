function getLocation(){
    var msg; 
  
    if('geolocation' in navigator){
      requestLocation();
    }else{
      msg = "Sorry, looks like your browser doesn't support geolocation";
      outputResult(msg);
      $('.pure-button').removeClass('pure-button-primary').addClass('pure-button-success');
    }
  
    function requestLocation(){
     
      var options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      };
    
      navigator.geolocation.getCurrentPosition(success, error, options); 
    
      function success(pos){
        var lng = pos.coords.longitude;
        var lat = pos.coords.latitude;
        msg = 'You appear to be at longitude: ' + lng + ' and latitude: ' + lat  + '<img src="https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=300x300&maptype=roadmap&markers=color:red%7Clabel:A%7C' + lat + ',' + lng+ '&sensor=false">';
        outputResult(msg);
        $('.pure-button').removeClass('pure-button-primary').addClass('pure-button-success'); 
      }
    
      function error(err){
        msg = 'Error: ' + err + ' :(';
        outputResult(msg);
        $('.pure-button').removeClass('pure-button-primary').addClass('pure-button-error'); 
      }  
    } 
    function outputResult(msg){
      $('.result').addClass('result').html(msg);
    }
  } 
  
  $('.pure-button').on('click', function(){
    $('.result').html('<i class="fa fa-spinner fa-spin"></i>');
    getLocation();
  });