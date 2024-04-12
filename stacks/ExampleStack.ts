import { Api, StackContext } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // create the http api
  const httpApi = new Api(stack, "api", {
    routes: {
      "get /notes": "packages/functions/src/list.main",
    },
  });

  // show the api endpoint in the output
  stack.addOutputs({
    apiendpoint: httpApi.url,
  });
}
