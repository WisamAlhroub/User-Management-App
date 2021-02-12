import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  idElementNum: number = 0;
  term: string = '';
  users: any[] = this.dataService.users;

  constructor(private dataService: FirebaseService, private router: Router) { }

  onEdit(id: any) {
    this.router.navigate([`/users/add-edit/${id}`]);
  }

  onDelete(id: any) {
    this.dataService.users.splice(this.dataService.locateIndex(id), 1);
  }

  ngOnInit(): void {
  }

}
