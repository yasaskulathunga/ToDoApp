import React,{useState} from 'react';
import {Button, Input,Row,Col,Card,List,Alert } from 'antd'

import PList from './component/PList';

const ToDoList = () =>{
    
 
    const [todoValue,setTodoValue]  = useState("");
    const [todo,setTodo]  = useState([]);

    
    const handleAddTodo =() =>{
        if(todoValue === ''){
            alert('Plead insert the Task !')
        }else{
            const filterValue = todo.find(td => td === todoValue);
            if(filterValue !== undefined ){
              alert('Todo title already added');
            }else
            {
              const listTodo =[...todo,todoValue];
              setTodo(listTodo);
            }
          }
      }

    const removeItem = (index) =>{
      const remainingItem =todo.filter(td => todo.indexOf(td)!== index);
      setTodo(remainingItem);
    }
   
    return(
        <div >
          <Card size="small" >
          <div className="">
            <h1>ToDo List</h1>
            
              <Row className="addbox">
                <Col flex={4}>
                <Input  type="text" placeholder="Add an Item" onChange={(e) => setTodoValue(e.target.value)} />
                </Col>
                <Col flex={1}>
                <Button type="primary" style={{ marginLeft: 8 }} onClick={handleAddTodo}>Add</Button>
                </Col>
              </Row>
    
              <List className="container listbox"   size="small" bordered>
              {
                todo.map(td => 
                  <PList td={td} todovalue={todoValue} todo={todo} removeItem={removeItem} />)
              }
            
              </List>
     
      
  
            
            </div>
          </Card>
        </div>
    )
}

export default ToDoList;