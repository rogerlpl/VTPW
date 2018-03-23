import React from "react";
import {
  withStyles,
  IconButton,
  Hidden
} from "material-ui";
import { Person} from "material-ui-icons";

import headerLinksStyle from "variables/styles/headerLinksStyle";

import MapHeaderButtons from '../Map/headerButtons'

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  routeIsMap() {
    return this.props.location.pathname === "/maps";
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.top}>
      {/* Botones de los mapas */}
      {
       this.routeIsMap() && <MapHeaderButtons classes={classes} />
      }
        {/* Boton para las cuentas */}
        <IconButton
          color="inherit"
          aria-label="Person"
          className={classes.buttonLink}
        >
          <Person className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Perfil</p>
          </Hidden>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
