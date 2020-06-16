import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.scss'
import cn from 'classnames'
import { Link, withRouter } from 'react-router-dom'

const navList = [
  { label: 'People', to: '/people/' },
  { label: 'Planets', to: '/planets/' },
  { label: 'Starships', to: '/starships/' }
]

const Header = ({ location: { pathname } }) => (
  <header className={styles.header}>
    <Link className={styles.logo} to="/films/"><h1>The Star Wars</h1></Link>

    <nav className={styles.nav}>
      {navList.map(({ label, to }) => (
        <Link
          key={label}
          className={cn(styles.link, { [styles.active]: pathname === to })}
          to={to}
        >
          {label}
        </Link>
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

export default withRouter(Header)