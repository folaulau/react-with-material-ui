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

 export default function CustomFeedback(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <a href="https://material-ui.com/components/grid/" target="_blank">Reference</a>
            <h3>Using Container</h3>
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
            <h3>Without Container with direction="row"</h3>
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
            <Footer/>
        </React.Fragment>
    )
    
}