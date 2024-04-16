import { v4 as uuid } from "uuid";
import { APIGatewayProxyResult, APIGatewayProxyEvent } from "aws-lambda";

import notes from "./notes";

export async function main(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    const body = JSON.parse(event.body || "{}");

    const id = uuid()
    const note = notes[id];
    try {
        notes[id] = {
            ...note,
            ...body,
        };
        return {
            statusCode: 200,
            body: JSON.stringify(notes[id]),
        };
    } catch (error: any) {
        console.error(error);
        return {
            statusCode: 502,
            body: error.message,
        };
    }
}