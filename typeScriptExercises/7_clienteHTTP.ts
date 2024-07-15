
import * as http from 'http'

http.get(process.argv[2], (response) => {
    response.on('data', (data: string) => {
        console.log(data.toString());
    })
})