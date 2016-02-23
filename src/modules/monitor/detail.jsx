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
    let {router,user,history} = this.props;
    let isDr = user.usertype === '1';

     var lineData = [
      { 
        name: 'series1',
        values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },
      {
        name: 'series2',
        values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ],
        strokeWidth : 0
      },
      {
        name: 'series3',
        values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
      } 
    ];

    const backtext = rootName(router);

    return (
      <div>
      <Hd>
        <HdLeft arrow={backtext}>{backtext}</HdLeft>
        <HdMiddle>用户名</HdMiddle>
        <HdRight>帐号</HdRight>
      </Hd>
        <Cells access>
        {
          isDr ? <Cell onClick={this.toPatientIndex}>
            <CellBody>
            个人信息
            </CellBody>
            <CellFooter/>
          </Cell> : <Cell onClick={()=>history.pushState(null,'/monitor/body')}>
            <CellBody>
            身体数据
            </CellBody>
            <CellFooter/>
          </Cell>
        }
          <Cell className="no_access">
            <CellBody>测量时间</CellBody>
            <CellFooter>昨天</CellFooter>
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
          <Cell>
            <CellBody>
              <LineChart
                legend={true}
                data={lineData}
                width='100%'
                height={400}
                viewBoxObject={{
                  x: 0,
                  y: 0,
                  width: 500,
                  height: 400
                }}
                title="Line Chart"
                yAxisLabel="Altitude"
                xAxisLabel="Elapsed Time (sec)"
                gridHorizontal={true}
              />
            </CellBody>
          </Cell>
        </Cells>
        <ButtonArea direction="horizontal">
            <Button>发消息</Button>
            { isDr ? <Button type="warn">待阅</Button> : null }
        </ButtonArea>
        {
          isDr ? null : <BottomBar {...this.props}/>
        }
      </div>
    )
  }
})
