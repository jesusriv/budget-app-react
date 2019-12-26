import React from 'react';
import customTheme from '../../theme/CustomTheme/CustomTheme';

import OverviewTypes from '../../atoms/OverviewTypes/OverviewTypes';

interface OverviewProps {
    totalAmount: String,
    totalActivity: String
    totalBudgeted: String
}

const Overview: React.FC<OverviewProps> = (props: OverviewProps) => {

    const types = ['BUDGETED', 'ACTIVITY', 'AVAILABLE'];
    const { totalActivity, totalBudgeted, totalAmount} = props;
    return (
        <div style={styles.container} id="overview">
            {
                types.map((e: string) => {
                    let data: String = '';
                    switch (e) {
                        case 'BUDGETED':
                            data = totalBudgeted;
                            break;
                        case 'ACTIVITY':
                            data = totalActivity;
                            break;
                        case 'AVAILABLE':
                            data = totalAmount;
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

export default Overview;

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