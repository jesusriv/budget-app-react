import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';
import AsideButton from '../../molecules/AsideButtons/AsideButtons';
import Chip from '@material-ui/core/Chip';
import {
    AddCircle
} from '@material-ui/icons';
import Account from '../../atoms/Account/Account';

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
        let amount = budget.user.bankAccounts.map(acc => acc.balance).reduce((acc: number, val: number) => acc + val, 0)
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
                <div style={{padding: '12px'}}>
                    <div style={{fontSize: '14px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between'}}>
                        <p>Budget</p>
                        <p>${Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(amount)}</p>
                    </div>
                    {
                        budget.user.bankAccounts.map((account: any, index: number) => {
                            return <Account key={index} bankName={account.bankName} balance={account.balance} />
                        })
                    }
                    <Chip 
                        id="add-account"
                        style={{backgroundColor: "rgba(222, 248, 255, .3)", color: 'white'}}
                        icon={
                            <AddCircle style={{color: "#fff", marginBottom: '2px', marginRight: '-5px'}}/>
                        }
                        label="Add account"
                       />
                </div>
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