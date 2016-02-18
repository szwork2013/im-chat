import React from 'react';

export default React.createClass({
  render() {
    const styles = require('./hd.scss');
    return (
      <div className={styles.right}>
      	{this.props.children}
      </div>
    )
  }
})