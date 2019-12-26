import React from 'react';

interface AccountProps {
    bankName: String,
    balance: number
}

const Account: React.FC<AccountProps> = (props: AccountProps) => {
    return (
        <div style={{fontSize: '14px', display: 'flex', justifyContent: 'space-between'}}>
            <p>{props.bankName}</p>
            <p>${Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(props.balance)}</p>
        </div>
    )
}

export default Account;