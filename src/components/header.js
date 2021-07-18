import React, { Component, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { NavLink, withRouter } from "react-router-dom";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    }
  }));

 export default function Header(props) {

        const [anchorEl, setAnchorEl] = useState("")

        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          props.history.push('/some/path');
          //setAnchorEl(null);
        };


        const classes = useStyles();

        return (
            <React.Fragment>
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>

                    <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                      <Link href="/">Material UI</Link>
                    </Typography>
                    <nav>
                        <Button aria-controls="layout-menu" aria-haspopup="true" onClick={handleClick}>
                          Menu
                        </Button>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem><Link href="/layout">Layout</Link></MenuItem>
                          <MenuItem><Link href="/form">Form</Link></MenuItem>
                          <MenuItem><Link href="/navigation">Navigation</Link></MenuItem>
                          <MenuItem><Link href="/surfaces">Surfaces</Link></MenuItem>
                          <MenuItem><Link href="/feedback">Feedback</Link></MenuItem>
                          <MenuItem><Link href="/data-display">Data Display</Link></MenuItem>
                          <MenuItem><Link href="/utils">Utils</Link></MenuItem>
                          <MenuItem><Link href="/lab">Lab</Link></MenuItem>
                        </Menu>
                    </nav>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    
}
