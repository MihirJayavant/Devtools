import { environment as local } from "./environment.local";
import { environment as prod } from "./environment.prod";

const env = process.env.NODE_ENV

function getEnv() {
  console.log({ env })
  if (env === 'production') {
    return prod
  } else {
    return local
  }
}

export const environment = getEnv();
