import React from 'react';

import Button from '@material-ui/core/Button';

interface ButtonProps {
    name: string,
    icon: JSX.Element
}

const AsideButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <div >
            <Button 
                
                type="button"
                name="Budget"
                fullWidth={true}
                startIcon={props.icon}
                style={
                    {
                        color: 'white', 
                        fontSize: "18px", 
                        textTransform: 'capitalize', 
                        justifyContent: 'flex-start',
                        padding: "12px",
                        borderRadius: '0'
                    }}
                >{props.name}</Button>
        </div>
    )
}

export default AsideButton;