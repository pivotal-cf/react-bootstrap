import React from 'react';
import createChainedFunction from './utils/createChainedFunction';

/**
 * Note: This is intended as a stop-gap for accessibility concerns that the
 * Bootstrap CSS does not address as they have styled anchors and not buttons
 * in many cases.
 */
export default class SafeAnchor extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.props.href === undefined) {
      event.preventDefault();
    }
  }

  handleKeyDown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      this.props.onClick && this.props.onClick(event) || this.handleClick(event);
    }
  }

  render() {
    return (
      <a role={this.props.href ? undefined : 'button'}
        {...this.props}
         onClick={createChainedFunction(this.props.onClick, this.handleClick)}
         onKeyDown={this.handleKeyDown}
         href={this.props.href || ''}/>
    );
  }
}

SafeAnchor.propTypes = {
  href: React.PropTypes.string,
  onClick: React.PropTypes.func
};
