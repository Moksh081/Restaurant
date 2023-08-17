//rafce (react arrow fn component with export)
//react is all about the component only , always need to return jsx
//fat arrow fn : const App = () => { return ();}
//in jsx it must return single box : <></> is shortcut of <React.Fragment> we can also use div , section.
import React from 'react'
import Restaurant from './component/Basics/Restaurant'
const App = () => {
  return (
    <>
      <Restaurant/>
    </>
  )
}

export default App
