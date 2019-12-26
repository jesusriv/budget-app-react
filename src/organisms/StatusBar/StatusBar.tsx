import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';
import { Chip } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

interface StatusProps {
    budget: Object
}

const StatusBar: React.FC<StatusProps> = (props: StatusProps) => {

    const logout = async () => {
        await fetch('/api/logout', {
            method: "POST",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div id="status-bar" style={{
            width: "1030px", 
            height: "95px",
            backgroundColor: `${customTheme.palette.primary.dark}`,
            zIndex: 10,
            padding: "0 10px",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            position: "fixed",
            margin: 0
        }} >
            <div style={{
                gridColumn: "1 / 4", 
                border: "1px solid red" ,
                width: "auto", 
                height: "100%"}}>

            </div>

            <div style={{
                border: "1px solid red" ,
                width: "auto", 
                gridColumn: "4 / 11",
                height: "100%",
                display: "grid",
                justifyContent: "center",
            }}>
                    <div style={{
                        width: "118px", 
                        height: "85%", 
                        backgroundColor: "#16a336", 
                        color: "white",
                        borderRadius: "10px",
                        display: 'grid',
                        alignSelf: "center",
                        gridTemplateRows: "auto 15px auto"
                    }}>
                        <div style={{
                            width: 0,
                            height: 0,
                            borderTop: "15px solid transparent",
                            borderBottom: "15px solid transparent",
                            position: "absolute",
                            top: "50%",
                            left: "60.3%",
                            transform: 'translate(-50%,-50%)',
                            borderLeft: "15px solid #16a336"
                        }}>

                        </div>
                        <p style={{gridRow: "3 / 4", fontSize: "28px", fontWeight: 200, margin: 0, textAlign: "center"}}>$0.00</p>
                        <p style={{gridRow: "4 / 5", margin: "0 0 10px 0", fontSize: "14px", fontStyle: "italic", textAlign: "center", color: `#333`}}>To Be Budgeted</p>
                    </div>
                
            </div>
            <Chip 
                onClick={logout}
                id="add-account"
                style={{
                    backgroundColor: "rgba(222, 248, 255, .3)", 
                    color: 'white',
                    gridColumn: "12 / 13",
                    alignSelf: 'center'
                }}
                icon={
                    <ExitToApp style={{color: "#fff", marginBottom: '2px', marginRight: '-5px', paddingLeft: "2px"}}/>
                }
                label="Logout"
                />
        </div>
    );
}

export default StatusBar;