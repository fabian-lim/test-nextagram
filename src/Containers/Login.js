import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, ModalFooter } from 'reactstrap';

const Login = ({toggleIsLogin, primaryBtnAction, toggle}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return <div>
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input type="username" name="username" id="username" placeholder="username"
                value={username} onChange ={(e) => {setUsername(e.target.value)}}/>

            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password"
                value={password} onChange ={(e) => {setPassword(e.target.value)}}/>

            </FormGroup>
        </Form>

        <p>New user? <a href="#" onClick={(e)=> {
            e.preventDefault()
            toggleIsLogin() 
        }}>Sign up here</a> </p>

        <ModalFooter>
          <Button color="primary" disabled={!(username && password)} onClick={primaryBtnAction}>Login</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>

    </div>

}

export default Login