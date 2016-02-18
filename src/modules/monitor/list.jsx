import {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} from 'react-weui';
import React from 'react';
import {Hd,HdMiddle} from 'hd';
import ListItem from './listItem'
import BottomBar from 'BottomBar'

export default React.createClass({
  render() {
    const hdpng = require('./../../assets/head.png');
    const styles = require('./monitor.scss');
    const {history} = this.props;
    const toPatientIndex = ()=>{
      history.push('/me/patient');
    }

    const commConf = {
      toPatientIndex:()=>{
        this.props.history.push('/me/patient');
      },
      toDetail:()=>{
        this.props.history.push('/monitor/detail')
      }
    }

    return (
      <div>
      <Hd>
        <HdMiddle>监测</HdMiddle>
      </Hd>
        <Cells>
          <Cell>
            <CellBody>
            <ListItem 
               head={hdpng} 
               username='用户1'
               checked={true} 
               {...commConf}
             />
             </CellBody>
          </Cell>
          <Cell>
            <CellBody>
            <ListItem 
               head={hdpng} 
               username='用户2'
               checked={false} 
               {...commConf}
             />
            </CellBody>
          </Cell>
        </Cells>
        <BottomBar></BottomBar>
      </div>
    )
  }
})
