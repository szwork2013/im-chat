import {
  Cells, CellsTitle, Cell, CellHeader, CellBody, CellFooter,ButtonArea,Button
} from 'react-weui';
import {
  FlexContainer,FlexItem
} from 'Flex'
import React from 'react';
import {Link} from 'react-router';
import {Hd,HdLeft,HdMiddle,HdRight} from 'hd';
import {routeActions} from 'react-router-redux';
import {LineChart} from 'react-d3';

export default React.createClass({
  toPatientIndex(){
    routeActions.push('/me/patient')
  },
  render() {
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

    return (
      <div>
      <Hd>
        <HdLeft>返回</HdLeft>
        <HdMiddle>用户名</HdMiddle>
        <HdRight>帐号</HdRight>
      </Hd>
        <Cells access>
          <Cell>
            <CellBody onClick={this.toPatientIndex}>
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
            <CellBody>
              <FlexContainer>
                <FlexItem>健康</FlexItem>
                <FlexItem className='green'>10分</FlexItem>
                <FlexItem>体重</FlexItem>
                <FlexItem>50kg</FlexItem>
              </FlexContainer>
            </CellBody>
          </Cell>
          <Cell>
            <CellBody>
              <FlexContainer>
                <FlexItem>宫高</FlexItem>
                <FlexItem>30cm</FlexItem>
                <FlexItem>腹围</FlexItem>
                <FlexItem>90cm</FlexItem>
              </FlexContainer>
            </CellBody>
          </Cell>
          <Cell>
            <CellBody>
              <FlexContainer>
                <FlexItem>血压</FlexItem>
                <FlexItem>80-120</FlexItem>
              </FlexContainer>
            </CellBody>
          </Cell>
          <Cell>
            <CellBody>
              <FlexContainer>
                <FlexItem>血糖</FlexItem>
                <FlexItem>4.1 mmol/L</FlexItem>
              </FlexContainer>
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
            <Button type="warn">待阅</Button>
        </ButtonArea>
      </div>
    )
  }
})
