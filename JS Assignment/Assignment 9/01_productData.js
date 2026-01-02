// Include the http module to create an HTTP server.
const http = require('http');

const PORT = 4000

// Define a list of products.
const products = [
    { name: 'Product 1', category: 'men' },
    { name: 'Product 2', category: 'men' },
    { name: 'Product 3', category: 'men' },
    { name: 'Product 4', category: 'men' },
    { name: 'Product 5', category: 'men' },
    { name: 'Product 6', category: 'men' },
    { name: 'Product 7', category: 'men' },
    { name: 'Product 8', category: 'men' },
    { name: 'Product 9', category: 'men' },
    { name: 'Product 10', category: 'men' },
    { name: 'Product 11', category: 'women' },
    { name: 'Product 12', category: 'women' },
    { name: 'Product 13', category: 'women' },
    { name: 'Product 14', category: 'women' },
    { name: 'Product 15', category: 'women' },
    { name: 'Product 16', category: 'women' },
    { name: 'Product 17', category: 'women' },
    { name: 'Product 18', category: 'women' },
    { name: 'Product 19', category: 'women' },
    { name: 'Product 20', category: 'women' },
    { name: 'Product 21', category: 'other' },
    // ... add more products
];

// Create the server.
http.createServer(function (req, res) {
    // Set the response header.
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Send the response data.
    switch (req.url) {
        case '/':
            res.end(JSON.stringify({ message: 'We:come to Men & Women Dummy Data' }));
            break;
        case '/men':
            res.end(JSON.stringify(products.filter(product => product.category === 'men').slice(0, 10)));
            break;
        case '/women':
            res.end(JSON.stringify(products.filter(product => product.category === 'women').slice(0, 10)));
            break;
        case '/other':
            res.end(JSON.stringify({ error: 'Page not found' }));
            break;
        default:
            res.end(JSON.stringify({ error: 'Unknown request' }));
            break;
    }
}).listen(PORT, function () {
    console.log('Server running at http://localhost:3000/');
});