import s from "./Modal.module.css";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { useState } from 'react';
import { taskAdd } from '../../Store/taskReducer';

export const Modal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(1); // Move useState here

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {

    dispatch(taskAdd({
      title: data.title, tasks: [{
        id: id, description: data.description, completed: false
      }]
    }));
    setId(prevState => prevState + 1);
    reset();
  };

  if (!open) return null;
  return (<div onClick={onClose} className={s.overlay}>

    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={s.modalContainer}
    >
      <h2>Add task</h2>
      <div className={s.modalRight}>
        <p className={s.closeBtn} onClick={onClose}> X </p>
        <form className={s.wrapperForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.wrapperInput}>
            <div>
              <input {...register("title", {
                required: "This field is required", pattern: {
                  value: /^[^ ].*$/, message: "This field must start with no spaces"
                },

              })} autoComplete="off" placeholder="Title"
              />
              {errors.title?.message && <span>{errors.title?.message} !</span>}
            </div>
            <div>

              <input {...register("description", {

                required: "This field is required", pattern: {
                  value: /^[^ ].*$/, message: "This field must start with no spaces"
                },

              })} autoComplete="off" placeholder="Task"
              />
              {errors.description?.message && <span>{errors.description?.message} !</span>}
            </div>
            <button type="submit" className={s.btnPrimary}>Send</button>
          </div>

        </form>

      </div>
    </div>
  </div>);
};
