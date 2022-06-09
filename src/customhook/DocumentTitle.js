import React, {useState} from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocumentTitle() {
    {console.log("I am in render")}

    const [count, setCount] = useState(0)
    // console.log("I am useEffect")
    useDocumentTitle(count, console.log("effect"))

  return (

    <div>
        <button onClick={() => {setCount(count + 1)}}>
            count {count}
        </button>
    </div>
  )
}

export default DocumentTitle