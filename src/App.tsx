import React from 'react'
import { Global } from '@emotion/core'
import globalCSS from './utils/global'
import Header from './components/header'

const App: React.FC = () => (
  <div>
    <Header />
    <div>Hello World!</div>
    <Global styles={globalCSS} />
  </div>
)

export default App
