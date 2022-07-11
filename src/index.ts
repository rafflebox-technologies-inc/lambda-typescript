interface Response {
  statusCode: number;
  headers?: Record<string, string>;
  body?: string;
}

const handler = async function (event: { path: string }): Promise<Response> {
  console.log('request:', JSON.stringify(event, undefined, 2));

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `Hello, CDK! You've hit ${event.path}\n`,
  };
};

export { handler };
