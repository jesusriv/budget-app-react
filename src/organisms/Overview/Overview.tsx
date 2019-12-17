import React from 'react';
import customTheme from '../../theme/CustomTheme/CustomTheme';

interface OverviewProps {
    budget: number
}

const Overview: React.FC<OverviewProps> = (props: OverviewProps) => {
    return (
        <div style={styles.container} id="overview">
            
        </div>
    );
}

export default Overview;

const styles = {
    container: {
        width: '330px',
        height: '591px',
        overflow: 'hidden',
        backgroundColor: `${customTheme.palette.primary.light}`,
        borderLeft: '1px solid rgba(0, 0, 0, .18)',
    }
}