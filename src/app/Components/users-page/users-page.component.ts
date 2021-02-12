import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { User } from '../../models/user'
@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  term: string = '';
  users: User[];

  constructor(private dataService: FirebaseService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users;
    })
  }

}
