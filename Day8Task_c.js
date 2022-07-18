// Day-8 Task-c     (JavaScript file)
// The corresponding html file is named as Day8Task_c.html

console.log("------------------Day-8 Task-c------------------")


// Step-1: To create an xhr (XMLHttpRequest) object
var theRequestIs = new XMLHttpRequest()

// Step-2: To open connection
// The link is taken from the Day-4 class
theReqUrl = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';

theRequestIs.open('GET',theReqUrl)
theRequestIs.send()
theRequestIs.onload = function(){
    var contrDat = JSON.parse(theRequestIs.response);
    console.log('--countryName--capital--flag')
    countryDetails = contrDat.forEach(detailFun);
    function detailFun(x){
        console.log(x.name, ',' , x.capital, ',' , x.flag)
    }
}