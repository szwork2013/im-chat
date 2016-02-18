import {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} from 'react-weui';
import React from 'react';
import {Hd,HdLeft,HdMiddle,HdRight} from 'hd';
import BottomBar from 'BottomBar'

export default React.createClass({
  render() {
    const hdpng = require('./../../assets/head.png');
    const styles = require('./addr.scss');
    const {history} = this.props;
    
    return (
      <div>
      <Hd>
        <HdLeft arrow={false}></HdLeft>
        <HdMiddle>通讯录</HdMiddle>
        <HdRight>按钮</HdRight>
      </Hd>
        <Cells access>
          <CellsTips>a</CellsTips>
          <Cell onClick={ ()=> this.props.history.push('/me/patient') }>
            <CellHeader>
              <img className={styles.head} src={hdpng}/>
            </CellHeader>
            <CellBody>
              a病人
             </CellBody>
          </Cell>
          <Cell onClick={ ()=> this.props.history.push('/me/doctor') }>
            <CellHeader>
              <img className={styles.head} src={hdpng} />
            </CellHeader>
            <CellBody>
              a医生
             </CellBody>
          </Cell>
        </Cells>
        <Cells access>
          <CellsTips>b</CellsTips>
          <Cell>
            <CellHeader>
              <img className={styles.head} src={hdpng}/>
            </CellHeader>
            <CellBody>
              bbb
             </CellBody>
          </Cell>
          <Cell>
            <CellHeader>
              <img className={styles.head} src={hdpng} />
            </CellHeader>
            <CellBody>
              百度
             </CellBody>
          </Cell>
        </Cells>
        <BottomBar></BottomBar>
      </div>
    )
  }
})
