var carRental = {
    
    businessName: 'Enterprise Car Rentals',
    economyCars: 'Economy',
    totalCars: 100,
    economyCarsAvail: 70,
    midSizeCars: 30,
    rentOut1ECar: function() {
        
        return this.economyCarsAvail - 1;
    },
    TotalAvail: function(){
        return this.totalCars - 1;
    }
    
    
};

function Display(){
    
    console.log("display name");
    var p = document.getElementById('bName').innerHTML = carRental.businessName;
    //return p;
    document.getElementById('eCars').innerHTML = carRental.economyCars;
    document.getElementById('mCars').innerHTML = carRental.midSizeCars;
    document.getElementById('mCarsAvail').innerHTML =carRental.economyCarsAvail;
    document.getElementById('tCars').innerHTML = carRental.totalCars;
    
   
}

function rentOut1Car() {
    document.getElementById('mCarsAvail').innerHTML = carRental.rentOut1ECar();
    //console.log(carRental.rentOut1ECar());
}

function totalCars() {
    
    document.getElementById('tCars').innerHTML =
    carRental.TotalAvail();
}

