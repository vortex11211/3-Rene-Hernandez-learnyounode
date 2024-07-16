import { execSync } from 'child_process';
import { join } from 'path';

describe('1_helloworld', () => {
  test('should print HELLO WORLD', () => {
    const filePath = join(__dirname,'..', '1_HelloWorld.ts');
    const output = execSync(`ts-node ${filePath}`).toString();
    expect(output.trim()).toBe('HELLO WORLD');
  });
});


