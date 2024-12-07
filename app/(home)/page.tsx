"use client";
import { useState } from "react";
import AddBtn from "../../components/addBtn";
import Input from "../../components/input";
import TodoBox from "../../components/todoBox";
import styles from "./Home.module.css";

export default function Home() {
  const [todoList, setTodoList] = useState([]); // 할 일 목록 상태
  const [inputValue, setInputValue] = useState(""); // 입력 값 상태

  // 입력값을 관리하는 함수
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 할 일을 추가하는 함수
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodoList([...todoList, inputValue]);
      setInputValue(""); // 추가 후 입력값 초기화
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.components}>
        <div className={styles.inputBox}>
          <Input value={inputValue} onChange={handleInputChange} />
          <AddBtn onClick={addTodo} />
        </div>

        {todoList.length === 0 ? (
          <div className={styles.todoBox}>
            <TodoBox
              title="TODO"
              svg="/img/todo.svg"
              description="할 일이 없어요.TODO를 새롭게 추가해주세요!"
            />
            <TodoBox
              title="DONE"
              svg="/img/done.svg"
              description="아직 다 한 일이 없어요. 해야 할 일을 체크해보세요!"
            />
          </div>
        ) : (
          <ul>
            {todoList.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
