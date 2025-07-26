function launchBrowser(browserName){
    if(browserName =="chrome")
        {
        console.log(browserName);
    }else if (browserName == "bing"){
         console.log(browserName);
    } else{
        console.log("other Browser");
    }
}

function runTests(testTypes){
    switch(testTypes){
        case(testTypes == "smoke"):
        console.log("testType is :"+testTypes);
        break;
        case(testTypes == "sanity"):
        console.log("testType is :"+testTypes);
        break;
        case(testTypes == "regression"):
        console.log("testType is :"+testTypes);
        break;
        default:
        console.log("testType is : smoke");
        break;
    }
}

var userBrowserName = "Internet explorer"
launchBrowser(userBrowserName);
var userRunTest = "smoke"
runTests(userRunTest);