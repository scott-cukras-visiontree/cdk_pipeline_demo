import { Message } from "./message.types"

export const hello = (): Message => {
  const message = `Hello from ${process.env.DEPLOYMENT_STAGE}`
  console.log('MESSAGE: ', message)
  return { message }
}