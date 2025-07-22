export function Header(){
    return(
        <>
            <header className="header">
                <div className="header__continer">
                    <div className="header__container__logo">
                        <img src="./logo.svg" alt="Logo" />
                    </div>
                    <nav className="header__container__nav">
                            <ul className="nav__list">
                                <li className="nav__list__item"><a href="#" className="nav__list__item-link">About</a></li>
                                <li className="nav__list__item"><a href="#" className="nav__list__item-link">Works</a></li>
                                <li className="nav__list__item"><a href="#" className="nav__list__item-link">Testimonials</a></li>
                                <li className="nav__list__item"><a href="#" className="nav__list__item-link">Contact</a></li>
                            </ul>
                            <a className="nav__button">Download CV</a>
                    </nav>
                </div>
            </header>
        </>
    )
}