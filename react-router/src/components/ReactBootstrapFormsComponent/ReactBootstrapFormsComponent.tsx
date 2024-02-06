import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyFormControl, MyFormData } from '../../types/types';

const ReactBootstrapFormsComponent = () => {

    const [formState, setFormState] = useState<MyFormData>(
      {
          email: "defaultEmail@google.com",
          password: "defaultPassword",
          checkbox: false
      });
  
    return (
    <div className='m-3'>
      <li><Link to="/">Go Home</Link></li>
      <div>ReactBootstrapFormsComponent </div>
  
      <Form onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
            const target = e.target as typeof e.target & MyFormControl
  
            const email = target.formBasicEmail.value; // typechecks!
            const password = target.formBasicPassword.value; // typechecks!
            const checkbox = target.formBasicCheckbox.checked; // typechecks!
  
            console.log(email);
            console.log(password);
            console.log(checkbox);
  
            //etFormState({ email, password, checkbox })
  
            // for react-forms
            // e.preventDefault();
            // console.log(e);
            // const target = e.target as typeof e.target & {
            //     femail: { value: string };
            //     fpassword: { value: string };
            //   };
            // debugger
            // const email = target.femail.value; // typechecks!
            // const password = target.fpassword.value; // typechecks!
  
            // console.log(email);
            // console.log(password);
  
        }
        }>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
            type="email"
            defaultValue={formState.email}
            placeholder="Enter email"
            name='femail'/>
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            defaultValue={formState.password}
            placeholder="Password"
            name='fpassword'/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
            type="checkbox"
            defaultChecked={formState.checkbox}
            name='fcheckbox'
            label="Check me out"/>
        </Form.Group>
  
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
    )
  }

  export default ReactBootstrapFormsComponent;