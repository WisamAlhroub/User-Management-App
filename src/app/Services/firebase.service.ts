import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user'
import { Observable } from 'rxjs';
import { imgLink } from 'src/assets/img/wisam_image_link';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private users: any[] = [];
  usersCollection: AngularFirestoreCollection<User>;
  dbUsers: Observable<any[]>;

  constructor(public db: AngularFirestore) {
    this.dbUsers = db.collection("users").valueChanges();

    this.dbUsers.subscribe(data => {
      this.users = data;
    });
    
    console.log(this.users);
  }

  getUsers() {
    this.users.forEach(element => {
      element['creationDate'] = new Date(element['creationDate']['seconds']);
    });
    return this.users;
  }

  setUsers(users: any) {
    this.users = users;
  }

  locateIndex(id): number {
    return this.users.findIndex(item => item['id'] == id);
  }
}
