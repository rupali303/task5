import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { sliceStore } from './redux/sliceStore'

function Main() {
  return (
    <>
      <Provider store={sliceStore}>
    <Router/>
    </Provider>
    </>
  
  )
}

export default Main