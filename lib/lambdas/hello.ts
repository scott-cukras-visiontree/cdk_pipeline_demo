import { Message } from "./message.types"

export const hello = (): Message => {
  return {
    message: `Hello from ${process.env.DEPLOYMENT_STAGE}`
  }
}