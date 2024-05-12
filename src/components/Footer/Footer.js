import React from "react";
import { Container, makeStyles, Divider, useTheme, Box, useMediaQuery } from "@material-ui/core";
import Social from "../Social";

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Container>
            <Divider style={{ backgroundColor: theme.palette.primary.main }} />
            <Box className={classes.footer}>
                <Social></Social>
            </Box>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
        display: "flex",
        justifyContent: "right",
    },
}));

export default Footer;
