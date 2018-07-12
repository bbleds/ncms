import http from 'http'

const PORT = 5000

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}).listen(PORT, 'localhost')

console.log(`Server running on port ${PORT}`)
