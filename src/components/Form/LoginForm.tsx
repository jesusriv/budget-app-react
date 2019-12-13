import React from 'react';

import {
    FormLabel,
    FormControl,
    TextField,
    Paper,
    Button

} from '@material-ui/core';

interface FormProps {
    email: String,
    password: String,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleChange: Function
}

const Form: React.FC<FormProps> =  (props) => {
    const { email, password, handleSubmit } = props;
    return (
        <Paper style={styles.paper} square={true}>
            <form onSubmit={handleSubmit} style={{
                display: "flex", 
                flexDirection: "column", alignItems: "center"}}>
                <FormLabel>Login</FormLabel>
                <FormControl style={styles.control}>
                    <TextField 
                        value={email}
                        label="Email"
                        name="email"
                        onChange={(e) => props.handleChange("email", e)}
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
                        onChange={e => props.handleChange('password', e)}
                        placeholder="Password"
                        required={true}
                        type="string"
                        variant="outlined"
                        fullWidth={true}
                        size="small"
                    />
                </FormControl>
                <Button type="submit" variant="contained" color={"secondary"} style={styles.button}>Login</Button>
            </form>
        </Paper> 
    )
}

export default Form;

const styles = {
    paper: {
        width: '20rem',
        height: '15rem',
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
        alignSelf: "flex-end"
    },
}