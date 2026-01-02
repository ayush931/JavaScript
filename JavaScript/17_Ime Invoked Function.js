// Immediately invoked function
// Known as self invoked function

(function exec () {
    console.log("named");
}) ()


(function (a) {
    console.log(a * a);
}) (9);
