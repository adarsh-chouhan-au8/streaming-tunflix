import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Logo from "../../assets/images/logo.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/iconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Link } from "@material-ui/core";


const Footer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.footer}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Box>
                        <Link href="https://www.facebook.com/tunflix">
                            <FacebookIcon className={classes.socialIcon} fontSize="large" />
                        </Link>
                        <Link href="https://www.instagram.com/tunflix">
                            <InstagramIcon className={classes.socialIcon} fontSize="large" />
                        </Link>
                        <Link href="https://www.twitter.com/tunflix">
                            <TwitterIcon className={classes.socialIcon} fontSize="large" />
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}>
                          
                            <Typography component={Link} color='textSecondary' display="block" >Who Are We?</Typography>
                           
                            <Typography component={Link} color='textSecondary' display="block"  >Our vision</Typography>
                            <Typography component={Link} color='textSecondary' display="block"  >Blog</Typography>

                        </Grid>
                        <Grid item xs={4}>
                          
                            <Typography component={Link} color='textSecondary' display="block" >Legal</Typography>
                            <Typography component={Link} color='textSecondary' display="block" >Help Centre </Typography>
                            <Typography component={Link} color='textSecondary' display='block'>Cookie Preferences</Typography>

                        </Grid>
                        <Grid item xs={4}>
                          
                            <Typography component={Link} color='textSecondary' display='block'>Join Us</Typography>
                            <Typography component={Link} color='textSecondary' display='block'>Careers</Typography>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    © 2021 Tunflix, Inc.
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing(8),
    },
    socialIcon: {
        color: "grey",
        cursor: "pointer",
        "&:hover": {
            color: "#fff",
        },
        transition: ".1s",
        marginRight: theme.spacing(1),
    },
}));

export default Footer;
