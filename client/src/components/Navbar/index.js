import React, { Component } from 'react'
import NavbarContent from './NavbarContent'
import NavbarIcon from './NavbarIcon'

export default class Navbar extends Component {
	state = {
		isopen: true
	}

	toggleNavbar = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}))
	}

	render() {
		return <dev className="navbar-container">
			<NavbarContent isOpen={this.state.isopen} />
			<dev className="navbar-icon">
				<NavbarIcon
					isOpen={this.state.isopen}
					handleClick={this.toggleNavbar}
				/>
			</dev>
		</dev>
	}
}