import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyFormData } from '../../types/types';

const NoFormsComponent = () => {
    const [noFormState, setNoFormState] = useState<MyFormData>(
      {
          email: "defaultEmail",
          password: "defaultPassword",
          checkbox: false
      });
  
    return (
      <div className='m-3'>
        <li><Link to="/">Go Home</Link></li>
        <div>NoFormsComponent </div>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                value={noFormState.email}
                onChange={(ev) => setNoFormState(prevState => { return { ...prevState, email: ev.target.value }})}
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
                value={noFormState.password}
                onChange={(ev) =>  
                  setNoFormState(prevState => { return { ...prevState, password: ev.target.value }})}
                placeholder="Password"
                name='fpassword'/>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Check address</Form.Label>
            <Form.Check
                type="checkbox"
                checked={noFormState.checkbox}
                //onChange={(ev) => setNoFormState(prevState => { return { ...prevState, checkbox: ev.target.checked }})} // the same below
                onChange={(ev) => {
                  setNoFormState(prevState => {
                    const temp = 
                      {
                        email: prevState.email,
                        password: prevState.password,
                        checkbox: prevState.checkbox
                      }
                      temp.checkbox =  ev.target.checked
                      return temp
                  })
                }}
                name='fcheckbox'
                label="Check me out"/>
          </Form.Group>
  
          <Button variant="primary" onClick={() => {
            console.log("handle save from fields from state.");
            console.log(noFormState);
          }}>Save</Button>
  
      </div>)
  }

export default NoFormsComponent;