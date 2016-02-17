import React from 'react';

export default React.createClass({
  render() {
    const styles = require('./hd.scss');
    return (
      <div className={styles.left}>{this.props.children}</div>
    )
  }
})
