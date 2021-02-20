import { useState } from "react"
import Head from 'next/head'

import Layout from "../../components/layout"
import Navigation from "../../components/navigation"
import type { ContactMeRequest, ContactMeResponse } from "../../types/contactMe"

import styles from "../../styles/projects/contactMe.module.css"
import utilStyles from "../../styles/utils.module.css"

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
          <p>This site is quite developmental. If you'd still like to reach out, you can <a className={utilStyles.bodyLink} href="mailto:mccall.andrew@gmail.com">email me directly</a>.</p>
        </>
      )
  }
}

export default function ContactMe() {
  let [name, setName] = useState<string | undefined>("")
  let [email, setEmail] = useState<string | undefined>("")
  let [message, setMessage] = useState<string | undefined>("")
  let [errorMessage, setErrorMessage] = useState<string | undefined>("")
  let [submitStatus, setSubmitStatus] = useState(status.initial)

  const submitForm = async (event) => {
    event.preventDefault()
    setSubmitStatus(status.submitted)
    let payload: ContactMeRequest = {
      name,
      email,
      message
    }
    let request = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    let response: ContactMeResponse = await fetch("/api/contactMe", request).then(resp => resp.json())

    setSubmitStatus(response.error ? status.responseFailure : status.responseSuccess)
    if (response.errorMessage !== undefined) {
      setErrorMessage(response.errorMessage)
    }
  }

  return (

    <Layout>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Navigation />
      <div
        className={styles.mainWrapper}
      >

        <form
          className={styles.formBody}
          onSubmit={(event) => submitForm(event)}
        >
          {getFormHeader(submitStatus)}
          {submitStatus === status.initial && (
            <>
              <label
                className={styles.formLabel}
              >
                Name
                <input
                  type="text"
                  autoComplete="off"
                  className={styles.formInput}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label
                className={styles.formLabel}
              >
                Email
                <input
                  type="text"
                  className={styles.formInput}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <label
                className={styles.formLabel}
              >
                Message
                <textarea
                  className={styles.formInput}
                  autoComplete="off"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={5}
                />
              </label>
              <input
                type="submit"
                className={styles.formSubmit}
                value="Submit"
              />
            </>
          )}
        </form>
      </div>
    </Layout>
  )
}