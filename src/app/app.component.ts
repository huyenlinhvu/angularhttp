import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularhttp';
  
  private user: any =  {
    'id' : 2,
    'name':'Test Patching Name',
    'username':'Patch',
    'email':'Patch@april.biz'
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.onGetUsers();
    // this.onGetUser();
    // this.onCreateUser();
    // this.onUpdateUser();
    // this.onPatchUser();
    this.onDeleteUser();
    
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users'),
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting user'),
    );
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user'),
    );
  }

  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done updating user'),
    );
  }

  onPatchUser(): void {
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done patching user'),
    );
  }

  onDeleteUser(): void {
    this.userService.deleteUser(5).subscribe(
      (response) => console.log('response from delete: ', response),
      (error: any) => console.log(error),
      () => console.log('Done deleting user'),
    );
  }

  onUploadFile(files: File[]): void {
    console.log(files);
    const formData = new FormData;
    for(const file of files) {
      formData.append('files', file, file.name);
    }
    this.userService.uploadFiles(formData).subscribe(
        (event) => {
          switch(event.type) {
            case HttpEventType.UploadProgress || HttpEventType.DownloadProgress:
              console.log(event);
              break;
            case HttpEventType.Response:
              console.log(event);
              break;
          }
        },
      (error: any) => console.log(error),
      () => console.log('Done deleting user'),
    );
  }
}
