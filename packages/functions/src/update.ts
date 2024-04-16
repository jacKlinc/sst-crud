import { APIGatewayProxyResult, APIGatewayProxyEvent } from "aws-lambda";

import notes from "./notes";

export async function main(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const noteId = event.pathParameters?.id;
  const body = JSON.parse(event.body || "{}");

  if (!noteId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing note ID" }),
    };
  }

  const note = notes[noteId];

  if (!note) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Note not found" }),
    };
  }

  try {
    notes[noteId] = {
      ...note,
      ...body,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(notes[noteId]),
    };
  } catch (error: any) {
    console.error(error);
    return {
      statusCode: 502,
      body: error.message,
    };
  }
}