import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import logoLight from '../imgs/logo-white-theme.webp' 
import logoDark from '../imgs/logo-dark-theme.webp'

export function Header() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.body.classList.toggle('dark-theme')
  }

  return (
    <header className="header">
      <div className="header__continer">
        <div className="header__container__logo">
          <img 
            src={isDark ? logoDark : logoLight} 
            alt="Logo" 
            className="logo"
          />
        </div>

        <nav className="header__container__nav">
          <ul className="nav__list">
            <li className="nav__list__item"><a href="#" className="nav__list__item-link">About</a></li>
            <li className="nav__list__item"><a href="#" className="nav__list__item-link">Works</a></li>
            <li className="nav__list__item"><a href="#" className="nav__list__item-link">Testimonials</a></li>
            <li className="nav__list__item"><a href="#" className="nav__list__item-link">Contact</a></li>
          </ul>

          <div className="nav__buttons">
            <button className="theme-toggle" onClick={toggleTheme}>
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
            </button>
            <a className="nav__button__download">Download CV</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
