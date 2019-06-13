import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  TextField,
  withStyles
} from "@material-ui/core";

const styles = {
  card: {
    width: "25rem",
    margin: "4rem auto"
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: 140
  },
  textField: {
    margin: "10px 15px"
  }
};

const LoginPage = ({ onSubmit, onChange, user, errors, classes }) => (
  <Card className={classes.card}>
    <CardContent className={classes.content}>
      <Typography gutterBottom variant="h5" component="h2">
        Log In
      </Typography>
      <span style={{ color: "red" }}>{errors[0]}</span>
      <TextField
        label="Email"
        type="email"
        value={user.email}
        onChange={onChange}
        name="email"
      />
      <TextField
        label="Password"
        type="password"
        value={user.password}
        onChange={onChange}
        name="password"
      />
    </CardContent>

    <CardActions>
      <Button size="medium" color="primary" onClick={onSubmit}>
        Login
      </Button>
    </CardActions>
  </Card>
);

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
  errors: PropTypes.arrayOf(PropTypes.string)
};

export default withStyles(styles)(LoginPage);
