import * as http from 'http';
import * as url from 'url';

function parseTime (time:Date) {
    return {
      hour: time.getHours(),
      minute:time.getMinutes(),
      second:time.getSeconds()
    }
  }

  function unixTime (time:Date) {
    return { unixtime : time.getTime() }
  };

  const server = http.createServer((req, res)=> {
    const parsedUrl = url.parse(req.url ||'', true);

    
    const time = new Date(parsedUrl.query['iso'] as string)
    const endPoint=parsedUrl.pathname
    let result
    
      if (endPoint==='/api/parsetime'){
        result = parseTime(time)
      }else if (endPoint==='/api/unixtime'){
        result = unixTime(time)}
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))