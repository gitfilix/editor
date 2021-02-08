import React, { Component } from 'react'
import MainLayout from '../components/layouts/mainLayout'
import Head from 'next/head'
import dynamic from 'next/dynamic'
// Editor REACT js 
// import EditorJS = dynamic(import('react-editor-js'),{ssr:false})
import EditorJS from 'react-editor-js';
import CheckList from '@editorjs/checklist';

import { EDITOR_JS_TOOLS } from './editorTools'

// import Header from '@editorjs/header';
// import List from '@editorjs/list'; 


const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: 'editorjs',
   
})


class ReactEditor extends Component {
  
  render() {
    // this works only on the client
    if(window === 'undefined') return null
    return (
      <>
        <MainLayout>
          <h2>start write something here:</h2>
          <EditorJS holder="custom">
            <div id="custom" />
          </EditorJS>
        </MainLayout>
      </>
    )
  }
}


export default ReactEditor