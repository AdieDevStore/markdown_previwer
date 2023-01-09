import React from 'react'
import {marked} from "marked"

function Markdownviewer(props) {
  
    const html = marked.parse(props.text)
  
    return (
      
      <div className='view-area' dangerouslySetInnerHTML={{__html: html}}>
    </div>
  )
}

export default Markdownviewer
