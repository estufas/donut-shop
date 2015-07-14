var DonutLocal = function(local, options) {
  this.local = local;
    if (!(options.minCust && options.maxCust && options.avgPurch)) {
      throw "You need min, max and average purch";
    }
  this.minCust = options.minCust;
  this.maxCust = options.maxCust;
  this.avgPurch = options.avgPurch;
  this.opens = options.opens || 700;
  this.closes = options.closes || 1800;
  this.hoursOpen = (this.closes - this.opens)/100;
};

DonutLocal.prototype.avgHourSale = function() {
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgPurch);
};

DonutLocal.prototype.render = function() {

  var main = document.getElementById('content');
  var addRow = document.createElement('tr');
  addRow.innerHTML = this.local;
  main.appendChild(addRow);

  var total = 0
    for (var i = 0; i < this.hoursOpen; i++) {
      var addDonutLocal = document.createElement('td');
      addDonutLocal.innerHTML = this.avgHourSale();
      addRow.appendChild(addDonutLocal);
      total += this.avgHourSale(i);
};
  var addTotal = document.createElement('td');
  addTotal.innerHTML = total;
  addRow.appendChild(addTotal);

  return addDonutLocal;
};


var capHill = new DonutLocal('Capital Hill', {minCust:4, maxCust:37, avgPurch:2})
capHill.render();

var southLakeU = new DonutLocal('South Lake Union', {minCust:9, maxCust:23, avgPurch:6.33})
southLakeU.render();

var downTown = new DonutLocal('DownTown', {minCust:8, maxCust:43, avgPurch:4.5})
downTown.render();

var wedgeWood = new DonutLocal('WedgeWood', {minCust:2, maxCust:28, avgPurch:1.25})
wedgeWood.render();

var ballard = new DonutLocal('Ballard', {minCust:8, maxCust:58, avgPurch:3.75})
ballard.render();
