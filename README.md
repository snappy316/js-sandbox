# Car

This is a very simple project that models a car in CoffeeScript, and tests with Mocha and Chai.

## Properties

Each car has a `year`, `make` (manufacturer), `model`, and `owner`. These are set by passing in the attributes when initializing the object. Additionally, when initializing the object, several properties are initialized: `odom` is set to 0, `mpg` is set to 15, and `tank` is set to 22 (representing 22 gallons).

There are several helpful getter/setter methods supplied:
- `getYear` - returns the year of the vehicle
- `getMake` - returns the make of the vehicle
- `getModel` - returns the model of the vehicle
- `getOwner` - returns the owner of the vehicle
- `setOwner` - allows users to change the owner of the vehicle
- `getOdom` - returns the odometer
- `setOdom` - even though this is highly illegal in the real-word, this allows "used" cars to be initialized
- `getMPG` - returns the MPG used to calculate the fuel usage
- `setMPG` - allows users to change the MPG of the vehicle
- `getFuel` - returns the remaining fuel in the car, in percentage (0 - 100)
- `setFullTank` - allows users to change the tank capacity in gallons

There are also basic functionalities built in:
- `drive(miles)` - adds `miles` to the odometer and returns the odom, and also calculates the fuel used and subtracts it from the tank
- `fillUp` - resets the tank to full, and returns the gallons it took to fill the tank to full
