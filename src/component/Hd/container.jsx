import React from 'react';

export default React.createClass({
  render() {
    const styles = require('./hd.scss');
    return (
      <div>
        <div className={styles.hd}>{this.props.children}</div>
        <div className={styles.heightfix}></div>
      </div>
    )
  }
})
