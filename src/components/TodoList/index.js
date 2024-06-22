import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import { todoListSelector } from '../../redux/selectors';

export default function TodoList() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const inputRef = useRef();
  const dispatch = useDispatch();

  const todos = useSelector(todoListSelector);

  const handleSubmit = () => {
    dispatch(addTodo(
      {
        id: uuidv4(),
        name,
        completed: false,
        priority
      }
    ))
    setName("");
    setPriority("Medium");
    inputRef.current.focus();
  }


  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todos.map((todo, index) => <Todo key={index} name={todo.name} priority={todo.priority}></Todo>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange={(e) => setName(e.target.value)} ref={inputRef} value={name} />
          <Select defaultValue="Medium" onChange={(value) => setPriority(value)} value={priority}>
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
