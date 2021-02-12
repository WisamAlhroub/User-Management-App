import { Injectable } from '@angular/core';
import { imgLink } from 'src/assets/img/wisam_image_link';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  users: any[] = [
    { id: 171054, name: 'Wisam', email: 'wis@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now(), image: imgLink },
    { id: 1, name: 'Ahmad', email: 'ahmad@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now(), image: imgLink },
    { id: 2, name: 'Ali', email: 'ali@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now(), image: imgLink },
    { id: 3, name: 'Maher', email: 'maher@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now(), image: imgLink },
    { id: 4, name: 'Amro', email: 'amro@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now(), image: imgLink },
    { id: 181054, name: 'Abd', email: 'abd@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now(), image: imgLink },
  ];

  locateIndex(id): number {
    return this.users.findIndex(item => item['id'] == id);
  }

  constructor() { }
}
