function Nav(): React.JSX.Element {
	return (
		<nav>
			<img src="bendi.webp"></img>
			<div>
				<a href="#about">About</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#contactme" className="cta">Contact Me</a>
			</div>
		</nav>
	);
}

export default Nav;