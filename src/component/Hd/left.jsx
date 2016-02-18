import classNames from 'classnames/bind';
import React from 'react';

export default React.createClass({
  getDefaultProps(){
    return {
      arrow:true
    }
  },
  clickHandler(){
    if(this.props.clickHandler){
      this.props.clickHandler();
    }
    if(this.props.arrow){
      history.back();
    }
  },
  render() {
    const styles = require('./hd.scss');
    let cx = classNames.bind(styles);
    return (
      <div className={cx('left',{arrow:this.props.arrow})} onClick={this.clickHandler}>
      	{this.props.children}
      </div>
    )
  }
})
