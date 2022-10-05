const Park = function(name, ticket_price){
    this.name = name
    this.ticket_price = ticket_price
    this.dinos = []

    Park.prototype.numberOfDinosInPark= function(){
        return this.dinos.length
    };

    Park.prototype.addDinoToPark = function(dino){
        this.dinos.push(dino)
    };
    
    Park.prototype.removeDinoFromPark = function(dino){
        const indexOfDino = this.dinos.indexOf(dino)
            this.dinos.splice(indexOfDino, 1)
    };

    Park.prototype.findBySpecies= function(species){
        result = []
        for(var dino of this.dinos){
            if(dino.species === species){
                result.push(dino)
            } 
            
        }   return result
    };

    Park.prototype.findTotalVisitsByDay = function(){
        result = 0
        for(var dino of this.dinos){
            result += dino.guestsAttractedPerDay
        }; return result
    };




    Park.prototype.findTotalVisitsByYear = function(){
        result=0
        return result = this.findTotalVisitsByDay()*365
        // result = 0
        // for(var dino of this.dinos){
        //     result += (dino.guestsAttractedPerDay * 365)
        // }; return result
    };
    Park.prototype.findTotalRevenueByYear=function(){
        result=0
        return result = this.findTotalVisitsByYear()*50
    };

    Park.prototype.findMostPopular = function(){
      maxGuests = this.dinos.reduce((max, dino) => max.guestsAttractedPerDay > dino.guestsAttractedPerDay ? max : dino)
        return [maxGuests]
    }



}
module.exports = Park;

