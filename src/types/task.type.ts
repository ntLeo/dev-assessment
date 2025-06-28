// TODO: Define your Task interface and related types

// Hint: Based on requirements, each task should have:
// - id: string (unique identifier)
// - title: string (required)
// - description: string (optional)
// - completed: boolean
// - createdAt: Date or Timestamp
// - dueDate: Date or null (optional)
// - priority: 'Low' | 'Medium' | 'High' (optional)

export interface Task {
  // TODO: Define the Task interface properties here
}

export type Priority = 'Low' | 'Medium' | 'High';

export interface CreateTaskData {
  // TODO: Define the data structure for creating new tasks
  // This might be different from Task (e.g., no id, different timestamp handling)
}

export interface UpdateTaskData {
  // TODO: Define the data structure for updating tasks
  // This might be a partial Task interface
}

// TODO: Add any other types you might need for your application
export interface TaskFilters {
  // TODO: Define filters for tasks (e.g., completed status, priority)
}