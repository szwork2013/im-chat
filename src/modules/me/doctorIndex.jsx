import {Cells, Cell, CellBody, CellFooter} from 'react-weui';
import React from 'react';
import {Link} from 'react-router';
import {Hd,HdLeft,HdMiddle,HdRight} from 'hd';


export default React.createClass({
  render() {
    const styles = require('./me.scss');
    return (
      <div>      
      <Hd>
        <HdLeft>返回</HdLeft>
        <HdMiddle>医生信息</HdMiddle>
        <HdRight></HdRight>
      </Hd>
        <Cells>
          <Cell>
            <CellBody>通讯名 </CellBody><CellFooter>一二三四</CellFooter>
          </Cell>
          <Cell>
            <CellBody>姓名</CellBody><CellFooter>一二三</CellFooter>
          </Cell>
          <Cell>
            <CellBody>性别</CellBody><CellFooter>女</CellFooter>
          </Cell>
          <Cell>
            <CellBody>医院</CellBody><CellFooter>吉林省国健妇幼医院</CellFooter>
          </Cell>
          <Cell>
            <CellBody>职称</CellBody><CellFooter>教授</CellFooter>
          </Cell>
          <Cell>
            <CellBody>帐号</CellBody><CellFooter>910</CellFooter>
          </Cell>
        </Cells>
      </div>
    )
  }
})
