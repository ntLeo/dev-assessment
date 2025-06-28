# Junior Developer Assessment - Task Management APP

## Project Overview
Build a task management application using React, TypeScript, and Firebase Firestore. This assessment evaluates your ability to work with modern web technologies and implement CRUD operations.

## Tech Stack
- React 18 with TypeScript
- Vite for build tooling
- Firebase Firestore for data persistence
- CSS Modules or styled-components for styling

## Core Requirements

### Day 1 Tasks
1. **Project Setup & Basic Structure**
   - Initialize the React app with proper TypeScript configuration
   - Set up Firebase Firestore connection
   - Create the basic component structure

2. **Task Data Model**
   - Define TypeScript interfaces for Task entities
   - Implement proper type definitions in `src/types/task.type.ts`

3. **Create Task Functionality**
   - Build a form component to add new tasks
   - Implement form validation (title required, description optional, due date)
   - Save tasks to Firestore

### Day 2 Tasks
4. **Display Tasks**
   - Fetch tasks from Firestore
   - Display tasks in a clean, organized list
   - Show task details (title, description, status, due date)

5. **Update Task Status**
   - Implement toggle functionality for task completion
   - Allow editing of task details
   - Update tasks in Firestore

6. **Delete Tasks**
   - Add delete functionality with confirmation
   - Remove tasks from Firestore

### Day 3 Tasks (Bonus)
7. **Enhanced Features**
   - Add task filtering (all, completed, pending)
   - Implement task search functionality
   - Add due date highlighting for overdue tasks

8. **UI/UX Improvements**
   - Responsive design
   - Loading states
   - Error handling and user feedback
   - Material UI implementation

## Task Properties
Each task should have:
- `id`: Unique identifier
- `title`: Task title (required)
- `description`: Task description (optional)
- `completed`: Boolean status
- `createdAt`: Timestamp
- `dueDate`: Optional due date
- `priority`: Low, Medium, High (optional)

## File Structure Tasks
Complete the following files (skeleton code provided):

1. **`src/types/task.type.ts`** - Define Task interface
2. **`src/services/FirestoreService.ts`** - Implement Firestore CRUD operations
3. **`src/hooks/useTasks.ts`** - Custom hook for task management
4. **`src/components/TaskForm.tsx`** - Form component for creating/editing tasks
5. **`src/components/TaskList.tsx`** - List component to display tasks
6. **`src/components/TaskCard.tsx`** - Individual task item component
7. **`src/utils/firestoreDate.ts`** - Utility functions for date handling

## Constraints & Guidelines
- Use functional components with hooks
- Implement proper error handling
- Add loading states for async operations
- Write clean, readable code with proper TypeScript types
- Use semantic HTML and accessible design
- Material UI is allowed and encouraged (aligns with project standards)

## Submission Requirements
- Working application with all CRUD operations
- Clean, commented code
- Responsive design
- Error handling implementation
- README with setup instructions