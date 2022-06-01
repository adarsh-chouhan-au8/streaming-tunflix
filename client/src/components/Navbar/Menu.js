import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Menu = () => {
    const classes = useStyles();

    return (
        <ButtonGroup aria-label="outlined primary button group" className={classes.navMenu}>
            <Button component={NavLink} to="/browse" variant="text" exact className={classes.navMenuItem} activeClassName={classes.active}>Browse</Button>
            <Button component={NavLink} to="/browse/movies" variant="text" className={classes.navMenuItem} activeClassName={classes.active}>Films</Button>
            <Button component={NavLink} to="/browse/tvshows" variant="text" className={classes.navMenuItem} activeClassName={classes.active}>TvSeries </Button>
            <Button component={NavLink} to="/browse/mylist" variant="text" className={classes.navMenuItem} activeClassName={classes.active}>My List</Button>
        </ButtonGroup>
    );
};

const useStyles = makeStyles((theme) => ({
    navMenu: {
        flexGrow: 1,
    },
    navMenuItem :{
        '&:hover':{
            color: 'rgb(220,220,220)'
        }
    },
    active:{
        fontWeight: 700,
        '&:hover':{
            color: '#fff'
        }
    }
}));

export default Menu;
