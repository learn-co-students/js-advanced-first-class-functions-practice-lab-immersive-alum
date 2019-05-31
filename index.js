// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function(driver, drivers){
      console.log(driver.name);
  });
};

function logDriversByHometown(drivers, hometown){
 drivers.forEach(function(driver, drivers){
   if(hometown === driver.hometown){
     console.log(driver.name)
   }
 });
};
//ask about the slice
function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue;
  });
};

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue(drivers){
  return drivers.reduce(function(total,currentDriver){
    return currentDriver.revenue + total
  }, 0);
}

function averageRevenue(drivers){
  length = drivers.length
  total = totalRevenue(drivers)
  return total/length
}
