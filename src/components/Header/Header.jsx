import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
const navList = [
  { label: 'People', href: '/people/' },
  { label: 'Planets', href: '/planets/' },
  { label: 'Starships', href: '/starships/' }
]

const Header = () => (
  <header className={styles.header}>
    <Link className={styles.logo} to="/"><h1>The Star Wars</h1></Link>

    <nav className={styles.nav}>
      {navList.map(({ label, href }) => (
        <Link key={label} className={styles.link} to={href}>{label}</Link>
      ))}
    </nav>
  </header>
)

Header.propTypes = {
  // PropTypes here
  myProp: PropTypes.string
}

Header.defaultProps = {
  // defaultProps here
}

export default Header