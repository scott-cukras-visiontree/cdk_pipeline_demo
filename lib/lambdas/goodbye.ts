import { Message } from "./message.types"

export const goodbye = (): Message => {
  const message = `Goodbye from ${process.env.DEPLOYMENT_STAGE}`
  return { message }
}