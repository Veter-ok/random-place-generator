import './Header.css'

const Header = () => {
	return (
		<header>
			<div className='title'>
				<p>Random Place Generator</p>
			</div>
			<ul className='links'>
				<li className='link'><a href='https://github.com/Veter-ok'>GitHub</a></li>
				<li className='link'><a href='https://tiktok.com/@veter.ok77'>Tik Tok</a></li>
				<li className='link'><a href="https://instagram.com/veter.ok77">Instagram</a></li>
			</ul>
			<div className="hamburger-menu">
				<input id="menu__toggle" type="checkbox" />
				<label className="menu__btn" htmlFor="menu__toggle">
				<span></span>
				</label>
				<ul className="menu__box">
					<li><a className="menu__item" href="https://github.com/Veter-ok">GitHub</a></li>
					<li><a className="menu__item" href="https://tiktok.com/@veter.ok77">Tik Tok</a></li>
					<li><a className="menu__item" href="https://instagram.com/veter.ok77">Instagram</a></li>
				</ul>
			</div>
		</header>
	)
}

export default Header