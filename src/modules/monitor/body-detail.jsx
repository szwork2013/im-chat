import React from 'react';
import {
  Cells, CellsTitle, Cell, CellHeader, CellBody, CellFooter,ButtonArea,Button
} from 'react-weui';
import {Hd,HdLeft,HdMiddle,HdRight} from 'hd';
import {routeActions} from 'react-router-redux';
import {LineChart} from 'react-d3';
import BottomBar,{rootName} from 'bottomBar'

export default React.createClass({
  toPatientIndex(){
    routeActions.push('/me/patient')
  },
  render() {
    let {router,user} = this.props;
    let isDr = user.usertype === '1';
    const backtext = rootName(router);
    return (
      <div>
      <Hd>
        <HdLeft>{backtext}</HdLeft>
        <HdMiddle>患者信息</HdMiddle>
        <HdRight></HdRight>
      </Hd>
        <Cells>
          <Cell className="no_access">
            <CellBody>通讯名</CellBody>
            <CellFooter>子了了了</CellFooter>
          </Cell>
        </Cells>
        <Cells>
          <Cell>
            <CellBody>
              <div className="flex-container">
                <div className="flex-item-1">健康</div>
                <div className="green flex-item-2">10分</div>
                <div className="flex-item-1">体重</div>
                <div className="flex-item-2">50kg</div>
              </div>
            </CellBody>
          </Cell>
          <Cell>
            <CellBody>
              <div className="flex-container">
                <div className="flex-item-1">宫高</div>
                <div className="flex-item-2">30cm</div>
                <div className="flex-item-1">腹围</div>
                <div className="flex-item-2">90cm</div>
              </div>
            </CellBody>
          </Cell>
          <Cell>
            <CellBody>
              <div className="flex-container">
                <div className="flex-item-1">血压</div>
                <div className="flex-item-2">80-120</div>
                <div className="flex-item-1">血糖</div>
                <div className="flex-item-2">4.1 mmol/L</div>
              </div>
            </CellBody>
          </Cell>
        </Cells>
      </div>
    )
  }
})
