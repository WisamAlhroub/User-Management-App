import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user'
import { Observable } from 'rxjs';
import { imgLink } from 'src/assets/img/wisam_image_link';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // users: any[] = [
  //   { id: 171054, name: 'Wisam', email: 'wis@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
  //   { id: 171054, name: 'Ahmad', email: 'ahmad@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
  //   { id: 171054, name: 'Ali', email: 'ali@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
  //   { id: 171054, name: 'Maher', email: 'maher@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
  //   { id: 171054, name: 'Amro', email: 'amro@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
  //   { id: 171054, name: 'Abd', email: 'abd@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
  // ];

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(public AngularFirestore: AngularFirestore) {
    this.users = this.AngularFirestore.collection('users').valueChanges();
  }

  getUsers() {
    return this.users;
  }

  locateIndex(id): number {
    return this.users.findIndex(item => item['id'] == id);
  }
}
