import React from 'react';

import {
    FormControl,
    TextField,
    Paper,
    Button,
    Typography

} from '@material-ui/core';
import customTheme from '../../theme/CustomTheme/CustomTheme';
import { Link } from 'react-router-dom';

interface FormProps {
    email: String,
    password: String,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleChange: Function
}
const Form: React.FC<FormProps> =  (props) => {
    const { email, password, handleSubmit } = props;
    return (
        <Paper elevation={0} style={styles.paper} square={true}>
            <Typography 
                variant="h4"
                align="center" 
                style={{
                    textTransform: "uppercase",
                    fontWeight: 100
                }}>Login</Typography>
            <form onSubmit={handleSubmit} style={{
                display: "flex", 
                flexDirection: "column", alignItems: "center"}}>
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
                        size="medium"
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
                        size="medium"
                    />
                </FormControl>
                <Button type="submit" variant="contained" color={"primary"} style={styles.button}>Login</Button>
            </form>
            <p style={{textAlign: "center", marginTop: ".6rem"}}>New to the site? <Link style={{color: "#ffa743"}} to="/register">Sign up today</Link>.</p>
        </Paper> 
    )
}

export default Form;

const styles = {
    paper: {
        width: '26rem',
        height: '22rem',
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
        width: "100%",
        height: "2.7rem",
        marginTop: "1rem",
        backgroundColor: `${customTheme.palette.primary.main}`
    },
}