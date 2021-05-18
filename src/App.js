import './App.css';
import React, { useState, useEffect } from 'react';
import Traininglist from './components/Traininglist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Customerlist from './components/Customerlist';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import IconButton from '@material-ui/core/IconButton';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { BrowserRouter as Router, Switch, Route, Link }
from "react-router-dom";
import Calendar from './components/Calendar';
import Statistics from './components/Statistics';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


function App() {

  const toggleDrawer = (open) => (event) => {
    setState(open)
  }

  const [state, setState] = React.useState(false)

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const list = () => (
    <div>
      <Link className="text-link" to="/customerlist">
        <Button
          variant="contained"
          color="inherit"
          className={classes.button}
          startIcon={<PeopleAltIcon />}
        > Customers
    </Button>
      </Link>{' '}
      <br />
      <Link className="text-link" to="/traininglist">
        <Button
          variant="contained"
          color="inherit"
          className={classes.button}
          startIcon={<SportsFootballIcon />}
        > Trainings
    </Button>
      </Link>{' '}
      <br />
      <Link className="text-link" to="/calendar">
        <Button
          variant="contained"
          color="inherit"
          className={classes.button}
          startIcon={<EventAvailableIcon />}
        > Calendar
    </Button>{' '}
      </Link>
      <br />
      <Link className="text-link" to="/Statistics">
        <Button
          variant="contained"
          color="inherit"
          className={classes.button}
          startIcon={<TrendingUpIcon />}
        > Statistics
    </Button>{' '}
        <br />
      </Link>
    </div>

  )

  return (
    <div className="App">
      <Router>
        <AppBar static color="secondary">
          <Toolbar >
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <FormatListBulletedIcon />
            </IconButton>
            <Drawer
              anchor={'left'}
              open={state}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
            <Typography variant="h6">
              Personal trainer app
          </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" render={() => <h2>Personal trainer app</h2>} />
          <Route path="/customerlist" component={Customerlist} />
          <Route path="/traininglist" component={Traininglist} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/Statistics" component={Statistics} />
          <Route path="*" render={() => <h2>Page not found!</h2>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
