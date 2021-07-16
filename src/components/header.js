import React, { Component } from 'react';
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
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


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

 export default function Header() {

        const classes = useStyles();

        return (
            <React.Fragment>
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>

                    <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Material UI
                    </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Box
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Container
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Grid
                        </Link>
                    </nav>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    
}