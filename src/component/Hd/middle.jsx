import React from 'react';

export default React.createClass({
  render() {
    const styles = require('./hd.scss');
    return (
      <div className={styles.middle}>
      	{this.props.children}
      </div>
    )
  }
})