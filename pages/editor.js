import React, { Component } from 'react'
import MainLayout from '../components/layouts/mainLayout'
import Head from 'next/head'
import dynamic from 'next/dynamic'
// Editor REACT js 
// import EditorJS = dynamic(import('react-editor-js'),{ssr:false})
import EditorJS from 'react-editor-js';
import CheckList from '@editorjs/checklist';

import { EDITOR_JS_TOOLS } from './editorTools'
import staticdata from '../static/staticdata.json'
// import List from '@editorjs/list'; 


const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: 'editorjs'
   
})


class ReactEditor extends Component {
  
  render() {
    // this works only on the client
    if(window === 'undefined') return null
    return (
      <>
        <MainLayout>
          <h1>start writing content right here:</h1>
          <EditorJS 
            holder='custom'
            tools={EDITOR_JS_TOOLS}
            data={staticdata}>
            <div id='custom'  />
          </EditorJS>
        </MainLayout>
      </>
    )
  }
}


export default ReactEditor