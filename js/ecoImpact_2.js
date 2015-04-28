window.onload = function calculateRoute(){
    /*Retrieving necessary information from location storage to calculate route*/
    if (window.localStorage) {
        var marketData = (localStorage.getItem("market"));
        obj = JSON.parse(marketData);
        var marketStreet = obj.street;
        var marketTown = obj.town;
        var marketPostcode = obj.postcode;
        
        console.log("Market Information Required to calculate Route:");
        console.log(marketStreet);
        console.log(marketTown);
        console.log(marketPostcode);
        
        
        console.log("");
        
        var farmData = (localStorage.getItem("lastFarmScanned"));
        farmObj = JSON.parse(farmData);  
        var farmStreet = farmObj.street;
        var farmTown = farmObj.town;
        var farmPostcode = farmObj.postcode;
        
        console.log("Farm Information Required to calculate Route:");
        console.log(farmStreet);
        console.log(farmTown);
        console.log(farmPostcode);
        
        
        
        
    }
};

