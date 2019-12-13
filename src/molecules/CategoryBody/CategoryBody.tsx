import React from 'react';

import {
    TableRow,
    TableBody,
    TableCell
} from '@material-ui/core';

import SubCells from '../../molecules/SubCells/SubCells';

interface BodyProps {
    category: String,
    subCategories: {
        name: String, 
        budgeted: number, 
        available: number, 
        activity: number, 
    }[]
    mainCategories: String[]
}

const CategoryBody: React.FC<BodyProps> = (props: BodyProps) => {

    const { category, subCategories } = props;
    
    const subs = subCategories.map(sub => {
        return  <TableRow key={sub.name.toString()}>
                    <TableCell>{sub.name}</TableCell>
                    <SubCells type="budgeted" amount={sub.budgeted} />
                    <SubCells type="activity" amount={sub.activity} />
                    <SubCells type="available" amount={sub.available} />
                </TableRow>
    })
    return (
        <TableBody>
            <TableRow>
                <TableCell style={{color: "black", fontWeight: "bold"}}>{category}</TableCell>
                <SubCells 
                    type="Budgeted"
                    amount={0.00}
                />
                <SubCells 
                    type="Activity"
                    amount={0.00}
                />
                <SubCells 
                    type="Available"
                    amount={0.00}
                />
            </TableRow>
            { subs }
        </TableBody>
    );
}

export default CategoryBody;
