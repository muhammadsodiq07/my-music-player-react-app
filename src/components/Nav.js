import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Nav({setStatus,status}) {
  return (
    <div className="nav">
      <h1>
        Music player
      </h1>
      <button onClick={() => setStatus(!status)}> 
        Music
        <FontAwesomeIcon className="fa" icon={faMusic}/>
      </button>
    </div>
  )
}

export default Nav
