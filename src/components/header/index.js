import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaHome } from 'react-icons/fa'
import { MdFolderShared } from 'react-icons/md'

function Header() {
  return (
    <nav>
      <Link to="/">
        <FaHome />
        Home
      </Link>

      <Link to="/contato">
        <FaEnvelope />
        Contato
      </Link>

      <Link to="/portfolio">
        <MdFolderShared />
        Portfolio
      </Link>
    </nav>
  )
}

export default Header