import React from 'react'
import { Helmet } from 'react-helmet'

const Header: React.FC = () => (
  <Helmet>
    <title>Random me romanji!</title>
    <link
      href='https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap'
      rel='stylesheet'
    />
  </Helmet>
)

export default Header
