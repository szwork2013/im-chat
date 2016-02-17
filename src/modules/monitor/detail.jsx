import {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} from 'react-weui';
import React from 'react';
import {Link} from 'react-router';
import Hd from 'Hd';
import {LineChart} from 'react-d3';

export default React.createClass({
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
      </div>
    )
  }
})
