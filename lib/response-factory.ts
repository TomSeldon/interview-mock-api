import { APIGatewayProxyResult } from '../node_modules/@types/aws-lambda';

const defaultHeaders = {
    'Access-Control-Allow-Origin': '*'
};

export const buildOkResponse: (body?: any) => APIGatewayProxyResult = (body = {}) => ({
    statusCode: 200,
    headers: defaultHeaders,
    body: JSON.stringify(body)
});

export const buildServerErrorResponse: (message?: string) => APIGatewayProxyResult = (
    message: string = 'Server error'
) => ({
    statusCode: 500,
    headers: defaultHeaders,
    body: JSON.stringify({ message })
});

export const buildNotFoundResponse: (message?: string) => APIGatewayProxyResult = (
    message: string = 'Not found'
) => ({
    statusCode: 404,
    headers: defaultHeaders,
    body: JSON.stringify({ message })
});
