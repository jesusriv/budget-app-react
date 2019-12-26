import React from 'react';

import { Redirect } from 'react-router-dom';

import CategoryTable from '../../organisms/CategoryTable/CategoryTable';
import Aside from '../../organisms/Aside/Aside';
import StatusBar from '../../organisms/StatusBar/StatusBar';
import Overview from '../../molecules/Overview/Overview';

const Dashboard: React.FC = () => {
    if (!localStorage.getItem('userId')) {
        return <Redirect to="/login" />
    }
    let userId = 3;
    let budgetId = 3;
    return (
        <div style={{display: "flex"}}>
            <Aside budgetId={budgetId}/>
            <div id="main-content" style={{width: "1030px", margin: "0 250px"}}>
                <StatusBar />
                <div style={{display: 'flex', top: '95px', position: 'relative'}}>
                    <CategoryTable 
                        user={userId}
                        budget={budgetId}
                    />
                    <Overview budget={budgetId}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
