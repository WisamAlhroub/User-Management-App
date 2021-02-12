import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { User } from '../../../models/user'
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    image: new FormControl('')
  });
  url: any;

  constructor(private router: Router, private dataService: FirebaseService) { }

  onSubmit() {
    const user = {
      id: this.dataService.users.length + 1,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      role: this.userForm.value.role,
      status: this.userForm.value.status,
      creationDate: Date.now(),
      image: this.url
    };

    this.dataService.users.push(user);

    this.router.navigate(['/users']);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target.result;
      }
    }
  }

  ngOnInit(): void {
  }
}
