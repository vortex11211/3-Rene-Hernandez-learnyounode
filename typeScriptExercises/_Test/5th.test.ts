import * as fs from 'fs';
import * as path from 'path';

jest.mock('fs');
jest.mock('path');

describe('5_ls-filter', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('debería listar archivos con la extensión especificada', (done) => {
        const mockFiles = ['archivo1.txt', 'archivo2.js', 'archivo3.txt'];
        const directory = '/mockDirectory';
        const extension = 'txt';

        (fs.readdir as unknown as jest.Mock).mockImplementation((dir: string, callback: (err: NodeJS.ErrnoException | null, files: string[]) => void) => {
            callback(null, mockFiles);
        });

        (path.extname as jest.Mock).mockImplementation((file: string) => {
            return file.slice(file.lastIndexOf('.'));
        });

        process.argv[2] = directory;
        process.argv[3] = extension;

        require('../5_ls-filter');

        setImmediate(() => {
            expect(consoleSpy).toHaveBeenCalledWith('archivo1.txt');
            expect(consoleSpy).toHaveBeenCalledWith('archivo3.txt');
            done();
        });
    });
});


