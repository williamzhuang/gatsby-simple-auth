import React from 'react'
import { Router } from '@gatsbyjs/reach-router'

const SomePage = () => (
  'Hey, this is hidden text!'
)

const App = () => (
  <>
    Wrapper time
    <Router>
      <SomePage path="/some"/>
    </Router>
  </>
)

export default App