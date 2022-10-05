const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const exp = require('constants');

describe('Park', function() {
  beforeEach(function () {
    park = new Park('Jurassic_Park', 50);
    dino1 = new Dinosaur('Triceratops', 'Herbivorous', 40)
    dino2 = new Dinosaur('Velociraptor', 'Carnivore', 45)
    dino3 = new Dinosaur('Stegosaurus', 'Herbivorous', 35)
    dino4 = new Dinosaur('Stegosaurus', 'Herbivorous', 30)
  })

  it('should have a name', function(){
    const actual = park.name        
    assert.strictEqual(actual, 'Jurassic_Park') 
  });



  it('should have a ticket price', function(){
    const actual = park.ticket_price
    assert.strictEqual(actual, 50)
  });



  it('should have a collection of dinosaurs', function(){
    const actual = park.dinos;
    assert.deepStrictEqual(actual, [])
  });



  it('should be able to add a dinosaur to its collection', function(){
    park.addDinoToPark(dino1)
    const actual = park.numberOfDinosInPark()
    assert.deepStrictEqual(actual, 1)
  });



  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinoToPark(dino1)
    park.removeDinoFromPark(dino1)
    const actual = park.numberOfDinosInPark()
    assert.equal(actual, 0)
  });



  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinoToPark(dino1)
    park.addDinoToPark(dino2)
    park.addDinoToPark(dino3)
    park.addDinoToPark(dino4)
    const actual = park.findMostPopular()
    const expected = [dino2]
    assert.deepStrictEqual(actual, expected)

  });



  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinoToPark(dino1)
    park.addDinoToPark(dino2)
    park.addDinoToPark(dino3)
    park.addDinoToPark(dino4)

    const expected = [dino3, dino4]
    const actual = park.findBySpecies('Stegosaurus')
    assert.deepStrictEqual(actual, expected)
  });



  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinoToPark(dino1)
    park.addDinoToPark(dino2)
    park.addDinoToPark(dino3)
    park.addDinoToPark(dino4)

    const actual = park.findTotalVisitsByDay()
    assert.equal(actual, 150)
  });



  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinoToPark(dino1)
    park.addDinoToPark(dino2)
    park.addDinoToPark(dino3)
    park.addDinoToPark(dino4)

    const actual = park.findTotalVisitsByYear()
    assert.equal(actual, 54750 )
  });



  it('should be able to calculate total revenue for one year', function(){
    park.addDinoToPark(dino1)
    park.addDinoToPark(dino2)
    park.addDinoToPark(dino3)
    park.addDinoToPark(dino4)

    const actual = park.findTotalRevenueByYear()
    assert.equal(actual, 2737500)
  });

});
