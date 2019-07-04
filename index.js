// Code your solution in this file!
const logDriverNames = (drivers) => {
     drivers.forEach((driver) => {
        console.log(driver.name);
    })
}

const logDriversByHometown = (drivers, location) => {
    drivers.forEach((driver) => {
      if (driver.hometown === location) {
        console.log(driver.name);
      }
  });
}

const driversByRevenue = (drivers) => {
    let sortedDrivers = drivers.slice().sort((a,b) => {
          return (a.revenue - b.revenue);
      });
      return sortedDrivers;
}

const driversByName = (drivers) => {
      let sortedByName = drivers.slice().sort((a,b) => {
              return a.name.localeCompare(b.name);
});
      return sortedByName;
}

const totalRevenue = (drivers) => {
        return drivers.reduce((sum, driver) => {
            return sum + driver.revenue;
        }, 0);
}

const averageRevenue = (drivers) => {
        let totalRev = totalRevenue(drivers)
        return totalRev /= drivers.length
}
