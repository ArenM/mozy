import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardActionArea,
  CardMedia,
  withStyles
} from "@material-ui/core";

const styles = {
  card: {
    maxWidth: "25rem",
    margin: " 3rem auto"
  },
  media: {
    height: 140
  }
};

const SignupPage = ({ onSubmit, onChange, user, errors, classes }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Signup for an account
          </Typography>
          <span style={{ color: "red" }}>{errors[0]}</span>
          <form action="/" onSubmit={onSubmit}>
            <div>
              <label>name</label>
              <input
                type="text"
                value={user.name}
                onChange={onChange}
                name="name"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={user.email}
                onChange={onChange}
                name="email"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={user.password}
                onChange={onChange}
                name="password"
              />
            </div>
            <button type="submit">Signup</button>
          </form>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  </div>
);

SignupPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
  errors: PropTypes.arrayOf(PropTypes.string)
};

export default withStyles(styles)(SignupPage);
