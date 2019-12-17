import React from 'react';

import {
    TableRow,
    TableBody,
    TableCell
} from '@material-ui/core';

import SubCells from '../../molecules/SubCells/SubCells';
import customTheme from '../../theme/CustomTheme/CustomTheme';

interface BodyProps {
    category: {
        name: String,
        id: number
    },
    budget: number
}

interface BodyState {
    subs: {
        id: number,
        name: String, 
        category: {
            id: number,
            name: String
        },
        budgeted: number, 
        available: number, 
        activity: number, 
    }[],
    subElements: JSX.Element[],
    budget: Object,
    activity: number,
    available: number,
    budgeted: number
}

export default class CategoryBody extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
        this.state = {
            subs: [],
            subElements: [],
            budget: {},
            activity: 0,
            available: 0,
            budgeted: 0
        }
    }
    componentDidMount = async () => {
        this.renderSubs()
    }

    public renderSubs = async () => {
        const response = await fetch(`/api/budget/${this.props.budget}`, {
            method: "GET"
        });
        const budget = await response.json();
        this.setState({subs: budget.subCategories});

        this.setState({subElements: []});
        let subToUse = this.state.subs.filter(sub => {
            if (sub.category.id) {
                return (sub.category.id - 1) === this.props.category.id;
            }
            return (+sub.category - 1) === this.props.category.id;
        });
        const subElements = subToUse.map(sub => {
            this.setState(prevState => ({
                available: prevState.available + sub.available,
                activity: prevState.activity + sub.activity,
                budgeted: prevState.budgeted + sub.budgeted,
            }));
            return  <TableRow key={sub.id} id={`${sub.id}`}>
                        <TableCell>{sub.name}</TableCell>
                        <SubCells refresh={this.renderSubs}  subId={sub.id} type="budgeted" amount={sub.budgeted} />
                        <SubCells refresh={this.renderSubs}  subId={sub.id} type="activity" amount={sub.activity} />
                        <SubCells refresh={this.renderSubs}  subId={sub.id} type="available" amount={sub.available} />
                    </TableRow>
        });
        this.setState({subElements: subElements});
    }
    
    render() {
        
    const { category } = this.props;
    return (
        <TableBody>
            <TableRow style={{backgroundColor: `${customTheme.palette.primary.light}`}}>
                <TableCell style={{color: "black", fontWeight: "bold"}}>{category.name}</TableCell>
                <SubCells 
                    type="Budgeted"
                    amount={this.state.budgeted}
                    subId={0}
                    color={`${customTheme.palette.primary.dark}`}
                />
                <SubCells 
                    type="Activity"
                    amount={this.state.activity}
                    subId={0}
                    color={`${customTheme.palette.primary.dark}`}
                />
                <SubCells 
                    type="Available"
                    amount={this.state.available}
                    subId={0}
                    color={`${customTheme.palette.primary.dark}`}
                />
            </TableRow>
            { this.state.subElements }
        </TableBody>
    );
    }
}