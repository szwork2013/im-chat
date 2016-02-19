import React from 'react';
import {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} from 'react-weui';
import {Hd,HdMiddle} from 'hd';
import BottomBar from 'bottomBar';
import classNames from 'classnames/bind';

let ListItem = (props)=>{
  const styles = require('./ask.scss');
  const cx = classNames.bind(styles);

  return <div className={styles.item} onClick={props.clickHander}>
      <div className={styles['head-wrap']}>
        <img className={styles.head} src={props.head}/>
      </div>
      <div className={styles['content-wrap']}>
        <h2 className={styles.name}>{props.username}<span className={styles.time}>13:11</span></h2>
        <p className={styles.content}>内容地枯叶要夺枯霜在夺地夺 了最鼍人 的仍人  了工在地 一sdfsdfsd柘城内容</p>
      </div>
    </div>
}

export default React.createClass({
  render() {
    const hdpng = require('./../../assets/head.png');
    const styles = require('./ask.scss');
    const {history} = this.props;

    const commConf = {
      clickHander:()=>{
        history.push('/ask/one')
      }
    }

    return (
      <div>
        <Hd>
          <HdMiddle>咨询</HdMiddle>
        </Hd>
        <ListItem 
           head={hdpng} 
           username='用户1'
           {...commConf}
         />
        <ListItem 
           head={hdpng} 
           username='用户555'
           {...commConf}
         />
        <BottomBar {...this.props}/>
      </div>
    )
  }
})
