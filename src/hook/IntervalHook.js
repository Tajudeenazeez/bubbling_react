// import React, {useState, useEffect} from 'react'

// function IntervalHook() {
//     const [count, setCount] = useState(0)
 
//     useEffect( () => {
//         function doSomething(){
//             console.log("someProp")
//         }
//         doSomething()
//         const interval = setInterval(() => setCount(count + 1), 1000)
//         return () => {
//             clearInterval(interval)
//         }
//     }, [count])
//   return (
//     <div>
//         {count}
//     </div>
//   )
// }

// export default IntervalHook