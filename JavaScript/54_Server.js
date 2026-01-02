const http = require ('http')

const PORT = 3205

const HOSTNAME = 'localhost'

const server = http.createServer((req,res) => {
    res.statusCode = 200 // 2xx show success and 5xx show error.
    res.setHeader("Content-Type", "text/plain")
    res.end("Node server created by Ayush!")
})

server.listen(PORT, () => {
    console.log(`Server is running at ${HOSTNAME}:${PORT}`);
})