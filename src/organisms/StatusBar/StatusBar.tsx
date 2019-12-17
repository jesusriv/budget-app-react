import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';

const StatusBar: React.FC = () => {
    return (
        <div id="status-bar" style={{
            width: "1030px", 
            height: "95px",
            backgroundColor: `${customTheme.palette.primary.dark}`,
            zIndex: 10
        }} >

        </div>
    );
}

export default StatusBar;