import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { buildNotFoundResponse, buildOkResponse } from '../lib/response-factory';
import { portfolioPositions } from '../resources/portfolio-positions';

export const handler: Handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    const portfolioId = event.pathParameters.portfolioId;
    const positions = portfolioPositions[portfolioId];

    if (!positions) {
        return callback(
            null,
            buildNotFoundResponse(`No portfolio positions found for portfolio: ${portfolioId}`)
        );
    }

    callback(null, buildOkResponse(positions));
};
