import { Trash } from 'phosphor-react';
import React from 'react';

import styles from './Tasks.module.css';

interface PropsTasks {
  task: string;
  id: string;
}

export const Tasks: React.FC<PropsTasks> = ({ task, id }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tasks}>
        <input className={styles.radio} type="radio" id={id} /> 
        <label htmlFor={id}>{task}</label>
      </div>
      <button className={styles.deleteTasks} title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  );
};
