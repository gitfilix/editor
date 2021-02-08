import React from 'react'
import Header from '../includes/header'
// header injection
import Head from 'next/head'

// import EditorJS from '@editorjs/editorjs';
//<link rel='stylesheet' href="https://fonts.googleapis.com/css?family=Big+Shoulders+Display:400,700|Cormorant+Unicase:500|Major+Mono+Display&display=swap" /> 

const MainLayout = (props) => (
  <>
    <Head>
      <title>My Editor App with next.js</title>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Major+Mono+Display|family=Playfair+Display|family=Rajdhani:wght@400;500|display=swap' />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' />
      <link rel='stylesheet' href='/static/css/global.css' />
    </Head>
    <div className='mainLayout_container'>
      <Header />
      <div className='content_container'>
        {props.children}
      </div>
    </div>
  </>
)

export default MainLayout
