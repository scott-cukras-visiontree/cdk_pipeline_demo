import { Message } from "./message.types"

export const hello = (): Message => {
  const message = `Hello from ${process.env.DEPLOYMENT_STAGE}`
  return { message }
}