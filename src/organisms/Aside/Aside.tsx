import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';
import AsideButton from '../../molecules/AsideButtons/AsideButtons';

interface AsideProps {
    budgetId: number
}

interface AsideState {
    budget: {
        name: "",
        user: {
            name: String,
            email: String,
            bankAccounts: {
                bankName: String,
                balance: number
            }[]
        }
    }
}

export default class Aside extends React.Component<AsideProps, AsideState> {
    constructor(props: AsideProps) {
        super(props);
        this.state = {
            budget: {
                name: '',
                user: {
                    name: '',
                    email: '',
                    bankAccounts: []
                }
            }
        }
    }

    componentDidMount = () => {
        this.getBudget();    
    }   
     
    public getBudget = async () => {
        const response = await fetch(`/api/budget/${this.props.budgetId}`, {
            method: "GET"
        });
        const budget = await response.json();
        this.setState({budget});
    }

    render() {
        const { budget } = this.state;
        return (
            <div id="aside" style={styles.container}>
                <div id="top" style={{padding: '12px'}}>
                    <p style={
                        {
                            marginBottom: '-6px', 
                            fontSize: '17px', 
                            fontWeight: "bold"
                        }}>{budget.name}</p>
                    <p style={
                        {
                            fontSize: "12px", 
                            marginBottom: 0
                        }}>{budget.user.email}</p>
                </div>
                <AsideButton />
            </div>
        );
    }
}

const styles = {
    container: {
        width: "250px", 
        height: "100vh",
        color: '#fff',
        zIndex: 1,
        backgroundColor: `${customTheme.palette.primary.main}`
    }
}