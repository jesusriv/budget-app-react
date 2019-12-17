import React from 'react';

import CategoryBody from '../../molecules/CategoryBody/CategoryBody';

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
        id: number,
        name: String, 
        budgeted: number, 
        available: number, 
        activity: number, 
        category: {
            id: number
        }
    }[],
    components: JSX.Element[]
}

export default class CategoryTable extends React.Component<TableProps, TableState> {
    state: TableState;
    constructor(props: TableProps) {
        super(props);
        this.state = {
            mainCategories: ['Immediate Obligations', 'True Expenses', 'Debt Payment', 'Credit Card Payments', 'Quality of Life Goals', 'Just For Fun'],
            subCategories: [],
            components: []
        }
    }

    async componentDidMount() {
        this.setComponentsList();
    }

    public setComponentsList = () => {
        let categories = [...this.state.mainCategories];
        let componentList: JSX.Element[] = [];

        categories.map((category: String) => {
            let cat = {
                name: category,
                id: categories.indexOf(category)
            }
            return componentList.push(<CategoryBody key={categories.indexOf(category)} budget={this.props.budget} category={cat} />)
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