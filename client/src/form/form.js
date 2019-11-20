import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { register } from "./../serviceWorker";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        WMC Rental
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    // minWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Form() {
  const classes = useStyles();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [propertyName, setPropertyName] = React.useState("");
  const [bedrooms, setBedrooms] = React.useState("");
  const [propertyType, setPropertyType] = React.useState("");
  const [flatNo, setFlatNo] = React.useState("");
  const [furnishedStatus, setFurnishedStatus] = React.useState("");
  const [expectedRent, setExpectedRent] = React.useState("");
  const [availableFrom, setAvailableFrom] = React.useState(new Date());

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const handleSubmit = event => {
    event.preventDefault();
    const data = new URLSearchParams();
    for (const pair of new FormData(event.target)) {
      data.append(pair[0], pair[1]);
    }

    fetch(`${process.env.REACT_APP_API_URL}/owner/register`, {
      method: "POST",
      body: data
    })
      .then(res => res.json()) //response type
      .then(data => console.log("RESP DATA", data));
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register your property
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="Mobile"
                name="mobile"
                value={mobile}
                onChange={event => setMobile(event.target.value)}
                autoComplete="mobile"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                variant="outlined"
                fullWidth
                required
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Property Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="propertyName"
                  name="propertyName"
                  value={propertyName}
                  onChange={event => setPropertyName(event.target.value)}
                  autoWidth={true}
                  labelWidth={labelWidth}
                >
                  <MenuItem value="nova">Nova</MenuItem>
                  <MenuItem value="irisCourt">Iris Court</MenuItem>
                  <MenuItem value="aqualily">Aqualily</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl
                variant="outlined"
                fullWidth
                required
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Bedrooms
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="bedrooms"
                  name="bedrooms"
                  value={bedrooms}
                  onChange={event => setBedrooms(event.target.value)}
                  autoWidth={true}
                  labelWidth={labelWidth}
                >
                  <MenuItem value={"1"}>1</MenuItem>
                  <MenuItem value={"2"}>2</MenuItem>
                  <MenuItem value={"3"}>3</MenuItem>
                  <MenuItem value={"4"}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl
                variant="outlined"
                fullWidth
                required
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Property Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="propertyType"
                  name="propertyType"
                  value={propertyType}
                  onChange={event => setPropertyType(event.target.value)}
                  autoWidth={true}
                  labelWidth={labelWidth}
                >
                  <MenuItem value={"villa"}>Villa</MenuItem>
                  <MenuItem value={"apartment"}>Apartment</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="flatNo"
                label="Flat No"
                name="flatNo"
                value={flatNo}
                onChange={event => setFlatNo(event.target.value)}
                autoComplete="flatNo"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl
                variant="outlined"
                fullWidth
                required
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Furnished status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="furnishedStatus"
                  name="furnishedStatus"
                  value={furnishedStatus}
                  onChange={event => setFurnishedStatus(event.target.value)}
                  autoWidth={true}
                  labelWidth={labelWidth}
                >
                  <MenuItem value={"fur"}>Fully-Furnished</MenuItem>
                  <MenuItem value={"semi-fur"}>Semi-Furnished</MenuItem>
                  <MenuItem value={"un-fur"}>Un-Furnished</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl
                variant="outlined"
                fullWidth
                required
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Expected Rent
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="expectedRent"
                  name="expectedRent"
                  value={expectedRent}
                  onChange={event => setExpectedRent(event.target.value)}
                  autoWidth={true}
                  labelWidth={labelWidth}
                >
                  <MenuItem value={"10-15"}>10k - 15k</MenuItem>
                  <MenuItem value={"15-20"}>15k - 20k</MenuItem>
                  <MenuItem value={"20-30"}>20k - 30k</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="dense"
                  required
                  id="availableFrom"
                  label="Available from"
                  name="availableFrom"
                  format="MM/dd/yyyy"
                  value={availableFrom}
                  onChange={date => setAvailableFrom(date)}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item md={6}>
              <Button
                md={6}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
              >
                Submit
              </Button>
            </Grid>
            <Grid item md={6}>
              <Button
                md={6}
                type="reset"
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                className={classes.submit}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
