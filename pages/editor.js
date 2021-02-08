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
  holder: 'editorjs',
  placeholder: 'Let`s write an awesome story!',
  autofocus: true,
  onReady: () => {
    console.log('Editor.js is ready to work!')
  },
  data: {}
})

const testme = (data) => {
 console.log(data)
}

const handleSave = async (data)=> {
  console.log('received this data:',data)
  // editor.save().then((outputData) => {
    // console.log('Article data: ', outputData)
  // }).catch((error) => {
    // console.log('Saving failed: ', error)
  // });
  const savedData = await editor.save()
  console.log('saved this text', savedData)
}

class ReactEditor extends Component {

  render() {
    // this works only on the client
    if(window === 'undefined') return null
    return (
      <>
        <MainLayout>
          <h1>start writing content right here:</h1>
          {/* <EditorJS tools={EDITOR_JS_TOOLS} /> */}
         <EditorJS  
            holder='custom' 
            tools={EDITOR_JS_TOOLS}
            // data={staticdata} 
            onChange={() =>{console.log(`something changed`)}}
            save={() =>{ handleSave(data)}}
            logLevel={'INFO'}
            > 
            <div id='custom'  />
        </EditorJS>
        <button onClick={() =>handleSave(editor.data)} >save me!</button>
        </MainLayout>
      </>
    )
  }
}


export default ReactEditor