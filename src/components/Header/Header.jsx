import './Header.css'

const Header = () => {
	return (
		<header>
			<div className='title'>
				<p>Random Place Generator</p>
			</div>
			<ul className='links'>
				<li className='link'><a href='https://github.com/Veter-ok'>GitHub</a></li>
				<li className='link'><a>Instagram</a></li>
				<li className='link'><a>Меню</a></li>
			</ul>
		</header>
	)
}

export default Header