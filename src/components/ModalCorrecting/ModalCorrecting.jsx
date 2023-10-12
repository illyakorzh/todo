import s from './ModalCorrecting.module.css';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { taskChangeValue } from '../../Store/taskReducer';

export const ModalCorrecting = ({ open, onClose, dataTask }) => {
  const dispatch = useDispatch();

  const {
    register, handleSubmit, reset, formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(taskChangeValue({
      idTitle: dataTask.idTitle, id: dataTask.id, description: data.description,
    }));
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
      <h2>Fix task</h2>
      <div className={s.modalRight}>
        <p className={s.closeBtn} onClick={onClose}>
          X
        </p>
        <form className={s.wrapperForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.wrapperInput}>
            <div>
              <input
                {...register('description', {
                  required: 'This field is required', pattern: {
                    value: /^[^ ].*$/, message: 'This field must start with no spaces',
                  },
                })}
                autoComplete="off"
                placeholder="Task"
              />
              {errors.description && <span>{errors.description.message} !</span>}
            </div>
            <button disabled={!isValid} type="submit" className={s.btnPrimary}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>);
};


