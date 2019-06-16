import React from 'react'
import { Global } from '@emotion/core'
import globalCSS from './utils/global'

const App: React.FC = () => (
  <div>
    <div>Hello World!</div>
    <Global styles={globalCSS} />
  </div>
)

export default App
