import React, {Component} from 'react'
import MainLayout from '../components/layouts/mainLayout'
// import Link from 'next/Link'


class Home extends Component {
  render(){
    return(
      <>
        <MainLayout>
        <h1>Starting page: Hi there !</h1>
        <p>a lousy static startpage for this hackaton app</p>
        </MainLayout>
      </>
    )

  }
}

export default Home