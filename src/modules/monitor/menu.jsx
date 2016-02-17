import WeUI from 'react-weui';
import React from 'react';
import {Link} from 'react-router';
import {routeActions} from 'react-router-redux'
const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} = WeUI;

export default React.createClass({
  render() {
    return (
      <Cells access>
        <Cell onClick={()=>{this.props.history.pushState(null,'/monitor/list') }}>
          <CellBody>
          医生界面
          </CellBody>
          <CellFooter/>
        </Cell>
        <Cell onClick={()=>{ this.props.history.pushState(null,'/monitor/detail') }}>
          <CellBody>
          医生界面(详情)
          </CellBody>
          <CellFooter/>
        </Cell>
        <Cell>
          <CellBody>
          用户界面
          </CellBody>
          <CellFooter/>
        </Cell>
      </Cells>
    )
  }
})
