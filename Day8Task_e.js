// Day-8 Task-e     (JavaScript file)
// The corresponding html file is named as Day8Task_e.html

console.log("------------------Day-8 Task-e------------------")


// Step-1: To create an xhr (XMLHttpRequest) object
var theRequestIs = new XMLHttpRequest()

// Step-2: To open connection
// The link is taken from the Day-4 class
theReqUrl = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';

theRequestIs.open('GET',theReqUrl)
theRequestIs.send()
theRequestIs.onload = function(){
    var contrDat = JSON.parse(theRequestIs.response);
    
    allDollarContr = contrDat.filter((y)=>y.currencies[0].code==='USD');

    console.log("The countries using US dollar as currency is")
    console.log(allDollarContr)
}