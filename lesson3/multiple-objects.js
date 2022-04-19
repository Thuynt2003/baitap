function Hotel(name, rooms ,booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
};

var quayHotel = new Hotel('quay',40,25);
var parkHotel = new Hotel('park',120,77);

console.log(quayHotel);

var details1 = quayHotel.name +'rooms:';
    details1 += quayHotel.checkAvailability();

var elhotel1 = document.getElementById('hotel1');
    elhotel1.textContent=details1;

var details2 = parkHotel.name +'rooms:';
    details2 += parkHotel.checkAvailability();

var elhotel2 = document.getElementById('hotel2');
    elhotel2.textContent = details2;