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
          <p>This is a hacky hackaton application just to see how we can integrate a fancy text editor in a next-js app</p>
          <p>PS: it is so fancy - you have to click in the field to find the cursor and can write anything.</p>
          <span onClick={() => Router.push('/contact')}> click me for next-routing to contact-page</span>
        </MainLayout>
      </>
    )
  }
}

export default About