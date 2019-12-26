import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';
import AsideButton from '../../molecules/AsideButtons/AsideButtons';
import Chip from '@material-ui/core/Chip';
import {
    AddCircle
} from '@material-ui/icons';
import Account from '../../atoms/Account/Account';

interface AsideProps {
    totalInBudget: string,
    
    user: {
        name: String,
        email: String,
        budget: {name: String},
        bankAccounts: {
            bankName: String,
            balance: number
        }[]
    }
}

const Aside: React.FC<AsideProps> = (props: AsideProps) => {
    const { budget, bankAccounts } = props.user;
    const { totalInBudget, user } = props;
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
                    }}>{user.email}</p>
            </div>
            <AsideButton />
            <div style={{padding: '12px'}}>
                <div style={{fontSize: '14px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between'}}>
                    <p>Budget</p>
                    <p>${totalInBudget}</p>
                </div>
                {
                    bankAccounts.map((account: any, index: number) => {
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

export default Aside;

const styles = {
    container: {
        width: "250px", 
        height: "100vh",
        color: '#fff',
        zIndex: 1,
        backgroundColor: `${customTheme.palette.primary.main}`
    }
}