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
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import './Login.css'


export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={email:'',password:'',isLoggedIn:false,validUser:['jay@mail.com','test'],badLogin:false};
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
        this.closeBadLogedSnack = this.closeBadLogedSnack.bind(this);
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
        const userValid = this.state.validUser;
        console.log(userValid);
        console.log(this.state.email+" "+this.state.password);
        if(this.state.email==userValid[0] && this.state.password==userValid[1]){
            this.state.isLoggedIn = true;
            localStorage.setItem("isLoggedIn",true);
        }else{
            this.state.badLogin=true;
        }
        this.setState(this.state);
    }
    closeBadLogedSnack(){
        this.state.badLogin = false;
        this.setState(this.state);
    }

    render(){
        const CloseMenssage = (
            <Button color="secondary" size="small" onClick={this.closeBadLogedSnack}><CloseIcon style={{background:'white'}}></CloseIcon></Button>
        );
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
                    <Snackbar
                        anchorOrigin={{ vertical:'top', horizontal:'center' }}
                        autoHideDuration={1}
                        open={this.state.badLogin}
                        onClose={()=>this.closeBadLogedSnack}
                        >
                            <SnackbarContent 
                                style={{background:'red'}}
                                action={CloseMenssage}
                                message="Verifique los datos de login, usuario y/o contraseña incorrectos"/>
                        </Snackbar>
                </main>
            </React.Fragment>
        );
    }

}