import { createMuiTheme } from '@material-ui/core';

const primary = "#609db3";
const lightprimary = "#def8ff";
const secondary = "#b07663";
const dark = "#4a7b85";

const customTheme = createMuiTheme({
    palette: {
        primary: {main: primary, light: lightprimary, dark: dark},
        secondary: {main: secondary},
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
        MuiPaper: {
            root: {
                color: "rgba(0, 0, 0, .57)"
            }
        },
        MuiTableCell: {
            root: {
                padding: ".75rem"
            }
        },
        MuiTable: {
            root: {
                overflowY: 'auto'
            }
        }
    }
})
export default customTheme;
