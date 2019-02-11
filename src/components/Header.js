import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
        <DropdownToggle caret>{this.props.appName}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Incidents</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Take Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
