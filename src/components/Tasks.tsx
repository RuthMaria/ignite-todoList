import { Trash } from 'phosphor-react';
import React, { ChangeEvent, useState } from 'react';

import styles from './Tasks.module.css';

interface PropsTasks {
  task: string;
  id: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
  onChangeTaskStatus: (id: string) => void;
}

export const Tasks: React.FC<PropsTasks> = ({
  task,
  id,
  isCompleted,
  onDeleteTask,
  onChangeTaskStatus,
}) => {
  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  const handleChangeTaskStatus = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeTaskStatus(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tasks}>
        <input
          checked={isCompleted}
          className={styles.radio}
          type="Checkbox"
          id={id}
          onChange={handleChangeTaskStatus}
        />
         <label htmlFor={id}>{task}</label>
      </div>

      <button
        onClick={handleDeleteTask}
        className={styles.deleteTasks}
        title="Deletar tarefa"
      >
        <Trash size={24} />
      </button>
    </div>
  );
};
