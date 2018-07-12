import http from 'http'

const PORT = 5000

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Server init!\n')
}).listen(PORT, '0.0.0.0')

console.log(`Server running on port ${PORT}`)
