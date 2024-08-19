(function chai () {
    // named IIFE
    console.log(`DB Connected`)
})();

((name) => {
    console.log(`DB Connected two ${name}`)
})("Ayush");

