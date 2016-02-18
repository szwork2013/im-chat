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
        <HdMiddle>患者信息</HdMiddle>
        <HdRight></HdRight>
      </Hd>
        <Cells>
          <Cell>
            <CellBody>
              通讯名             
            </CellBody>
            <CellFooter>
            	一二三四
            </CellFooter>
          </Cell>
        </Cells>
        <Cells>
          <Cell>
            <CellBody>
              姓名             
            </CellBody>
            <CellFooter>
            	一二三
            </CellFooter>
          </Cell>
          <Cell>
            <CellBody>
              年龄             
            </CellBody>
            <CellFooter>
              26
            </CellFooter>
          </Cell>
          <Cell>
            <CellBody>预产期</CellBody><CellFooter>2016-03-03</CellFooter>
          </Cell>
          <Cell>
            <CellBody>联系电话</CellBody><CellFooter>13574857452</CellFooter>
          </Cell>
          <Cell>
            <CellBody>备用联系人</CellBody><CellFooter>张先生 18958748562</CellFooter>
          </Cell>
        </Cells>
      </div>
    )
  }
})
