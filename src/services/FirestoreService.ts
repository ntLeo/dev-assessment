// TODO: Import Firebase dependencies
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
// import { Task, CreateTaskData, UpdateTaskData } from '../types/task.type';

// TODO: Initialize Firebase (you'll need to set up your config)
// const firebaseConfig = {
//   // Your Firebase config goes here
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export class FirestoreService {
  private static instance: FirestoreService;
  // TODO: Add your Firestore database reference here
  
  private constructor() {
    // TODO: Initialize your Firestore connection
    // Make sure to handle environment variables from .env file
  }

  public static getInstance(): FirestoreService {
    if (!FirestoreService.instance) {
      FirestoreService.instance = new FirestoreService();
    }
    return FirestoreService.instance;
  }

  // TODO: Implement CRUD operations
  
  async createTask(taskData: CreateTaskData): Promise<string> {
    // TODO: Add a new task to Firestore
    // Return the document ID of the created task
    throw new Error('Method not implemented');
  }

  async getAllTasks(): Promise<Task[]> {
    // TODO: Fetch all tasks from Firestore
    // Consider ordering by creation date
    throw new Error('Method not implemented');
  }

  async updateTask(taskId: string, updateData: UpdateTaskData): Promise<void> {
    // TODO: Update an existing task in Firestore
    throw new Error('Method not implemented');
  }

  async deleteTask(taskId: string): Promise<void> {
    // TODO: Delete a task from Firestore
    throw new Error('Method not implemented');
  }

  // TODO: Add any additional methods you might need
  // Examples:
  // - getTasksByStatus(completed: boolean)
  // - getTasksByPriority(priority: Priority)
  // - searchTasks(searchTerm: string)
}

// Export a singleton instance
export const firestoreService = FirestoreService.getInstance();