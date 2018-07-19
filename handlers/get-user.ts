import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { buildOkResponse } from '../lib/response-factory';
import { user } from '../resources/user';

export const handler: Handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    callback(null, buildOkResponse(user));
};
