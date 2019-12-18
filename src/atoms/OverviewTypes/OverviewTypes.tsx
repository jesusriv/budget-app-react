import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';

interface TypeProps {
    title: String,
    amount: String
}

const OverviewTypes: React.FC<TypeProps> = (props: TypeProps) => {
    const { amount, title } = props;
    return(
        <div style={{width: '95%', margin: '0 auto', padding: '1rem 0', justifyContent: 'center', fontWeight: "bold", display: 'flex', alignItems: 'center', flexDirection: "column", color: `${customTheme.palette.primary.dark}`, borderBottom: `2px solid ${customTheme.palette.primary.dark}`}}>
            <p style={{fontSize: "12px", fontWeight: "bold", position: 'relative', bottom: '-15px'}}>TOTAL { title }</p>
            <p style={{fontWeight: 'bolder', fontSize: "26px"}}>{amount}</p>
        </div>
    )
}

export default OverviewTypes;