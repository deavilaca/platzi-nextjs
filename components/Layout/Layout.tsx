import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {children}
      <footer>This is the footer</footer>
      <style jsx>
        {`
          div {
            background: salmon;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
