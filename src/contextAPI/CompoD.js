import React from 'react'
import { SecondName } from './Main'
function CompoD() {
  return (
    <div>
        <SecondName.Consumer>
            {(sname)=>{
                <h3>This is second Name form component D {sname}</h3>
            }}
        </SecondName.Consumer>
      
    </div>
  )
}

export default CompoD
