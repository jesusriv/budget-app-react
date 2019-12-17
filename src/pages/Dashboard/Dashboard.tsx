import React from 'react';

import CategoryTable from '../../organisms/CategoryTable/CategoryTable';
import Aside from '../../organisms/Aside/Aside';
import StatusBar from '../../organisms/StatusBar/StatusBar';
import Overview from '../../organisms/Overview/Overview';

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
