import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Task.module.css';
import { taskChangeStatus, taskDelete } from '../../Store/taskReducer';
import { ModalCorrecting } from '../ModalCorrecting/ModalCorrecting';

export const Task = ({ tasks }) => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const changeStatus = ({ idTitle, id, completed }) => {
    dispatch(taskChangeStatus({ idTitle, id, completed }));
  };

  return (<div className={s.wrapperTasks}>
    {tasks.map(({ idTitle, title, tasks }) => (<div key={idTitle} className={s.wrapperCategory}>
      <h2>{title}</h2>
      {tasks.map(({ id, description, completed }) => (<div
        key={id}
        className={s.wrapperTask}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input
          type="checkbox"
          checked={completed}
          className={s.checkbox}
          onChange={(e) => changeStatus({ idTitle, id, completed: e.target.checked })}
        />
        <span className={completed ? s.completed : ''}>{description}</span>
        <div className={s.wrapperImg}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-pencil-486-457775.png?f=webp&w=256"
            alt="pencil"
            onClick={() => {
              setData({ idTitle, id, description });
              setOpenModal(true);
            }}
          />
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/recycle-bin-3641041-3156438.png?f=webp&w=256"
            alt="basket"
            onClick={() => dispatch(taskDelete({ idTitle, id }))}
          />
        </div>
      </div>))}
    </div>))}
    <ModalCorrecting
      open={openModal}
      onClose={() => {
        setOpenModal(false);
        setData('');
      }}
      dataTask={data}

    />
  </div>);
};
