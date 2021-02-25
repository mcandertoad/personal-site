import { useState } from "react"

import type { ContactMeRequest, ContactMeResponse } from "../types/contactMe"

const status = {
  initial: "INITIAL",
  submitted: "SUBMITTED",
  responseSuccess: "SUCCESS",
  responseFailure: "FAILURE"
}

const getFormHeader = submitStatus => {
  switch (submitStatus) {
    case status.initial: return <h2>Send me a Message</h2>
    case status.submitted: return <h2>The scribe is hard at work...</h2>
    case status.responseSuccess: return <h2>Thanks for reaching out!</h2>
    case status.responseFailure:
      return (
        <>
          <h2>Oh dang! Something went wrong</h2>
          <p>This site is quite developmental. If you'd still like to reach out, you can <a href="mailto:mccall.andrew@gmail.com">email me directly</a>.</p>
        </>
      )
  }
}

export default function ContactMe({ onSubmit }) {
  let [name, setName] = useState<string | undefined>("")
  let [email, setEmail] = useState<string | undefined>("")
  let [message, setMessage] = useState<string | undefined>("")
  let [errorMessage, setErrorMessage] = useState<string | undefined>("")
  let [submitStatus, setSubmitStatus] = useState(status.initial)

  const submitForm = async (event) => {
    event.preventDefault()
    setSubmitStatus(status.submitted)

    let response: ContactMeResponse = await onSubmit(name, email, message)

    setSubmitStatus(response.error ? status.responseFailure : status.responseSuccess)
    if (response.errorMessage !== undefined) {
      setErrorMessage(response.errorMessage)
    }
  }

  return (
    <div>

      <form
        onSubmit={(event) => submitForm(event)}
      >
        {getFormHeader(submitStatus)}
        {submitStatus === status.initial && (
          <>
            <label>
              Name
                <input
                type="text"
                autoComplete="off"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              Email
                <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label>
              Message
                <textarea
                autoComplete="off"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
              />
            </label>
            <input
              type="submit"
              value="Submit"
            />
          </>
        )}
      </form>
    </div>
  )
}