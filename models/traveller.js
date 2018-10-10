const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >=1000)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((accumulator, journey) => {
    return accumulator + journey.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueList = this.journeys.map(journey => journey.transport);
  return uniqueList.filter((x, i, a) => a.indexOf(x) == i)
};
// above logic from stackoverflow
// x --> item in array
// i --> index of item
// a --> array reference, (in this case "uniquelist")




module.exports = Traveller;
