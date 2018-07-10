// Code your solution in this file!
function logDriverNames(drivers){
  for(driver of drivers){
    console.log(driver.name);
  }
}

function logDriversByHometown(drivers, location){
  drivers.filter(driver => driver.hometown === location).forEach(driver => console.log(driver.name));
}

function driversByRevenue(drivers){
  let newDrivers = [...drivers]
  return newDrivers.sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers){
  let newDrivers = [...drivers]
  return newDrivers.sort((a, b) => a.name > b.name);
};

function totalRevenue(drivers){
  let newDrivers = [...drivers]
  return newDrivers.reduce((acc, driver) => acc + driver.revenue, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
