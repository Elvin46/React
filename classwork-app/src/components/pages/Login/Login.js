import React from 'react';
import { Route } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import Users from '../Users/Users';
import { useHistory } from 'react-router-dom';
import InvalidCredential from '../../InvalidCredential';

const user = {
    username: "elvin",
    password: "elvin"
}
function Login() {
    const [state,setState] = React.useState(user);
    const handleChangeValue=(e)=>{
        const {name,value}=e.target;
        setState((oldValue)=>({...oldValue,[name]:value}))
    }
    const history = useHistory();
    const [isInvalid,setInvalid] = React.useState();
    const handleClick = React.useCallback(()=>{
        if (state.username === user.username && state.password === user.password) {
            console.log(state);
            setInvalid(false);
           history.push('/users');
        }
        else{
            setInvalid(true);
        }
    },[history])
    return (
    <>
    <div>
        <h2>Sign In</h2>
        <Form className="form">
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              onChange={handleChangeValue}
              type="username"
              name="username"
              id="username"
              placeholder="example@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={handleChangeValue}
              type="password"
              name="password"
              id="password"
              placeholder="********"
            />
          </FormGroup>
        <Button onClick={handleClick}>Submit</Button>
        {!isInvalid ?? <InvalidCredential/>}
      </Form>
    </div>

    </>
    )}
export default Login