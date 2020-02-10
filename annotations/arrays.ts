const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['sierra']];

// Help with inference when extracting values

const carMake = carMakers[0]; //inference string
const myCar = carMakers.pop(); //inference string

// Preventing incompatible values
carMakers.push(100); // Argument of type '100' is not assignable to parameter of type 'string'

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible types

const importantDates: (Date | string | number)[] = [new Date(), '', 45];
