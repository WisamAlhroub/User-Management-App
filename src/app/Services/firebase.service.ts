import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user'
import { Observable } from 'rxjs';
import { imgLink } from 'src/assets/img/wisam_image_link';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  users: any[] = [];
  usersCollection: AngularFirestoreCollection<User>;
  dbUsers: Observable<User[]>;

  constructor(public AngularFirestore: AngularFirestore) {
    this.dbUsers = this.AngularFirestore.collection('users').valueChanges();
    this.dbUsers.subscribe(data => this.users = data);
    console.log('The data to be fetched is:');
    console.log(this.users);
  }

  getUsers() {
    return this.dbUsers;
  }

  locateIndex(id): number {
    return this.users.findIndex(item => item['id'] == id);
  }
}
