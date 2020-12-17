import React,{useState} from 'react';
import {Card,Button} from 'antd';
import { DeleteOutlined ,CheckOutlined} from '@ant-design/icons';

const PList = (props) =>{
    const [line,setLine] =useState(false);
    const cutIt =() =>{
      
        setLine(true);
      };
      
    return   <Card  size="small list" >
    <div className="task-container">
    
     
      <div className="list-item" style={{textDecoration:line?'line-through':'none', color:line?'red':'black'}}>
        {props.td}
      </div>
      <Button type="primary" shape="circle" ghost className="list-item done" onClick={cutIt}><CheckOutlined /></Button>
      <Button type="primary" danger onClick={()=> props.removeItem(props.todo.indexOf(props.td))} className="list-item" ><DeleteOutlined /></Button>
    </div>

 </Card>
    
}

export default PList;


