import React from 'react';

import {
    FormLabel,
    FormControl,
    TextField,
    Paper,
    Button

} from '@material-ui/core';

interface FormProps {
    name: String,
    email: String,
    password: String,
    confirmPassword?: String,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleChange: Function
}

const Form: React.FC<FormProps> =  (props: FormProps) => {
    const { name, email, password, confirmPassword, handleSubmit } = props;
    return (
        <Paper style={styles.paper} square={true}>
            <form onSubmit={handleSubmit} style={{
                display: "flex", 
                flexDirection: "column", alignItems: "center"}}>
                <FormLabel>Register</FormLabel>
                <FormControl style={styles.control}>
                    <TextField 
                        value={name}
                        label="Full name"
                        name="name"
                        onChange={e => props.handleChange}
                        placeholder="Full name"
                        required={true}
                        type="string"
                        variant="outlined"
                        fullWidth={true}
                        size="small"
                    />
                </FormControl>
                <FormControl style={styles.control}>
                    <TextField 
                        value={email}
                        label="Email"
                        name="email"
                        onChange={e => props.handleChange}
                        placeholder="Email"
                        required={true}
                        type="string"
                        variant="outlined"
                        fullWidth={true}
                        size="small"
                    />
                </FormControl>
                <FormControl style={styles.control}>
                    <TextField 
                        value={password}
                        label="Password"
                        name="password"
                        onChange={e => props.handleChange}
                        placeholder="Password"
                        required={true}
                        type="string"
                        variant="outlined"
                        fullWidth={true}
                        size="small"
                    />
                </FormControl>
                <FormControl style={styles.control}>
                    <TextField 
                        value={confirmPassword}
                        label="Confirm Password"
                        name="confirmPassword"
                        onChange={e => props.handleChange}
                        placeholder="Confirm Password"
                        required={true}
                        type="string"
                        variant="outlined"
                        fullWidth={true}
                        size="small"
                    />
                </FormControl>
                <Button variant="contained" color={"secondary"} style={styles.button}>Register</Button>
            </form>
        </Paper> 
    )
}

export default Form;

const styles = {
    paper: {
        width: '30rem',
        height: '25rem',
        padding: "2rem 2rem"
    },
    form: {
        display: "flex",
        justifyContent: "center",
    },
    control: {
        width: "100%",
        margin: ".8rem 0"
    },
    button: {
        margin: ".8rem 0",
        alignSelf: "flex-end"
    },
}