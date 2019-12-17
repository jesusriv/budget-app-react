import React from 'react';
import { Paper } from '@material-ui/core';
import CategoryTable from '../../organisms/CategoryTable/CategoryTable';
import Aside from '../../organisms/Aside/Aside';

const Dashboard: React.FC = () => {
    // if (!localStorage.getItem('userId')) {
    //     return <Redirect to="/login" />
    // } else {
        let userId = 5;
        let budgetId = 5;
    // }
    return (
        <div style={{display: "flex"}}>
            <Aside />
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
