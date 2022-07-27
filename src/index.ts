interface Response {
  statusCode: number;
  headers?: Record<string, string>;
  body?: string;
}
export interface LambdaEvent {
  headers: Record<string, string>;
  path: string;
  httpMethod: 'GET';
}

const handler = async function (event: LambdaEvent): Promise<Response> {
  console.log('request:', JSON.stringify(event, undefined, 2));

  return {
    statusCode: 200,
    headers: { 'Content-type': 'application/json' },
    body: `Hello, World! You've hit ${event.path}\n`,
  };
};

export { handler };
