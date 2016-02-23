import React from 'react';
import classNames from 'classnames/bind';

export default React.createClass({
  getDefaultProps(){
  	return {
  		indent:true
  	}
  },
  render() {
    const styles = require('./hd.scss');
    let cx = classNames.bind(styles);

    return (
      <div className={cx('right',this.props.className,{indent:this.props.indent})}>
      	{this.props.children}
      </div>
    )
  }
})