import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './components/AddTaskForm/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
          <Route path="/add-task" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
