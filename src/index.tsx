import { render } from 'react-dom'
import React from 'react'
import App from './infrastucture/ui/App'
import 'bulma/css/bulma.css'
import './styles.css'
// import { createMockServer } from '../__test__/mockServer'

// createMockServer()

render(<App />, document.querySelector('#root'))
