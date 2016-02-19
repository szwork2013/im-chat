import React from 'react';
import {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} from 'react-weui';
import {Hd,HdMiddle} from 'hd';
import BottomBar from 'bottomBar';

let ListItem = (props)=>{
  const styles = require('./monitor.scss');

  return (
    <Cell className="flex-align-top">
      <CellHeader>
        <img className={styles.head} src={props.head} onClick={props.toPatientIndex}/>
      </CellHeader>
      <CellBody>
        <h2 className={styles.name} onClick={props.toPatientIndex}>{props.username}</h2>
        <div className={styles.monarea} onClick={ props.toDetail }>
          <div className={styles.p}><span className={styles.time}>13:11</span><span className={styles.date}>今天</span><em className={[styles.check,styles.tobecheck].join(' ')}>待阅</em></div>
          <div className={styles.content}>内容内容内 sdfsdf 容内容sdfsdfsdfsdfsd柘城内容</div>
        </div>
      </CellBody>
    </Cell>
  )
}

export default React.createClass({
  render() {
    const hdpng = require('./../../assets/head.png');
    const styles = require('./monitor.scss');
    const {history} = this.props;
    const toPatientIndex = ()=>{
      history.push('/me/patient');
    }

    const commConf = {
      toPatientIndex:()=>{
        this.props.history.push('/me/patient');
      },
      toDetail:()=>{
        this.props.history.push('/monitor/detail')
      }
    }

    return (
      <div>
      <Hd>
        <HdMiddle>监测</HdMiddle>
      </Hd>
        <Cells>
          <ListItem 
             head={hdpng} 
             username='用户1'
             checked={true} 
             {...commConf}
           />
          <ListItem 
             head={hdpng} 
             username='用户2'
             checked={false} 
             {...commConf}
           />
        </Cells>
        <BottomBar {...this.props}/>
      </div>
    )
  }
})
