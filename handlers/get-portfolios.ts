import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { buildNotFoundResponse, buildOkResponse } from '../lib/response-factory';
import { portfoliosPerUser } from '../resources/portfolios';

export const handler: Handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    const userId = event.pathParameters.userId;
    const portfolios = portfoliosPerUser[userId];

    if (!portfolios) {
        callback(null, buildNotFoundResponse(`No portfolios found for user ${userId}`));
    }

    callback(null, buildOkResponse(portfolios));
};
