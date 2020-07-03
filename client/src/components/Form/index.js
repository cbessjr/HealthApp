import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateAccount = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input type="text" name="firstName" id="firstName" placeholder="Please enter your first name" />
      </FormGroup>
      <FormGroup>
        <Label for="middleInitial">Password</Label>
        <Input type="text" name="middleInitial" id="middleInitial" placeholder="Middle Initial" />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default CreateAccount;
