import React from 'react';

import CategoryBody from '../CategoryBody/CategoryBody';

import {
    Table,
    TableHead,
    TableCell,
    TableRow
} from '@material-ui/core';

interface TableProps {
    user: number,
    budget: number
}

interface TableState {
    mainCategories: String[],
    subCategories: {
        name: String, 
        budgeted: number, 
        available: number, 
        activity: number, 
        category: {
            id: number
        }
    }[],
    components: JSX.Element[],
    budget: Object
}

export default class CategoryTable extends React.Component<TableProps, TableState> {
    state: TableState;
    constructor(props: TableProps) {
        super(props);
        this.state = {
            mainCategories: ['Immediate Obligations', 'True Expenses', 'Debt Payment', 'Credit Card Payments', 'Quality of Life Goals', 'Just For Fun'],
            subCategories: [],
            budget: {},
            components: []
        }
    }

    async componentDidMount() {
        console.log("dddd");
        const response = await fetch(`/api/budget/${this.props.budget}`,{
            method: "GET"
        });
        const budget = await response.json();
        this.state.budget = budget;
        
        this.setState({subCategories: budget.subCategories})
        this.makeComponentList();
    }

    public makeComponentList = () => {
        let categories = [...this.state.mainCategories];
        let subCategories = [...this.state.subCategories];
        let componentList: JSX.Element[] = [];

        categories.map((category: String) => {
            let subsToSend = subCategories.filter(sub => {
                if (sub.category.id) {
                    return (sub.category.id - 1) === categories.indexOf(category)
                }
                return (+sub.category - 1) === categories.indexOf(category);
            });
            return componentList.push(<CategoryBody key={category.toString()} subCategories={subsToSend} category={category} />)
        })
        
        this.setState({components: [...componentList]});
    }

    render() {
        
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{width: "60%"}}>Category</TableCell>
                        <TableCell>Budgeted</TableCell>
                        <TableCell>Activity</TableCell>
                        <TableCell>Available</TableCell>
                    </TableRow>
                </TableHead>
                { this.state.components }
            </Table>
        );
    }
}