import React, { Component, useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

/**
 * Content of app
 */

 const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

 const useStyles = makeStyles((theme) => ({
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
  }));

 export default function CustomForm(props) {

    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });

      const handleChange = (event) => {
        //setState({ ...state, [event.target.name]: event.target.checked });
      };

      const [selectedDate, setSelectedDate] = React.useState(
        new Date()
      );
    
      const handleDateChange = (date) => {
        setSelectedDate(date);
      };

      const [radioBtnValue, setRadioBtnValue] = React.useState('female');

    const handleRadioBtnChange = (event) => {
        setRadioBtnValue((event.target.value));
    };

    const handleAmountChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <h1 style={{border:"2px solid black", textAlign:"center"}}>Form</h1>
            <a href="https://material-ui.com/components/buttons/" target="_blank">Reference</a>
            <h3 style={{textAlign:"center"}}>Buttons</h3>
            <Container>
                <Box p={2}>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                    <Button variant="contained" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="contained" disabled>
                        Disabled
                    </Button>
                    <Button variant="contained" color="primary" href="#contained-buttons">
                        Link
                    </Button>
                </Box>
            </Container>
            <h3 style={{textAlign:"center"}}>Link Buttons</h3>
            <Container>
                <Box p={2}>
                    <Button>Default</Button>
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                    <Button disabled>Disabled</Button>
                    <Button href="#text-buttons" color="primary">
                        Link
                    </Button>
                </Box>
            </Container>
            <h3 style={{textAlign:"center"}}>Outlined Buttons</h3>
            <Container>
                <Box p={2}>
                    <Button variant="outlined">Default</Button>
                    <Button variant="outlined" color="primary">
                    Primary
                    </Button>
                    <Button variant="outlined" color="secondary">
                    Secondary
                    </Button>
                    <Button variant="outlined" disabled>
                    Disabled
                    </Button>
                    <Button variant="outlined" color="primary" href="#outlined-buttons">
                    Link
                    </Button>
                </Box>
            </Container>
            <h3 style={{textAlign:"center"}}>Checkbox with FormControlLabel</h3>
            <Container>
                <Box p={2}>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        label="Secondary"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Primary"
                    />
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                    <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                    <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={state.checkedF}
                            onChange={handleChange}
                            name="checkedF"
                            indeterminate
                        />
                        }
                        label="Indeterminate"
                    />
                    <FormControlLabel
                        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                        label="Custom color"
                    />
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        label="Custom icon"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                        />
                        }
                        label="Custom size"
                    />
                    </FormGroup>
                </Box>
            </Container>
            <h3 style={{textAlign:"center"}}>Date Picker</h3>
            <Container>
                <h5>Select Date with KeyboardDatePicker</h5>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <h5>Select Date with TextField</h5>
                <TextField
                    id="date"
                    label="Select Date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Container>
            <h3 style={{textAlign:"center"}}>Radio</h3>
            <Container>
                <h5>Radio Group</h5>
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={radioBtnValue} onChange={handleRadioBtnChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                </RadioGroup>
                </FormControl>
            </Container>
            <h3 style={{textAlign:"center"}}>TextField</h3>
            <Container>
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <br/>
                <br/>
                <br/>
                <h5>With helper text</h5>
                <TextField
                label="First Name"
                id="outlined-margin-normal"
                defaultValue="John"
                helperText="Your first name"
                margin="normal"
                variant="outlined"
                />
                <br/>
                <br/>
                <br/>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.amount}
                        onChange={handleAmountChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>
            </Container>
            <Footer/>
        </React.Fragment>
    )
    
}