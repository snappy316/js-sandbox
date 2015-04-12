var expect = require('chai').expect;
var Car = require('../lib/car.js');

describe('Car', function() {
  it('should construct with pertinent information', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
  });

  it('should have a year', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var year = expedition.getYear();
    expect(year).equals(2013);
  });

  it('should have a manufacturer', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var make = expedition.getMake();
    expect(make).equals('Ford');
  });

  it('should have a model', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var model = expedition.getModel();
    expect(model).equals('Expedition');
  });

  it('should have an odometer, initially 0 miles', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var odom = expedition.getOdom();
    expect(odom).equals(0);
  });

  it('should have an owner', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var owner = expedition.getOwner();
    expect(owner).equals('David');
  });

  it('should have a fuel tank, initially full', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var tank = expedition.getFuel();
    expect(tank).equals(100);
  });

  it('should have a miles-per-gallon, initially 15', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var mpg = expedition.getMPG();
    expect(mpg).equals(15);
  });
});

describe('Driving the car', function() {
  it('should have a trip function that increases odom and decreases fuel', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var odom = expedition.drive(45);
    var tank = expedition.getFuel();
    expect(odom).equals(45);
    expect(tank).to.be.within(86,87);
  });

  it('should have a fillUp function that fills up the tank', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    expedition.drive(150);
    var fillUp = expedition.fillUp();
    expect(fillUp).to.be.within(9,11);
  });
});

describe('Setting attributes of the car', function() {
  it('allows resetting the odom', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var newOdom = expedition.setOdom(20000);
    expect(newOdom).equals(20000)
  });

  it('allows resetting the MPG', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var newMPG = expedition.setMPG(12);
    expect(newMPG).equals(12);
  });

  it('allows resetting the owner', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var newOwner = expedition.setOwner('Dealership');
    expect(newOwner).equals('Dealership');
  });

  it('allows resetting the fuel tank', function() {
    var expedition = new Car(2013, 'Ford', 'Expedition', 'David');
    var newTank = expedition.setFullTank(28);
    expect(newTank).equals(28);
  });
});
