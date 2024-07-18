import { Socket } from 'net';
import { IncomingMessage } from 'http';
import { jest } from '@jest/globals';
import * as http from 'http';
jest.mock('http');
const mockSocket = new Socket();
const mockResponse = new IncomingMessage(mockSocket);

mockResponse.on = jest.fn((event: string, callback: (data?: any) => void) => {
  if (event === 'data') {
    callback('test data');
  }
  if (event === 'end') {
    callback();
  }
  return mockResponse;
}) as unknown as jest.MockedFunction<(event: string, callback: (data?: any) => void) => IncomingMessage>;

describe('http.get', () => {
  it('should log data received from http.get', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const mockHttpGet = jest.fn((_url: string, callback: (res: IncomingMessage) => void) => {
      callback(mockResponse);
      return {} as http.ClientRequest;
    });

    (http.get as unknown as jest.Mock).mockImplementation(
      mockHttpGet as unknown as (...args: unknown[]) => unknown
    );

    require('../7_clienteHTTP'); 
    expect(logSpy).toHaveBeenCalledWith('test data');
    logSpy.mockRestore();
  });
});


