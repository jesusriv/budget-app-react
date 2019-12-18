import React from 'react';

import {
    TableCell,
    FormControl,
    Button
} from '@material-ui/core';

interface SubProps {
    type: String,
    amount: number,
    subId: number,
    refresh?: Function,
    color?: string
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
        if (this.props.type === 'budgeted') {
            this.setState(prevState => ({
                clicked: !prevState.clicked
            }));
        }
    }

    public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ amount: +event.currentTarget.value});
    }
    
    public handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) => {
        const { amount } = this.state;
        event.preventDefault();
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));

        await fetch(`/api/subcategory/update/budgeted/${this.props.subId}`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount})
        });
        if (this.props.refresh) {
            this.props.refresh();
        }
    }   

    render() {
        let color = '#44444';
        if (this.props.color) {
            color = this.props.color;
        }
        const { clicked, amount } = this.state;
        const { type } = this.props;
        if (clicked) {
            return (
                <TableCell>
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
            <TableCell style={{width: "10rem", color: `${color}`}} onClick={this.clicked}>${this.props.amount}</TableCell>
        );
    }
};