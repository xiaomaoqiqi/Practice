var hotel =
{ 
  name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomService: 'true',
  pool: 'false',
  roomsAvail: function () {
      
      return this.rooms - this.roomsBooked;
  }
};

function getInfo() {
  //var totalRooms = hotel.rooms;
  //var availableRooms = hotel.roomsAvail();
 // console.log(availableRooms);
  
  document.getElementById('hotelName').innerHTML = hotel.name;
  document.getElementById('totalRooms').innerHTML = hotel.rooms;
  document.getElementById('availRooms').innerHTML = hotel.roomsAvail();
  
  
}