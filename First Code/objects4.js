const computerDetails = {
    name: 'Mac',
    model: 2020,
    isALaptop: true,
  };


  const computerPeripherals = {
    hasMouse: true,
    isALaptop: "Yes",
    
  };
  
  const mergedObject = Object.assign(computerDetails, computerPeripherals)
  //console.log(mergedObject)

  const mergedObject2 = {...computerDetails, ...computerPeripherals} // spread operator
  console.log(mergedObject)

  