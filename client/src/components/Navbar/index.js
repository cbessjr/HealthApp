import React from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem, 
	ButtonDropdown, 
	Button,
	Form, 
	FormGroup,
	Label,
	Col,
  Input,
<<<<<<< Updated upstream
  NavItem,
  NavLink
} from 'reactstrap'
=======
} from "reactstrap";
import "./style.css";

export default class Navigation extends React.Component {
  state = {
    isOpen: false,
    isLoggedIn: false,
    email: "",
    password: ""
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogIn() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogOut() {
    this.setState({
      isLoggedIn: false
    });
  }
>>>>>>> Stashed changes

export default class Example extends React.Component {
	constructor(props) {
		super(props);

<<<<<<< Updated upstream
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">GetHealthy</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/Dashboard/">Dashboard</NavLink>
              </NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Medications
				  </DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Schedule
					</DropdownItem>
									<DropdownItem>
										Medication Lookup
					</DropdownItem>
									<DropdownItem>
										Find A Pharmacy
					</DropdownItem>
									<DropdownItem>
										Report
					</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Exercise
				  </DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										New Exercise
					</DropdownItem>
									<DropdownItem>
										Exercise Lookup
					</DropdownItem>
									<DropdownItem>
										Report
					</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Meals
				  </DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Add A Meal
					</DropdownItem>
									<DropdownItem>
										Food Lookup
					</DropdownItem>
									<DropdownItem>
										Water Consuption
					</DropdownItem>
									<DropdownItem>
										Report
					</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Reports
				  </DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Medications
					</DropdownItem>
									<DropdownItem>
										Exercise
					</DropdownItem>
									<DropdownItem>
										Meals
					</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
					<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						<DropdownToggle caret>
							Login
        </DropdownToggle>
						<DropdownMenu>
							<Form>
								<FormGroup row>
									<Label for="exampleEmail" sm={2}>Email</Label>
									<Col sm={10}>
										<Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="examplePassword" sm={2}>Password</Label>
									<Col sm={10}>
										<Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
									</Col>
								</FormGroup>
							</Form>
							<Button color="primary">Submit</Button>{' '}
						</DropdownMenu>
					</ButtonDropdown>
				</Navbar>
			</div>
		);
	}
} 
=======
  render() {
    console.log(this.state);
    return (
      <div className="navigation">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">GetHealthy</NavbarBrand>
          {this.state.isLoggedIn ? (
            <React.Fragment>
              <NavbarToggler onClick={this.toggle.bind(this)} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink href="/Dashboard/">Dashboard</NavLink>
              </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Medications
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Schedule</DropdownItem>
                      <DropdownItem>Medication Lookup</DropdownItem>
                      <DropdownItem>Find A Pharmacy</DropdownItem>
                      <DropdownItem>Report</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Exercise
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>New Exercise</DropdownItem>
                      <DropdownItem>Exercise Lookup</DropdownItem>
                      <DropdownItem>Report</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Meals
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Add A Meal</DropdownItem>
                      <DropdownItem>Food Lookup</DropdownItem>
                      <DropdownItem>Water Consuption</DropdownItem>
                      <DropdownItem>Report</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Reports
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Medications</DropdownItem>
                      <DropdownItem>Exercise</DropdownItem>
                      <DropdownItem>Meals</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
              <Button
                color="danger"
                id="logBtn"
                onClick={this.handleLogOut.bind(this)}
              >
                Log Out
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Nav className="mr-auto" navbar />
              <UncontrolledButtonDropdown>
                <DropdownToggle color="primary" id="logBtn" caret>
                  Log In
                </DropdownToggle>
                <DropdownMenu>
                  <Col md="auto" sm="auto">
                    <Form>
                      <FormGroup row>
                        <Label for="email" md="auto">
                          Email
                        </Label>
                        <Col sm="auto">
                          <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            id="email"
                            placeholder="email address"
                            onChange={this.handleInputChange}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="password" md="auto">
                          Password
                        </Label>
                        <Col sm="auto">
                          <Input
                            value={this.state.password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            onChange={this.handleInputChange}
                          />
                        </Col>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Button onClick={this.handleLogIn.bind(this)} color="primary">
                    Submit
                  </Button>{" "}
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </React.Fragment>
          )}
        </Navbar>
      </div>
    );
  }
}
>>>>>>> Stashed changes
