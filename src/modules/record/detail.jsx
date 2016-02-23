import React from 'react';
import {
  Cells, CellsTitle, Cell, CellHeader, CellBody, CellFooter,ButtonArea,Button
} from 'react-weui';
import {Hd,HdLeft,HdMiddle,HdRight} from 'hd';
import {routeActions} from 'react-router-redux';
import {LineChart} from 'react-d3';
import BottomBar from 'bottomBar'



export default React.createClass({
  toPatientIndex(){
    routeActions.push('/me/patient')
  },
  render() {
    let {router,user} = this.props;

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
        <HdMiddle>记录</HdMiddle>
      </Hd>
        <Cells access>          
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
        {
          user.usertype === '1' ? null : <BottomBar {...this.props}/>
        }
      </div>
    )
  }
})
