import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
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

 export default function Home(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
                <Container fixed component="main" className={classes.heroContent}>

                    <Link to="/grid">Grid</Link>
                    <br/>
                    <Link to="/box">Box</Link>
                    <br/>
                    <Link to="/paper">Paper</Link>
                    <br/>
                    <Link to="/inputs">Form Inputs</Link>
                    <br/>
                    <Link to="/navs">Navigation Bars</Link>
                    
                </Container>
            <Footer/>
        </React.Fragment>
    )
    
}