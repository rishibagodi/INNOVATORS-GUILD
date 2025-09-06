import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit 
} from 'firebase/firestore';
import { db } from './firebase';

// Generic CRUD operations for Firestore
export const firestoreService = {
  // Create a new document
  async create(collectionName, data) {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      return docRef.id;
    } catch (error) {
      console.error('Error creating document:', error);
      throw error;
    }
  },

  // Read all documents from a collection
  async getAll(collectionName) {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting documents:', error);
      throw error;
    }
  },

  // Read a single document by ID
  async getById(collectionName, id) {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error getting document:', error);
      throw error;
    }
  },

  // Update a document
  async update(collectionName, id, data) {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data);
      return true;
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  },

  // Delete a document
  async delete(collectionName, id) {
    try {
      await deleteDoc(doc(db, collectionName, id));
      return true;
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  },

  // Query documents with conditions
  async query(collectionName, conditions = [], orderByField = null, limitCount = null) {
    try {
      let q = collection(db, collectionName);
      
      // Apply where conditions
      conditions.forEach(condition => {
        q = query(q, where(condition.field, condition.operator, condition.value));
      });
      
      // Apply ordering
      if (orderByField) {
        q = query(q, orderBy(orderByField));
      }
      
      // Apply limit
      if (limitCount) {
        q = query(q, limit(limitCount));
      }
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error querying documents:', error);
      throw error;
    }
  }
};
