// Day-8 Task-a     (JavaScript file)
// Using arrow functions
// The corresponding html file is named as Day8Task_a.html

console.log("------------------Day-8 Task-a------------------")


// Step-1: To create an xhr (XMLHttpRequest) object
var theRequestIs = new XMLHttpRequest()

// Step-2: To open connection
// The link is taken from the Day-4 class
theReqUrl = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';

theRequestIs.open('GET',theReqUrl)
theRequestIs.send()
theRequestIs.onload = function(){
    var ContrDat = JSON.parse(theRequestIs.response);
    AsainCountries = ContrDat.filter((x)=>x.region==='Asia');
    console.log(AsainCountries)
}