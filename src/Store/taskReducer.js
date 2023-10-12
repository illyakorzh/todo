export const taskReducer = (state = [], action) => {
  if (action.type === 'TASK_ADD') {
    const { title, tasks } = action.data;
    const existingCategory = state.find(item => item.title === title);

    if (existingCategory) {
      existingCategory.tasks.push(...tasks);
    } else {
      const idTitle = (Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000).toString();
      state.push({ idTitle, title, tasks });
    }

  } else if (action.type === 'TASK_CHANGE_STATUS') {

    const { idTitle, id, completed } = action.data;
    const existCategory = state.find((item) => item.idTitle === idTitle);
    if (existCategory) {

      const taskToUpdate = existCategory.tasks.find((task) => task.id === id);

      if (taskToUpdate) {
        taskToUpdate.completed = completed;
      }
    }
  } else if (action.type === 'TASK_CHANGE_VALUE') {

    const { idTitle, id, description } = action.data;
    const existCategory = state.find((item) => item.idTitle === idTitle);

    if (existCategory) {
      const taskToUpdate = existCategory.tasks.find((task) => task.id === id);

      if (taskToUpdate) {
        taskToUpdate.description = description;
      }
    }
  } else if (action.type === 'TASK_DELETE') {
    const { idTitle, id } = action.data;
    const existCategory = state.find((item) => item.idTitle === idTitle);

    if (existCategory) {
      existCategory.tasks = existCategory.tasks.filter(item => item.id !== id);

      if (existCategory.tasks.length === 0) {
        state = state.filter(item => item.idTitle !== idTitle);

      }
    }

  }
  return [...state];
};

export const taskAdd = (data) => ({ type: 'TASK_ADD', data });

export const taskChangeStatus = (data) => ({ type: 'TASK_CHANGE_STATUS', data });
export const taskChangeValue = (data) => ({ type: 'TASK_CHANGE_VALUE', data });
export const taskDelete = (data) => ({ type: 'TASK_DELETE', data });



