function vehiclesQuantity(head) {
   let vehicle = { bus: 0, hice: 0, privetCar: 0 }
   let restHead = 0;

   if (typeof head !== 'number') {
      return "Please enter number!"
   }
   else if (head >= 50) {
      vehicle.bus = parseInt(head / 50);
      restHead = head % 50;
   }
   if (restHead >= 15) {
      vehicle.hice = parseInt(restHead / 15);
      restHead = restHead % 15;
   }
   vehicle.privetCar = (restHead / 5)

   return vehicle;
}


console.log(vehiclesQuantity(390));
// console.log(parseInt(8.9));