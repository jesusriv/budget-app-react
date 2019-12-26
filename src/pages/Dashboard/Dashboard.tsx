import React from 'react';

import { Redirect } from 'react-router-dom';

import CategoryTable from '../../organisms/CategoryTable/CategoryTable';
import Aside from '../../organisms/Aside/Aside';
import StatusBar from '../../organisms/StatusBar/StatusBar';
import Overview from '../../molecules/Overview/Overview';

interface DashState {
    user: {
        name: String,
        email: String,
        bankAccounts: {
            bankName: String
            balance: number,
        }[]
        budget: {
            name: String,
            subCategories: {
                    activity: number,
                    budgeted: number
            }[],
            totalInBudget: number
        },
    },
    totalAmount: String,
    totalActivity: String
    totalBudgeted: String,
    leftToBudget: string
}

export default class Dashboard extends React.Component<{}, DashState> {
    state: DashState;
    constructor(props: {}) {
        super(props);
        this.state = {
            user: {
                name: "",
                email: "",
                bankAccounts:[],
                budget: {
                    name: "",
                    subCategories: [],
                    totalInBudget: 0
                }
            },
            totalAmount: "",
            totalActivity: "",
            totalBudgeted: "",
            leftToBudget: ''
        }
    }

    componentDidMount = async () => {
        await this.getBudgetInfo() ;
    }

    public getUser = async () => {
        const response = await fetch(`/api/user/${localStorage.getItem('userId')}`, {
            method: "GET"
        }); 
        const user = await response.json();
        this.setState({user});
    };

    public getBudgetInfo = async () => {
        await this.getUser();
        const { budget } = this.state.user;
        const totalBudget = budget.totalInBudget;
        const totalActivity = budget.subCategories.map(sub => 
            sub.activity).reduce((acc: number, val: number) => acc + val, 0);
        const totalBudgeted = budget.subCategories.map(sub => 
            sub.budgeted).reduce((acc: number, val: number) => acc + val, 0);
            
        this.setState({totalAmount: `$${Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(totalBudget)}`});
        this.setState({totalBudgeted: `$${Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(totalBudgeted)}`});
        this.setState({totalActivity: `-$${Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(totalActivity * -1)}`});
        this.setState({leftToBudget: `$${Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(totalBudgeted - totalBudget)}`});
    }

    render() {
        if (!localStorage.getItem('userId')) return <Redirect to="/login" />;
        if (!this.state.user) this.getUser();
        let userId = 3;
        let budgetId = 3;
        
        const totalInBudget = Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(this.state.user.budget.totalInBudget);
        return (
            <div style={{display: "flex"}}>
                <Aside 
                    totalInBudget={totalInBudget}
                    user={this.state.user}
                />
                <div id="main-content" style={{width: "1030px", margin: "0 250px"}}>
                    <StatusBar budget={this.state.user.budget} leftToBudget={this.state.leftToBudget}  />
                    <div style={{display: 'flex', top: '95px', position: 'relative'}}>
                        <CategoryTable 
                            user={userId}
                            budget={budgetId}
                        />
                        <Overview 
                            totalAmount={this.state.totalAmount}
                            totalActivity={this.state.totalActivity}
                            totalBudgeted={this.state.totalBudgeted}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

