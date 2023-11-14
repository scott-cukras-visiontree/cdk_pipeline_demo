import { Message } from "./message.types"

export const goodbye = (): Message => {
  return {
    message: `Goodbye from ${process.env.DEPLOYMENT_STAGE}`
  }
}