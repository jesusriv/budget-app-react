import React from 'react';

import AsideButton from '../../atoms/AsideButton/AsideButton';

import {
    Email as EmailIcon,
    Assessment,
    AccountBalance
} from '@material-ui/icons';

const AsideButtons: React.FC = () => {

    const buttons = [
        {
            name: 'Budget',
            icon: <EmailIcon style={{color: '#fff',position: "relative",top: '-2px'}} />,
        }, 
        {
            name: 'Reports',
            icon: <Assessment style={{color: '#fff',position: "relative",top: '-2px'}} />,
        }, 
        {
            name: 'All Accounts',
            icon: <AccountBalance style={{color: '#fff',position: "relative",top: '-2px'}} />,
        }]
    return (
        <div style={{borderBottom: `1px solid rgba(56, 80, 94, .4)`}}>
                {
                    buttons.map((item: {name: string, icon: JSX.Element}, index: number) => {
                        return (
                            <AsideButton 
                                key={index}
                                icon={item.icon}
                                name={item.name}
                                />
                        )
                    })
                }
            </div>
    )
}

export default AsideButtons;