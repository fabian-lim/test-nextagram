import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, ModalFooter } from 'reactstrap';

const SignUp = ({toggleIsLogin, primaryBtnText, primaryBtnAction, toggle}) => {
    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return <div>
    <Form>
        <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input type="username" name="username" id="username" placeholder="username"
            value={username} onChange = {(e) => {setUsername(e.target.value)}}/>
        </FormGroup>

        <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="example@email.com"
            value={email} onChange = {(e) => {setEmail(e.target.value)}}/>
        </FormGroup>

        <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="password"
            value={password} onChange = {(e) => {setPassword(e.target.value)}}/>
        </FormGroup>

        <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input type="confirmPassword" name="confirmPassword" id="confirmPassword" placeholder="confirm password"
            // value={username} onChange = {(e) => {setUsername(e.target.value)}}
            />
        </FormGroup>
      </Form>
        <p>Already a user? <a href="#" onClick={(e)=> {
            e.preventDefault()
            toggleIsLogin() 
        }}>Go to Login</a> </p>

        <ModalFooter>
          <Button color="primary" disabled={!(username && email && password)} onClick={primaryBtnAction}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </div>

}

export default SignUp