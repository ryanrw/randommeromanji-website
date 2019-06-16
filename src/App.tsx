import React from 'react'
import { Global } from '@emotion/core'
import globalCSS from './utils/global'
import Header from './components/header'
import Main from './components/main'

const App: React.FC = () => (
  <div>
    <Header />
    <Main />
    <Global styles={globalCSS} />
  </div>
)

export default App
