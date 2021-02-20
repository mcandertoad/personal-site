export type ContactMeRequest = {
  name: string
  email: string
  message: string
}

export type ContactMeResponse = {
  error: boolean
  errorMessage: string
}