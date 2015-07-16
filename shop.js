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
  this.hourlyTotal = [];
  this.dailyTotal = 0;
};

DonutLocal.prototype.avgHourSale = function() {
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgPurch);
};

DonutLocal.prototype.calculator = function() {
    for (var i = 0; i < this.hoursOpen; i++) {
    var avs = this.avgHourSale(i);
    this.dailyTotal += avs;
    this.hourlyTotal.push(avs);
    }
    console.log(this.dailyTotal);
    console.log(this.hourlyTotal);
};

DonutLocal.prototype.render = function() {

  var main = document.getElementById('content');
  var addRow = document.createElement('tr');
  var addNames = document.createElement('th')
  addNames.innerHTML = this.local;
  addRow.appendChild(addNames);

    for (var i = 0; i < this.hourlyTotal.length; i++) {
      var addDonutLocal = document.createElement('td');
      addDonutLocal.innerHTML = this.hourlyTotal[i];
      addRow.appendChild(addDonutLocal);
}
  var addTotal = document.createElement('td');
  addTotal.innerHTML = this.dailyTotal;
  addRow.appendChild(addTotal);
  main.appendChild(addRow);

  return addDonutLocal;
};

var renderAll = function() {
  // clearTable();
  var parentTable = document.getElementById('NewShop');
  for(var i = 0; i < shops.length; i++) {
    if(shops[i]) {
      var childTable = shops[i].render();
      parentTable.appendChild(childTable);
    }
  }
};

var checkMatch = function(local) {
  for(var i = 0; i < shops.length; i++) {
    if (shops[i].local.toUpperCase() == local.toUpperCase()) {
      //console.log(i);
      console.log("true");
      return i;
    }
  }
  console.log("false");
  return -1;
};

var createNewStore = document.getElementById('theButton');
createNewStore.addEventListener("click", function(e) {
  var local = document.getElementById('local').value;
  var minCust = document.getElementById('minCust').value;
  var maxCust = document.getElementById('maxCust').value;
  var avgPurch = document.getElementById('avgPurch').value;

  var idx = checkMatch(local);
    if(idx > -1) {
      shops[idx].minCust = minCust;
      shops[idx].maxCust = maxCust;
      shops[idx].avgPurch = avgPurch;
      shops[idx].hourlyTotal.length = 0;
      shops[idx].calculator();
      console.dir(document.getElementById('content'));
  } else {
      var store = new DonutLocal(local, {minCust, maxCust, avgPurch});
  shops.push(store);
  store.calculator();
  store.render();
  }
});

var shops = [];
console.log(shops);

var capHill = new DonutLocal('Capital Hill', {minCust:4, maxCust:37, avgPurch:2})
shops.push(capHill)
capHill.calculator();
capHill.render();

var southLakeU = new DonutLocal('South Lake Union', {minCust:9, maxCust:23, avgPurch:6.33})
shops.push(southLakeU)
southLakeU.calculator();
southLakeU.render();

var downTown = new DonutLocal('DownTown', {minCust:8, maxCust:43, avgPurch:4.5})
shops.push(downTown)
downTown.calculator();
downTown.render();

var wedgeWood = new DonutLocal('WedgeWood', {minCust:2, maxCust:28, avgPurch:1.25})
shops.push(wedgeWood)
wedgeWood.calculator();
wedgeWood.render();

var ballard = new DonutLocal('Ballard', {minCust:8, maxCust:58, avgPurch:3.75})
shops.push(ballard)
ballard.calculator();
ballard.render();
