import React, {Component} from 'react'
import MainLayout from '../components/layouts/mainLayout'
import Router from 'next/router'

class About extends Component {

  render() {
    return (
      <>
        <MainLayout>
          <h1>About Page</h1>
          <br />
          <span onClick={() => Router.push('/contact')}> click me for next-routing to contact-page</span>
        </MainLayout>
      </>
    )
  }
}

export default About