import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';
import Form from '../../components/Form/LoginForm';

// import {Redirect} from 'react-router-dom'
import { History } from 'history';

interface Props {
    history: History
}

type LoginState = {
    email: String,
    password: String
}

export default class Login extends React.Component<Props, LoginState> {
    state: LoginState;
    constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.isLoggedIn();
    }

    public isLoggedIn = () => {
        if (localStorage.getItem('userId')) return this.props.history.push('/dashboard');
    }

    public handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = this.state;
        const response = await fetch(`/api/login`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const user = await response.json();
        if (user) {
            localStorage.setItem('userId', user.id);
            console.log(localStorage.getItem('userId'));
            return this.props.history.push('/dashboard');
        }
        return null;
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
            </div>
        )
    }
}

const styles = {
    root: {
        backgroundColor: `${customTheme.palette.primary.main}`,
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