import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import logoTodo from './assets/logo.svg';
import clipboard from './assets/clipboard.svg';
import styles from './App.module.css';
import './global.css';
import { Tasks } from './components/Tasks';

interface Tasks {
  id: string;
  task: string;
  isCompleted: boolean;
}

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Tasks[]>([
    {
      id: uuidv4(),
      task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: true,
    },
  ]);

  const handleNewTask = () => {
    const createTask = {
      id: uuidv4(),
      task: newTask,
      isCompleted: false,
    };
    setTasks([...tasks, createTask]);
    setNewTask('');
  };

  const deleteTask = (id: string) => {
    const newArrayTask = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newArrayTask);
  };

  const changeTaskStatus = (id: string) => {
    console.log(`changeTaskStatus`);
    const newArrayTask = tasks.filter((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }

      return task;
    });
    console.log(newArrayTask);
    console.log(id, status);
    setTasks(newArrayTask);
  };

  const countTasksCompleted = () => {
    const count = tasks.reduce((sum, task) => {
      if (task.isCompleted) {
        sum++;
      }

      return sum;
    }, 0);

    return count;
  };

  const isEmpty = tasks.length === 0;
  const countTaks = tasks.length | 0;
  const taskCompletionProgress =
    tasks.length === 0 ? 0 : `${countTasksCompleted()} de ${countTaks}`;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logo} src={logoTodo} alt="logo todo" />
      </header>

      <div className={styles.newTask}>
        <input
          type="text"
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setNewTask(event?.target.value)}
        />
        <button onClick={handleNewTask}>
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
            <span className={styles.count}>{countTaks}</span>
          </div>

          <div>
            <span className={styles.doneTasks}>Concluídas</span>
            <span className={styles.count}>{taskCompletionProgress}</span>
          </div>
        </div>

        {isEmpty && (
          <div className={styles.noContent}>
            <div>
              <img src={clipboard} alt="" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}

        {tasks.map(({ task, id, isCompleted }) => (
          <Tasks
            key={id}
            task={task}
            id={id}
            isCompleted={isCompleted}
            onDeleteTask={deleteTask}
            onChangeTaskStatus={changeTaskStatus}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
