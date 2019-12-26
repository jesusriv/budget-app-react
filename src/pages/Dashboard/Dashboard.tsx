import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import CategoryTable from '../../organisms/CategoryTable/CategoryTable';
import Aside from '../../organisms/Aside/Aside';
import StatusBar from '../../organisms/StatusBar/StatusBar';
import Overview from '../../molecules/Overview/Overview';

interface DashState {
    user: {
        bankAccounts: {
            balance: number
        }[]
        budget: {
            subCategories: {
                    activity: number,
                    budgeted: number
            }[],
            totalInBudget: number
        },
    },
    totalAmount: String,
    totalActivity: String
    totalBudgeted: String
}

export default class Dashboard extends React.Component<{}, DashState> {
    state: DashState;
    constructor(props: {}) {
        super(props);
        this.state = {
            user: {
                bankAccounts:[],
                budget: {
                    subCategories: [],
                    totalInBudget: 0
                }
            },
            totalAmount: "",
            totalActivity: "",
            totalBudgeted: ""
        }
    }

    public getUser = async () => {
        const response = await fetch(`/api/budget/${localStorage.getItem('userId')}`, {
            method: "GET"
        }); 
        const user = await response.json();
        this.setState({user});
    };

    render() {
        if (!localStorage.getItem('userId')) return <Redirect to="/login" />;
        if (!this.state.user) this.getUser();
        let userId = 3;
        let budgetId = 3;
        
        return (
            <div style={{display: "flex"}}>
                <Aside budgetId={budgetId}/>
                <div id="main-content" style={{width: "1030px", margin: "0 250px"}}>
                    <StatusBar budget={this.state.user.budget} />
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
}

