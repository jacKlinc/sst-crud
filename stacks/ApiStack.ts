import { StackContext, Api } from "sst/constructs"

export function ApiStack({ stack }: StackContext) {
  const api = new Api(stack, "Api", {
    routes: {
      "GET /items/{id}": "src/read.main",
      "POST /items": "src/create.main",
      "PUT /items/{id}": "src/update.main",
      "DELETE /items/{id}": "src/delete.main",
    }
  });

  return {
    apiEndpoint: api.url,
  };
}