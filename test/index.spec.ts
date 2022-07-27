import { handler } from '../src';

describe('hello world', () => {
  it('should say hello', async () => {
    const response = await handler({
      httpMethod: 'GET',
      path: '/hello-world',
      headers: {},
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("Hello, World! You've hit /hello-world\n");
  });
});
