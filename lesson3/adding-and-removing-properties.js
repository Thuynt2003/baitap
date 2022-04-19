var hotel = {
    name: "Park",
    room: 120,
    booked : 77,
  };
  hotel.gym=true;
  hotel.pool=false;
  delete hotel.booked;

  var elName = document.getElementById('hotelName');
  elName.textContent = hotel.name;
  var elRooms = document.getElementById('pool');
  elRooms.textContent = hotel.pool;
  var elRooms = document.getElementById('gym');
  elRooms.textContent = hotel.gym;
  
