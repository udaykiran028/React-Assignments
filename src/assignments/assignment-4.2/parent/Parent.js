import React from 'react'
import Child from '../child/Child'
import { useState } from 'react'

function Parent() {
 
    let [childData,setChildData] = useState(10)
   function incrementData(){
        setChildData(childData+1)
   }
   function decrementData(){
    setChildData(childData-1)
}
  return (
    <div>
      <div className="card mx-auto p-2 mt-3 bg-success">
      <h1 className='fs-3 text-center'>Parent Component</h1>
        <div className="card-body">
            <p className="lead text-white text-center">Counter:{childData} </p>
        </div>
        <Child fun1={incrementData} fun2={decrementData}/>
      </div>
    </div>
  )
}

export default Parent
