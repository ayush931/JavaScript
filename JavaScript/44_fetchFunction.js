fetch ("http://type.fit/api/quotes")  //Download data from any url using fetch...
.then (function f (response) {
    return response.json()
})
.then (function f (value) {
    console.log(value);
})