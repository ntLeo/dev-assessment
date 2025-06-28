import React from 'react';
// TODO: Import your types and hooks
// import { CreateTaskData, Priority } from '../types/task.type';

interface TaskFormProps {
  // TODO: Define props for the form component
  // onSubmit?: (taskData: CreateTaskData) => void;
  // onCancel?: () => void;
  // initialData?: Partial<CreateTaskData>; // For editing mode
}

const TaskForm: React.FC<TaskFormProps> = ({ /* props */ }) => {
  // TODO: Define form state
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [dueDate, setDueDate] = useState('');
  // const [priority, setPriority] = useState<Priority>('Medium');
  // const [errors, setErrors] = useState<{[key: string]: string}>({});

  // TODO: Implement form validation
  const validateForm = (): boolean => {
    // TODO: Validate required fields and format
    // Set error messages for invalid fields
    // Return true if form is valid
    return false;
  };

  // TODO: Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Validate form and call onSubmit prop
  };

  // TODO: Handle form reset
  const handleReset = () => {
    // TODO: Clear all form fields
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      {/* TODO: Implement your form JSX here */}
      {/* 
        Form should include:
        1. Title input (required)
        2. Description textarea (optional)
        3. Due date input (optional)
        4. Priority select (optional)
        5. Submit and Cancel buttons
        6. Error message display
      */}
      
      <div className="form-group">
        <h3>Create New Task</h3>
        <p>Implement the form fields here</p>
      </div>

      {/* TODO: Add form fields */}
      
      <div className="form-actions">
        {/* TODO: Add submit and cancel buttons */}
      </div>
    </form>
  );
};

export default TaskForm;