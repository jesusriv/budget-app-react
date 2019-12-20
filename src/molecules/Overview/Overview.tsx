import React from 'react';
import customTheme from '../../theme/CustomTheme/CustomTheme';

import OverviewTypes from '../../atoms/OverviewTypes/OverviewTypes';

interface OverviewProps {
    budget: number
}

interface OverviewState {
    budget: {
        user: {
            bankAccounts: {
                balance: number
            }[]
        },
        subCategories: {
                activity: number,
                budgeted: number
        }[],
        totalInBudget: number
    },
    totalAmount: String,
    totalActivity: String
    totalBudgeted: String
}

export default class Overview extends React.Component<OverviewProps, OverviewState> {
    state: OverviewState;
    constructor(props: OverviewProps) {
        super(props);
        this.state = {
            budget: {
                user: {
                    bankAccounts: []
                },
                subCategories: [],
                totalInBudget: 0
            },
            totalAmount: '',
            totalActivity: '',
            totalBudgeted: '',
        }
    }

    componentDidMount = () => {
        this.getBudgetInfo();
    }

    public getBudgetInfo = async () => {
        const response = await fetch(`/api/budget/${this.props.budget}`, {
            method: "GET"
        });
        const budget = await response.json();

        this.setState({budget: budget});

        const totalBudget = this.state.budget.totalInBudget;
        const totalActivity = this.state.budget.subCategories.map(sub => 
            sub.activity).reduce((acc: number, val: number) => acc + val);
        const totalBudgeted = this.state.budget.subCategories.map(sub => 
            sub.budgeted).reduce((acc: number, val: number) => acc + val);
            
        this.setState({totalAmount: `$${Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(totalBudget)}`});
        this.setState({totalBudgeted: `$${Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(totalBudgeted)}`});
        this.setState({totalActivity: `-$${Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(totalActivity * -1)}`});
    }

    render() {
        const types = ['BUDGETED', 'ACTIVITY', 'AVAILABLE']
        return (
            <div style={styles.container} id="overview">
                {
                    types.map((e: string) => {
                        let data: String = '';
                        switch (e) {
                            case 'BUDGETED':
                                data = this.state.totalBudgeted;
                                break;
                            case 'ACTIVITY':
                                data = this.state.totalActivity;
                                break;
                            case 'AVAILABLE':
                                data = this.state.totalAmount;
                                break;
                        }
                        return <OverviewTypes 
                                    key={types.indexOf(e)}
                                    title={e}
                                    amount={data} />
                    })
                }
            </div>
        );
    }
}


const styles = {
    container: {
        width: '330px',
        height: '591px',
        overflow: 'hidden',
        padding: '1rem 0',
        backgroundColor: `${customTheme.palette.primary.light}`,
        borderLeft: '1px solid rgba(0, 0, 0, .18)',
    }
}