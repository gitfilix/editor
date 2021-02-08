import React, { Component } from 'react'
import MainLayout from '../components/layouts/mainLayout'
// header injection
import Head from 'next/head'

class Contact extends Component {
  render() {
    return (
      <>
        <Head>
          <title>custom contact page header title</title>
        </Head>
        <MainLayout>
          <h1 style={{ color: '#A33' }}>editor page goes here</h1>
          <p className='editor_static'>this is static information</p>
        </MainLayout>
      </>
    )
  }
}


export default Contact