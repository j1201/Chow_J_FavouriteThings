function getData(targetUrl, callback) {
    console.log("fired from the data miner module");

    //fetch is a JS API that run AJax requests
    // and gets data from a resource
    fetch(targetUrl) // pass in the path to the data source
        .then(res => res.json()) //convert .JSON to plain JS object
        // the res is the data that we are retrieving from the resource
        .then(data => { // data is the converted JSON onject -> not its just data JS object
            console.log(data);

            // run the callback when we get all of our data back and ready to go
            // this gets passed in by reference when we invoke the dataMiner in main.js
            callback(data);
        })
    .catch(error => console.error(error));
    //catch any errors that might happen and report them to the dev
}

export {getData}