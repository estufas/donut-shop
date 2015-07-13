var DonutLocal = function(local, options) {
  this.local = local;
    if (!(options.minCust && options.maxCust && options.avgPurch)) {
      throw "You need min, max and average purch";
    }
  this.minCust = options.minCust;
  this.maxCust = options.maxCust;
  this.avgPurch = options.avgPurch;
  this.hoursOpen = 11;
};

DonutLocal.prototype.avgHourCust = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

DonutLocal.prototype.avgHourSale = function() {
  return (this.avgHourCust() * this.avgPurch);
};
DonutLocal.prototype.avgSales = function() {
  return this.avgHourSale() * this.hoursOpen;
};




var capHill = new DonutLocal('Capital Hill', {minCust:4, maxCust:37, avgPurch:2})

console.log(capHill.avgSales());
