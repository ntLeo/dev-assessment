import React from 'react';
// TODO: Import your types
// import { Task, Priority } from '../types/task.type';

interface TaskCardProps {
  // TODO: Define props for individual task display
  // task: Task;
  // onToggleComplete: (taskId: string) => void;
  // onEdit: (taskId: string) => void;
  // onDelete: (taskId: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ /* props */ }) => {
  // TODO: Add state for edit mode, confirmation dialogs, etc.
  // const [isEditing, setIsEditing] = useState(false);
  // const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // TODO: Handle task completion toggle
  const handleToggleComplete = () => {
    // TODO: Call the onToggleComplete prop
  };

  // TODO: Handle edit mode
  const handleEdit = () => {
    // TODO: Implement edit functionality
    // This might open an inline form or call a parent function
  };

  // TODO: Handle delete with confirmation
  const handleDelete = () => {
    // TODO: Show confirmation dialog and call onDelete prop
  };

  // TODO: Format date display
  const formatDate = (date: Date | null): string => {
    // TODO: Format date for display
    // Handle null dates appropriately
    return date ? date.toLocaleDateString() : 'No due date';
  };

  // TODO: Determine if task is overdue
  const isOverdue = (): boolean => {
    // TODO: Check if task has a due date and is overdue
    return false;
  };

  // TODO: Get priority CSS class
  const getPriorityClass = (): string => {
    // TODO: Return CSS class based on task priority
    return '';
  };

  return (
    <div className={`task-card ${/* TODO: Add conditional classes */}`}>
      {/* TODO: Implement task card JSX */}
      {/* 
        Task card should show:
        1. Task title
        2. Task description (if any)
        3. Due date (if any) with overdue highlighting
        4. Priority indicator
        5. Completion status checkbox
        6. Edit and delete buttons
        7. Created date
      */}
      
      <div className="task-card-content">
        <h4>Sample Task Title</h4>
        <p>Implement the task card display here</p>
      </div>

      {/* TODO: Add task actions (complete, edit, delete) */}
      <div className="task-card-actions">
        {/* TODO: Add action buttons */}
      </div>

      {/* TODO: Add delete confirmation modal/dialog */}
      {/* {showDeleteConfirm && (
        <div className="delete-confirmation">
          // TODO: Confirmation dialog
        </div>
      )} */}
    </div>
  );
};

export default TaskCard;