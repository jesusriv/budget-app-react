import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';
import {
    Paper,
} from '@material-ui/core';
import CategoryTable from '../../molecules/CategoryTable/CategoryTable';


const Dashboard: React.FC = () => {
    // if (!localStorage.getItem('userId')) {
    //     return <Redirect to="/login" />
    // } else {
        let userId = 5;
        let budgetId = 5;
    // }
    return (
        <div style={{display: "flex"}}>
            <div style={{
                    width: "20vw", 
                    height: "100vh", 
                    backgroundColor: `${customTheme.palette.primary.main}`,
                    position: 'fixed'
                }}
            >

            </div>
            <Paper style={{width: "80vw", margin: "0 20vw"}}>
                <Paper style={{width: "80vw", height: "20vh"}} square={true} elevation={1}>

                </Paper>
                <CategoryTable 
                    user={userId}
                    budget={budgetId}
                />
            </Paper>
        </div>
    )
}

export default Dashboard;
