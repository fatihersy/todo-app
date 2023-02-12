import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  firestoreCollection: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore)
  {
    this.firestoreCollection = firestore.collection('todos');
  }

  addTodo(title: String)
  {
    this.firestoreCollection.add({
      title,
      isDone: false
    });
  }

  updateTodo(id:string, status:boolean){
    this.firestoreCollection.doc(id).update({isDone:status});
  }

  deleteTodo(id:string){
    this.firestoreCollection.doc(id).delete();
  }
}
