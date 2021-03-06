import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import {Box, Button} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
/**
 * Content of app
 */

 const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    }
  }));

 export default function CustomLayout(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <h1 style={{border:"2px solid black", textAlign:"center"}}>Box Layout</h1>
            <div>Box has CSS features that help avoid writing too much CSS. It creates a div for you</div>
            <a href="https://material-ui.com/components/box/" target="_blank">Reference</a>
            <br/>
            <Box color="blue" 
                p={{ xs: 1, sm: 2, md: 5, lg: 5, xl: 5}} 
                mt={{ xs: 2, sm: 3, md: 5, lg: 5, xl: 5}}
                fontWeight="bold"
                textAlign="center">
                <div>Hello World</div>
                <div>My name is John</div>
                <div>I am 21 years old</div>
            </Box>
            <br/>
            <br/>
            <h1 style={{border:"2px solid black", textAlign:"center"}}>Grid Layout</h1>
            <a href="https://material-ui.com/components/grid/" target="_blank">Reference</a>
            <h3>Grid with Container Layout</h3>
            <Container component="main" style={{border:"2px solid blue"}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} style={{border:"2px solid black"}}>
                        First Column
                        <Grid container spacing={2} style={{border:"2px solid yellow"}}>
                        {[0, 1, 2].map((value) => (
                            <Grid key={value} item xs={12} md={6} lg={6} style={{border:"2px solid green"}}> 
                                Second Level {value}
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xs={12} md={6} lg={6} style={{border:"2px solid black"}}>
                        Second Column
                        <Grid container justifyContent="center" spacing={2} style={{border:"2px solid yellow"}}>
                            {[0, 1, 2].map((value) => (
                                <Grid key={value}  item xs={12} md={6} lg={6} style={{border:"2px solid green"}}>
                                    Second Level {value}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <br/>
            <br/>
            <h3>Grid without Container Layout</h3>
            <Grid direction="row" container spacing={2} style={{border:"2px solid blue"}}>
                <Grid item xs={12} md={6} lg={6} style={{border:"2px solid black"}}>
                    First Column
                    <Grid container spacing={2} style={{border:"2px solid yellow"}}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item xs={12} md={6} lg={6} style={{border:"2px solid green"}}> 
                            Second Level {value}
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xs={12} md={6} lg={6} style={{border:"2px solid black"}}>
                    Second Column
                    <Grid container justifyContent="center" spacing={2} style={{border:"2px solid yellow"}}>
                        {[0, 1, 2].map((value) => (
                            <Grid key={value}  item xs={12} md={6} lg={6} style={{border:"2px solid green"}}>
                                Second Level {value}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <br/>
            <br/>
            <h1 style={{border:"2px solid black", textAlign:"center"}}>Container Layout</h1>
            <div>Container is like Container of Bootstrap. Most page only has one Container</div>
            <a href="https://material-ui.com/components/container/" target="_blank">Reference</a>
            <Container component="main"style={{border:"1px solid blue"}}>
                <div>Hi John</div>
                <div>How are you?</div>
            </Container>
            <Footer/>
        </React.Fragment>
    )
    
}