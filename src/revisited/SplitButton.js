import React from 'react';
import classNames from 'classnames';
import BootstrapMixin from '../BootstrapMixin';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import DropdownBase from './DropdownBase';
import SplitToggle from './SplitToggle';
import createChainedFunction from '../utils/createChainedFunction';

export default class SplitButton extends DropdownBase {
  constructor(props) {
    super(props, SplitToggle);

    //this.ensureToggleProps = this.ensureToggleProps.bind(this);
  }

  render() {
    let {
      toggle,
      menu,
      open
    } = this.extractChildren();

    const rootClasses = {
      open,
      dropdown: !this.props.dropup,
      dropup: this.props.dropup
    };

    return (
      <ButtonGroup
        bsSize={this.props.bsSize}
        className={classNames(this.props.className, rootClasses)}>
        <Button bsStyle={this.props.bsStyle}>
          Split
        </Button>
        {toggle}
        {menu}
      </ButtonGroup>
    );
  }

  //ensureToggleProps(toggle, open) {
    //return (
      //<SplitToggle
        //id={this.props.id}
        //ref={DropdownBase.TOGGLE_REF}
        //open={open}
        //bsStyle={this.props.bsStyle}
        //onClick={createChainedFunction(
          //this.props.onClick,
          //this.handleClick
        //)}
        //onKeyDown={createChainedFunction(
          //this.props.handleKeyDown,
          //this.handleKeyDown
        //)}>
        //<span className="sr-only">{this.props.dropdownTitle}</span>
      //</SplitToggle>
    //);
  //}
}

SplitButton.propTypes = {
  dropup: React.PropTypes.bool,
  ...DropdownBase.propTypes,
  ...BootstrapMixin.propTypes
};

SplitButton.Toggle = SplitToggle;
