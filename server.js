const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const childProcess = require('child_process')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    if (pathname === '/detail') {
      app.render(req, res, '/detail', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/a', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
    //传入url
    if (process.platform === 'wind32') {
      cmd = 'start "%ProgramFiles% Internet Explorer iexplore.exe"'
    } else if (process.platform === 'linux') {
      // cmd = 'xdg-open'
      cmd = 'start'
    } else if (process.platform === 'darwin') {
      // cmd = 'open'
      cmd = 'start'
    }

    childProcess.exec(`${cmd} "http://localhost:3000"`);
  })
})