import {useEffect} from 'react'

function useDocumentTitle(count,cb) {
      useEffect(
        () => {
            document.title = `Count is ${count}`
        },[]
    )

}

export default useDocumentTitle