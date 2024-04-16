import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/ApiStack";

export default {
  config(_input) {
    return {
      name: "sst-api-ts",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(ApiStack);
  }
} satisfies SSTConfig;
