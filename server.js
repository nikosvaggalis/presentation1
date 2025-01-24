// 1. Create a standalone server file
// server.js
const next = require('next')
const { createServer } = require('http')
const { parse } = require('url')

const dev = false // Always production mode when packaged
const hostname = 'localhost'
const port = parseInt(process.env.PORT, 10) || 3000

// Initialize Next.js
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal Server Error')
    }
  }).listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})