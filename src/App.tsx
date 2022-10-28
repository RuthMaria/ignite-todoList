import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import logoTodo from './assets/logo.svg';
import clipboard from './assets/clipboard.svg';
import styles from './App.module.css';
import './global.css';
import { Tasks } from './components/Tasks';

const tasks = [
  {
    id: 'task 1',
    task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 'task 2',
    task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 'task 3',
    task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
];

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logo} src={logoTodo} alt="logo todo" />
      </header>

      <div className={styles.newTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          <div>
            <span>Criar</span>
            <PlusCircle size={20} />
          </div>
        </button>
      </div>

      <main className={styles.main}>
        <div className={styles.tasks}>
          <div>
            <span className={styles.allTasks}>Tarefas criadas</span>
            <span className={styles.count}>0</span>
          </div>

          <div>
            <span className={styles.doneTasks}>Concluídas</span>
            <span className={styles.count}>2 de 5</span>
          </div>
        </div>

        <div className={styles.noContent}>
          <div>
            <img src={clipboard} alt="" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>

        {tasks.map(({ task, id }) => (
          <Tasks task={task} id={id} />
        ))}
      </main>
    </div>
  );
}

export default App;
