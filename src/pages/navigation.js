import React, { Component, useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
/**
 * Content of app
 */

 const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
  }));

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

 export default function CustomNavigation(props) {

    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <h1 style={{border:"2px solid black", textAlign:"center"}}>Navigation</h1>
            <a href="https://material-ui.com/components/bottom-navigation/" target="_blank">Reference</a>
            <h3 style={{textAlign:"center"}}>Breadcrumbs</h3>
            <Container>
                <Box p={2}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Material-UI
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                        Core
                    </Link>
                    <Link
                        color="textPrimary"
                        href="/components/breadcrumbs/"
                        onClick={handleClick}
                        aria-current="page"
                    >
                        Breadcrumb
                    </Link>
                    </Breadcrumbs>
                </Box>
            </Container>
            <Footer/>
        </React.Fragment>
    )
    
}