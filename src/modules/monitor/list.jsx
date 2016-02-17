import WeUI from 'react-weui';
import React from 'react';
import {Link} from 'react-router';
import Hd from 'Hd';
const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;

export default React.createClass({
  render() {
    return (
      <div>
      <Hd></Hd>
        <Cells access>
          <Cell>
            <CellBody>
            个人信息
            </CellBody>
            <CellFooter/>
          </Cell>
          <Cell>
            <CellBody>测量时间</CellBody>
            <CellFooter>昨天</CellFooter>
          </Cell>
        </Cells>
        <Cells>
          <Cell>
            <CellBody>健康</CellBody>
            <CellFooter>昨天</CellFooter>
          </Cell>
          <Cell>
            <CellBody>宫高 腹围</CellBody>
          </Cell>
          <Cell>
            <CellBody>体重 血压</CellBody>
          </Cell>
          <Cell>
            <CellBody>体重 血压</CellBody>
          </Cell>
        </Cells>
      </div>
    )
  }
})
