// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  
  const drivers = ["Mike", "Ken", "Sammy", "Bob"];
  const driverObjects = [
    { name: "Mike", hometown: "kisumu" },
    { name: "Ken", hometown: "Lamu" },
    { name: "Sammy", hometown: "Nairobi" },
    { name: "Bob", hometown: "Nakuru" }
  ];
  
  
  console.log(findMatching(drivers, "Mike"));  
  console.log(fuzzyMatch(drivers, "Sa"));  
  console.log(matchName(driverObjects, "Mike"));  
  