import { APIGatewayProxyResult, APIGatewayProxyEvent } from "aws-lambda";

import notes from "./notes";

export async function main(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const noteId = event.pathParameters?.id;

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

  return {
    statusCode: 200,
    body: JSON.stringify(note),
  };
}