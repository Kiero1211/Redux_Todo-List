import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { setTodoStatus } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, priority, completed }) {
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    dispatch(setTodoStatus({
      name,
      completed: !completed
    }));
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(completed && { opacity: 0.5, textDecoration: 'line-through' }),
      }}
    >
      <Checkbox checked={completed} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
