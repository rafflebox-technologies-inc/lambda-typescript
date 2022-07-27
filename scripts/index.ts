import { handler } from '../src';

(async (): Promise<void> => {
  try {
    const response = await handler({
      httpMethod: 'GET',
      path: '/',
      headers: {},
    });

    console.log('Response from GET /invoices', response);
  } catch (error) {
    console.error(`Failed to execute QBO lambda`, error);
  }
})();
