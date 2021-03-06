import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import DownshiftMultiple from './downShiftMultiple'


const styles = theme => ({
  root: {
      flexGrow: 1,
      //height: 250,
  },
  container: {
      flexGrow: 1,
      position: 'relative',
  },
  paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0,
  },
  chip: {
      margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
      flexWrap: 'wrap',
  },
});

function IntegrationDownshift(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <DownshiftMultiple classes={classes} />
    </div>
  );
}

IntegrationDownshift.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationDownshift);