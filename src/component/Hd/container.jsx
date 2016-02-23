import React from 'react';

export default React.createClass({
  render() {
    const styles = require('./hd.scss');
    return (
        <div className={styles.heightfix}>
        	<div className={styles.hd}>{this.props.children}</div>
        </div>
    )
  }
})
