import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';
import Form from '../../components/Form/LoginForm';

import { Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

type LoginState = {
    email: String,
    password: String,
}

export default class Login extends React.Component<{}, LoginState> {
    state: LoginState;
    constructor(props: {}) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('clicked');
    }
    
    public handleChange = (name: keyof LoginState, event: React.FormEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        this.setState<never>({ [name]: value });
    }
    
    render() {
        return(
            <div style={styles.root}>
                <Form 
                    email={this.state.email}
                    password={this.state.password}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                <Paper style={styles.paper} square={true}>
                    <Typography 
                        variant="h5" 
                        style={{color: "white",}} 
                        align="center"
                        >Don't have an account? <br /> 
                        <Link style={styles.link} to="/register">Register here.</Link></Typography>
                </Paper>
            </div>
        )
    }
}

const styles = {
    root: {
        backgroundColor: `${customTheme.palette.primary.light}`,
        height: '100vh',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    paper: {
        width: '20rem',
        height: '15rem',
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${customTheme.palette.primary.main}`
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
}