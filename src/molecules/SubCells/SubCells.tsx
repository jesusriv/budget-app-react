import React, {ChangeEvent} from 'react';

import {
    TableCell,
    FormControl,
    Button
} from '@material-ui/core';

interface SubProps {
    type: String,
    amount: number
}

type SubState = {
    amount: number,
    clicked: boolean
}

export default class SubCells extends React.Component<SubProps, SubState> {
    state: SubState;
    constructor(props: SubProps) {
        super(props);
        this.state = {
            amount: this.props.amount,
            clicked: false
        }
    }
    public clicked = () => {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }

    public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ amount: +event.currentTarget.value});
    }
    
    public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState(prevState => ({
            clicked: !prevState.clicked,
            amount: prevState.amount
        }));
    }

    render() {
        const { clicked, amount } = this.state;
        const { type } = this.props;
        if (clicked) {
            return (
                <TableCell style={{width: "10rem"}}>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl>
                            <input 
                                value={`${amount}` || ''}
                                type="number" 
                                name={type.toString()}
                                step="any"
                                style={{
                                    width: "100%", 
                                    letterSpacing: ".05rem",
                                    border: "1px solid #afafaf", 
                                    borderRadius: ".3rem",
                                    padding: "0 .5rem"
                                }}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ): void => this.handleChange(e)}
                            />
                            <Button style={{display: "none"}} type="submit">Send</Button>
                        </FormControl>
                    </form>
                </TableCell>
            )
        }
        return (
            <TableCell style={{width: "10rem"}} onClick={this.clicked}>${amount}</TableCell>
        );
    }
};