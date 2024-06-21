import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoList);

  const handleSubmit = () => {
    dispatch(addTodo(
      {
        id: uuidv4(),
        name,
        completed: false,
        priority
      }
    ))
  }

  useEffect(() => {
    inputRef.current.focus();
    console.log(todos);
  }, [todos])


  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todos.map(todo => <Todo name={todo.name} prioriry={todo.priority}></Todo>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange={(e) => setName(e.target.value)} ref={inputRef} />
          <Select defaultValue="Medium" onChange={(value) => setPriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleSubmit}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
