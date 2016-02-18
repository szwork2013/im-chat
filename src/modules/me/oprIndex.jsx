import {Cells, Cell, CellBody, CellFooter, CellsTips} from 'react-weui';
import React from 'react';
import {Hd,HdLeft,HdMiddle,HdRight} from 'hd';
import BottomBar from 'BottomBar'

export default React.createClass({
  render() {
    const styles = require('./me.scss');

    let dyncHtml = null;
    if(this.props.user.usertype === '1'){
      dyncHtml = <Cell>
            <CellBody>业务信息</CellBody><CellFooter></CellFooter>
          </Cell>
    }else{
      dyncHtml = <Cell>
            <CellBody>账户信息</CellBody><CellFooter></CellFooter>
          </Cell>
    }
    return (
      <div>      
      <Hd>
        <HdLeft arrow={false}></HdLeft>
        <HdMiddle>我</HdMiddle>
        <HdRight></HdRight>
      </Hd>
        <Cells>
          <Cell>
            <CellBody>头像 </CellBody><CellFooter>一二三四</CellFooter>
          </Cell>
          <Cell>
            <CellBody>帐号</CellBody><CellsTips>一二三</CellsTips>
          </Cell>
          <Cell>
            <CellBody>安全设置</CellBody><CellFooter></CellFooter>
          </Cell>
        </Cells>
        <Cells access>
          <Cell>
            <CellBody>个人信息</CellBody><CellFooter></CellFooter>
          </Cell>
          { dyncHtml }
        </Cells>
        <BottomBar></BottomBar>
      </div>
    )
  }
})
