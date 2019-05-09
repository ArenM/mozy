import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function MainAppBar(props) {
  const { classes, authenticated, logOut } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Mozy
          </Typography>
          {authenticated ? (
            <Button color="inherit" onClick={logOut}>
              Logout
            </Button>
          ) : (
            <div>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired
};

export default withStyles(styles)(MainAppBar);
