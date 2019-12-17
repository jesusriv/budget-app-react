import React from 'react';

import customTheme from '../../theme/CustomTheme/CustomTheme';

const Aside: React.FC = () => {
    return (
        <div id="aside" style={styles.container}>

        </div>
    );
}

export default Aside;

const styles = {
    container: {
        width: "250px", 
        height: "100vh", 
        backgroundColor: `${customTheme.palette.primary.main}`
    }
}