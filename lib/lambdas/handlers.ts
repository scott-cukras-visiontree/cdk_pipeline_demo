interface Message {
  message: string
}

export const hello = (): Message => {
  return {
    message: `Hello from ${process.env.DEPLOYMENT_STAGE}`
  }
}

export const goodbye = (): Message => {
  return {
    message: `Goodbye from ${process.env.DEPLOYMENT_STAGE}`
  }
}