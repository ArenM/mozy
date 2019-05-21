import React from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  TextField,
  withStyles,
} from "@material-ui/core"

const styles = {
  card: {
    width: "25rem",
    margin: "4rem auto",
  },
  media: {
    height: 140,
  },
  textField: {
    margin: "10px 15px",
  },
}

const SignupPage = ({ onSubmit, onChange, user, errors, classes }) => (
  <Card className={classes.card}>
    <CardContent style={{ display: "flex", flexDirection: "column" }}>
      <Typography gutterBottom variant="h5" component="h2">
        Signup for an account
      </Typography>
      <span style={{ color: "red" }}>{errors[0]}</span>
      <TextField
        type="text"
        className={classes.textField}
        label="Your Name"
        value={user.name}
        onChange={onChange}
        name="name"
      />
      <TextField
        type="email"
        className={classes.textField}
        label="Your Email"
        value={user.email}
        onChange={onChange}
        name="email"
      />
      <TextField
        label="Password"
        className={classes.textField}
        type="password"
        value={user.password}
        onChange={onChange}
        name="password"
      />
    </CardContent>
    <CardActions>
      <Button size="medium" color="primary" onClick={onSubmit}>
        Sign Up
      </Button>
    </CardActions>
  </Card>
)

SignupPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  errors: PropTypes.arrayOf(PropTypes.string),
}

export default withStyles(styles)(SignupPage)
