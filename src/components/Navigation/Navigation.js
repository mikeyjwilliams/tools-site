import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.toggleNavBar = this.toggleNavBar.bind(this);
		this.closeNavBar = this.closeNavBar.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggleNavBar() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	closeNavBar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		return (
			<div>
				<Navbar color="faded" light expand="md">
					<NavbarBrand tag={RRNavLink} to="/" className="mr-auto">
						Garys Tools
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav className="mr-auto" navbar>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Hand Tools
								</DropdownToggle>
								<DropdownMenu>
									<NavLink tag={RRNavLink} to="/crimps">
										<DropdownItem>Crimps/Cutters</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/files">
										<DropdownItem>Files</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/hammers">
										<DropdownItem>Hammers</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/pliers">
										<DropdownItem>Pliers</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/bars">
										<DropdownItem>Pry &amp; Pic bars</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/ratchets">
										<DropdownItem>Ratchets</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/screwdrivers">
										<DropdownItem>Screwdrivers</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/spoons">
										<DropdownItem>Spoons</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/vise_grips">
										<DropdownItem>Vise Grips</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/wrenches">
										<DropdownItem>Wrenches</DropdownItem>
									</NavLink>
								</DropdownMenu>
							</UncontrolledDropdown>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Tool Parts
								</DropdownToggle>
								<DropdownMenu right>
									<NavLink tag={RRNavLink} to="/bits">
										<DropdownItem>Bits</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/blades">
										<DropdownItem>Blades</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/cables">
										<DropdownItem>Cables</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/chisels">
										<DropdownItem>Chisels</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/wheels">
										<DropdownItem>Discs/Wheels</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/extensions">
										<DropdownItem>Extensions</DropdownItem>
									</NavLink>
									<NavLink tag={RRNavLink} to="/sockets">
										<DropdownItem>Sockets</DropdownItem>
									</NavLink>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavLink tag={RRNavLink} to="/air-tools">
								<NavItem>Air Tools</NavItem>
							</NavLink>
							<NavLink tag={RRNavLink} to="/misc">
								<NavItem>Misc Tools</NavItem>
							</NavLink>
							<NavLink tag={RRNavLink} to="/removers">
								<NavItem>Removers</NavItem>
							</NavLink>
							<NavLink tag={RRNavLink} to="/jacks">
								<NavItem>Jack</NavItem>
							</NavLink>
							<NavLink tag={RRNavLink} to="/hcc">
								<NavItem>Clamps/Hooks/Chains</NavItem>
							</NavLink>
							<NavLink tag={RRNavLink} to="/tools-inquiry">
								<NavItem>Tools Inquiry</NavItem>
							</NavLink>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
export default Navigation;
