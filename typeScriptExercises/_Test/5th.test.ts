import * as fs from 'fs';
import * as path from 'path';
const directory = path.resolve(__dirname, '../../dirTest');
let end = 'txt';
let ext = '.' + end;
let filtered: string[] = [];

describe('5_ls-filter', () => {
    it('should filter archives', () => {
        fs.readdir(directory, (err, contenido) => {
            if (err) throw err;
            for (let i = 0; i < contenido.length; i++) {
                if (path.extname(contenido[i]) === ext) {
                    filtered.push(contenido[i]);
                }
            }
            expect(filtered).toEqual(['doc1.txt', 'doc2.txt','doc3.txt','doc4.txt','doc5.txt']);
            
        });
    });
});