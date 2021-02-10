import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  users: any[] = [
    { id: 171054, name: 'Wisam', email: 'wis@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
    { id: 171054, name: 'Ahmad', email: 'ahmad@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
    { id: 171054, name: 'Ali', email: 'ali@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
    { id: 171054, name: 'Maher', email: 'maher@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
    { id: 171054, name: 'Amro', email: 'amro@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
    { id: 171054, name: 'Abd', email: 'abd@wis.com', role: 'Employee', status: 'Single', creationDate: Date.now() },
  ];

  constructor() { }
}
