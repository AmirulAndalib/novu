import { FiretextSmsProvider } from './firetext.provider';
import fetchMock from 'fetch-mock';

describe('FiretextSmsProvider', () => {
  const date = new Date();

  const provider = new FiretextSmsProvider({
    apiKey: 'apiKey',
    from: 'testFrom',
  });

  beforeAll(() => {
    jest.useFakeTimers('modern').setSystemTime(date);
  });

  afterAll(() => {
    jest.clearAllTimers();
  });

  afterEach(() => {
    fetchMock.reset();
  });

  test('should trigger firetext library correctly', async () => {
    fetchMock.mock('*', {
      headers: {
        'X-Message': 'ID',
        'Content-Type': 'text/plain',
      },
      body: '0:12 SMS successfully queued',
    });

    const result = await provider.sendMessage({
      content: 'content',
      to: '+44123456789',
    });

    expect(result).toMatchObject({ id: 'ID', date: date.toISOString() });
  });

  test('should call fetch correctly', async () => {
    fetchMock.mock('*', {
      headers: {
        'X-Message': 'ID',
        'Content-Type': 'text/plain',
      },
      body: '0:12 SMS successfully queued',
    });

    const result = await provider.sendMessage({
      content: 'content',
      to: '+44123456789',
    });

    expect(fetchMock.lastUrl()).toBe(
      'https://www.firetext.co.uk/api/sendsms?apiKey=apiKey&to=%2B44123456789&from=testFrom&message=content'
    );
  });

  test('should throw error', async () => {
    fetchMock.mock('*', {
      headers: {
        'X-Message': 'ID',
        'Content-Type': 'text/plain',
      },
      body: '1:0 Authentication error',
    });

    const result = provider.sendMessage({
      content: 'content',
      to: '+44123456789',
    });

    await expect(result).rejects.toThrowError('1: Authentication error');
  });
});
