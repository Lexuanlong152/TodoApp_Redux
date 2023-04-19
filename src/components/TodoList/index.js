import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../../redux/action";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";
import { todoIncludeSelector } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const RefName = useRef();

  // const filterStatusSelector = useSelector(statusSelector);
  // const searchText = useSelector(searchTextSelector);
  const todoList = useSelector((state) => todoIncludeSelector(state));

  // console.log({ todoList });
  // console.log(searchText);

  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(
      addAction({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );
    setTodoName("");
    setPriority("Medium");
    RefName.current.focus();
  };

  const handleInputChange = (e) => {
    // console.log('handlechange', e.target.value)
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    // console.log(value);
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {
          /* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */
          todoList.map((todo, index) => (
            <Todo
              key={index}
              id={todo.id}
              name={todo.name}
              prioriry={todo.priority}
              completed={todo.completed}
            />
          ))
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input ref={RefName} value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleClickAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
