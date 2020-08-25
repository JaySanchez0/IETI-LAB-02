import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import TodoApp from './TodoApp';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={email:'',paasword:''};
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
    }

    setEmail(email){
        this.state.email = email;
        this.setState(this.state);
    }

    setPassword(password){
        this.state.password = password;
        this.setState(this.state);
    }

    login(){
        localStorage.setItem("isLoggedIn",true);
        this.setState(this.state);
    }

    render(){
        if(localStorage.getItem("isLoggedIn")!=null){
            return <TodoApp></TodoApp>
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" onChange={(e)=> this.setEmail(e.target.value)} autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input onChange={(e)=>this.setPassword(e.target.value)}
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button onClick={()=>this.login()}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}