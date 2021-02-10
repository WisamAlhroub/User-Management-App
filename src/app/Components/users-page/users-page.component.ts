import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  term: string = '';
  users: any[] = this.dataService.users;

  constructor(private dataService: FirebaseService) { }

  ngOnInit(): void {
  }

}
