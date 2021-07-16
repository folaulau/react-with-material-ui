import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
/**
 * Content of app
 */

 const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    }
  }));

 export default function Box(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
                <Container fixed component="main" className={classes.heroContent}>
                    
                </Container>
            <Footer/>
        </React.Fragment>
    )
    
}