import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const DeleteButton = props => {
  const { classes } = props
  return (
    <Button raised color="primary" className={classes.button}>
      Primary
    </Button>
  )
}

DeleteButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DeleteButton);