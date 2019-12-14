import { createMuiTheme } from '@material-ui/core';

const primary = "#609db3";
const lightprimary = "#91d3eb";
const secondary = "#b07663";

const customTheme = createMuiTheme({
    palette: {
        primary: {main: primary, light: lightprimary},
        secondary: {main: secondary}
    },
    overrides: {
        MuiInput: {
            underline: {
                "&:before": {
                    borderBottom: `1px solid ${primary}`
                },
            }
        },
        MuiOutlinedInput: {
            inputMarginDense: {
                paddingTop: ".2rem",
                paddingBottom: ".2rem",
            },
        },
        MuiTableCell: {
            root: {
                padding: ".75rem"
            }
        },
        MuiPaper: {
            root: {
                color: "rgba(0, 0, 0, .57)"
            }
        }
    }
})
export default customTheme;
