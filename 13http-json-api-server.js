const http = require('http')
const url = require('url')

function parseTime (time) {
  return {
    hour: time.getHours(),
    minute:time.getMinutes(),
    second:time.getSeconds()
  }
}

function unixTime (time) {
  return { unixtime : time.getTime() }
}

const server = http.createServer((req, res)=> {
const parsedUrl = url.parse(req.url, true)
const time = new Date(parsedUrl.query.iso)
const endPoint=parsedUrl.pathname
let result

  if (endPoint==='/api/parsetime')
    result = parseTime(time)
  else if (endPoint==='/api/unixtime')
    result = unixTime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))