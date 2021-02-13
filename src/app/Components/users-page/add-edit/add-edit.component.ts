import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { User } from '../../../models/user'
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  id: any = parseInt(this.route.snapshot.paramMap.get('id'));
  tempUser = this.checkForData(this.id); 
  userForm = new FormGroup({
    id: new FormControl('', [Validators.maxLength(99999), Validators.required]),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private dataService: FirebaseService, private route: ActivatedRoute) { }

  onSubmit() {
    if (this.id == -1) {
      const user = {
        id: this.dataService.value.id,
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        role: this.userForm.value.role,
        status: this.userForm.value.status,
        creationDate: Date.now(),
        image : this.tempUser['image']
      };

      this.dataService.users.push(user);
    }
    else {
      this.dataService.users[this.dataService.locateIndex(this.id)] = this.tempUser;
    }

    this.router.navigate(['/users']);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.tempUser['image'] = event.target.result;
      }
    }
  }

  isExistingBefore(id: any): boolean {
    if (id == -1) {
      return true;
    }

    this.dataService.users.forEach(element => {
      if (element['id'] == id) {
        return true;
      }
    });

    return false;
  }

  checkForData(id: number) {
    if(id != -1) {
      let indexForUserToBeUpdated: number = this.dataService.locateIndex(id);
      console.log(`The index of object to be located is: ${indexForUserToBeUpdated}`);

      let userToBeUpdated: any = this.dataService.users[indexForUserToBeUpdated];

      console.log('The data to be updated is: ');
      console.log(userToBeUpdated);

      return userToBeUpdated;
    }
    else {
      console.log('returned an empty userTemp!');
      return {
        id: '',
        name: '',
        email: '',
        role: '',
        status: '',
        image: null,
        creationDate: null
      };
    }
  }

  ngOnInit(): void {
    console.log('The tempUser is: ');
    console.log(this.tempUser);
    console.log(`The id is: ${this.id}`);
  }
}
