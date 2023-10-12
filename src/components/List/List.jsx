import React, { useEffect, useState } from 'react';
import s from './List.module.css';
import { Task } from '../Task/Task';
import { Modal } from '../Modal/Modal';
import { useSelector } from 'react-redux';

export const List = () => {
  const [openModal, setOpenModal] = useState(false);
  const tasks = useSelector((state1) => state1.taskReducer);
  const [filteredState, setFilteredState] = useState(tasks);

  useEffect(() => {
    setFilteredState(tasks);
  }, [tasks]);

  const completed = () => {
    const filteredTasks = tasks.map(item => ({
      ...item, tasks: item.tasks.filter(task => task.completed === true)
    }));
    const filteredGroup = filteredTasks.filter(item => item.tasks.length !== 0);
    setFilteredState(filteredGroup);

  };

  const uncompleted = () => {
    const filteredTasks = tasks.map(item => ({
      ...item, tasks: item.tasks.filter(task => task.completed !== true)
    }));
    const filteredGroup = filteredTasks.filter(item => item.tasks.length !== 0);
    setFilteredState(filteredGroup);
  };

  const showAll = () => {
    setFilteredState(tasks);
  };

  return (<div className={s.wrapperList}>
      <h1>Todo List</h1>
      <Task tasks={filteredState} />
      <label className={s.plusWrapper}>
        <div className={s.plus}>+</div>
        <button onClick={() => setOpenModal(true)} className={s.modalButton}>
          Modal
        </button>
      </label>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className={s.buttonWrapper}>
        <button onClick={() => showAll()}>all</button>
        <button onClick={() => completed()}>completed</button>
        <button onClick={() => uncompleted()}>uncompleted</button>
      </div>
    </div>);
};
