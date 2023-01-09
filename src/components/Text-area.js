import React, { useState } from 'react'
import Markdownviewer from './Markdownviewer';
import "../styles/style.css"

function Textarea() {

    const [text, setText] = useState('# This is a main heading \n## This is a secondary heading \n ');

    function updateText(event){
        event.preventDefault();
        setText(event.target.value)
        return 
    }

    function clearText() {
      setText('')
      return
    };

  return (
    <div className='main-container'>
      <div className='editor-container'>
        <div className='editor-heading'>
          Editor
          <a href="#" className='reset-button' onClick={clearText}>Reset</a>
        </div>
         <textarea className='text-field' onChange={updateText} value={text}></textarea>
      </div>
        <div className='preview-container'>
          <div className='viewer-heading'>
            Previewer
          </div>
          <Markdownviewer className='view-area' text={text}/>
        </div>
    </div>
  )
}

export default Textarea
