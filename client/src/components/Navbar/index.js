import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  UncontrolledButtonDropdown,
  DropdownMenu,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input
} from "reactstrap";

export default class Navigation extends React.Component {
  state = {
    isOpen: false
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      isLoggedIn: false
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
	
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">GetHealthy</NavbarBrand>
          {this.state.isLoggedIn ? (
            <React.Fragment>
              <NavbarToggler onClick={this.toggle.bind(this)} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
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
                onClick={this.handleLogOut.bind(this)}
              >
                Log Out
              </Button>
            </React.Fragment>
          ) : (
            <UncontrolledButtonDropdown>
              <DropdownToggle caret>Login</DropdownToggle>
              <DropdownMenu>
                <Form>
                  <FormGroup row>
                    <Label for="email" sm={2}>
                      Email
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email address"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={2}>
                      Password
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                      />
                    </Col>
                  </FormGroup>
                </Form>
                <Button
                  onClick={this.handleLogIn.bind(this)}
                  color="primary"
                >
                  Submit
                </Button>{" "}
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          )}
        </Navbar>
      </div>
    );
  }
}
