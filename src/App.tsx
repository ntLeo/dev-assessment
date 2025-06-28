import './App.css';

// TODO: Import your components here
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Developer Assessment</h1>
      </header>
      
      <main className="app-main">
        {/* TODO: Implement your main application layout here */}
        {/* 
          Suggested structure:
          1. TaskForm component for creating new tasks
          2. TaskList component for displaying tasks
          3. Add any filtering/search components
        */}
        
        <div className="task-container">
          <h2>Welcome to the Task App!</h2>
          <p>Start by implementing the TaskForm and TaskList components.</p>
        </div>
      </main>
    </div>
  );
}

export default App;