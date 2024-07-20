import * as fs from 'fs';
import * as path from 'path';
import {filtrado} from "../6_modularFunction"
const directori=path.resolve(__dirname, '../../dirTest')
let end = 'txt';
let ext = '.' + end;

/*describe('6_modular', ()=>{
it('shoudl filter archives using modular',()=>{
    const filtered = filtrado(directori,ext,(err:any,list:string[])=>{
        if (err) return console.error('Ha habido un error', err);
    list.forEach(element=>{
        console.log(element)
        expect(filtered).toEqual(['doc1.txt', 'doc2.txt','doc3.txt','doc4.txt','doc5.txt'])};
    });
}):
});*/

describe('6_modular', () => {
    it('should filter archives using modular', (done) => {
        filtrado(directori, end, (err: any, list: string[]) => {
            if (err) return console.error('Ha habido un error', err);
            list.forEach(element => {
                console.log(element);
            });
            expect(list).toEqual(['doc1.txt', 'doc2.txt', 'doc3.txt', 'doc4.txt', 'doc5.txt']);
            done();
        });
    });
});