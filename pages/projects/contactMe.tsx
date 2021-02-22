import { useState } from "react"
import Head from 'next/head'

import Layout from "../../components/layout"
import Navigation from "../../components/navigation"
import ContactMe from "../../components/contactMe"

import styles from "../../styles/projects/contactMe.module.css"
import { ContactMeRequest, ContactMeResponse } from "../../types/contactMe"

export default function ContactProject() {
  const submitForm = async (name, email, message) => {
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
    return response
  }

  return (
    <Layout>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Navigation />
      <div>
        <ContactMe
          onSubmit={submitForm}
        />
      </div>
    </Layout>
  )
}