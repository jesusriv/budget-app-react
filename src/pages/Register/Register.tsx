import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';
import Form from '../../components/Form/RegisterForm';

type RegisterState = {
    name: String,
    email: String,
    password: String,
    confirmPassword: String
}

export default class Register extends React.Component<{}, RegisterState> {
    state: RegisterState;
    constructor(props: {}) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",   
            confirmPassword: ""
        }
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    private handleChange = (name: keyof RegisterState, event: React.FormEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        this.setState<never>({ [name]: value });
    }
    
    render() {
        return(
            <div style={styles.root}>
                <Form 
                    name={this.state.name}
                    email={this.state.email}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

const styles = {
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${customTheme.palette.primary.main}`
    },
    paper: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        width: '25rem',
        height: '25rem',
        padding: "1rem 0",
        backgroundColor: `${customTheme.palette.primary.main}`
    },
    form: {
        display: "flex",
        justifyContent: "center",
    },
    control: {
        width: "80%"
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
}