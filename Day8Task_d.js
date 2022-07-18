// Day-8 Task-d     (JavaScript file)
// The corresponding html file is named as Day8Task_d.html

console.log("------------------Day-8 Task-d------------------")


// Step-1: To create an xhr (XMLHttpRequest) object
var theRequestIs = new XMLHttpRequest()

// Step-2: To open connection
// The link is taken from the Day-4 class
theReqUrl = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';

theRequestIs.open('GET',theReqUrl)
theRequestIs.send()
theRequestIs.onload = function(){
    var contrDat = JSON.parse(theRequestIs.response);

    allContrPop = contrDat.map((y)=>y.population);
    totWorldPop = allContrPop.reduce((x1,x2)=>x1+x2)
    console.log("The total population is")
    console.log(totWorldPop)
}