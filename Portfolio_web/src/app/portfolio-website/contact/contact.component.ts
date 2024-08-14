import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  userForm:any;
  //submitMessage: string = '';
  showNotification = false;
  showErrorNotification = false;

  constructor(public formbuilder:FormBuilder){

  }

  ngOnInit(){
    this.userForm = this.formbuilder.group({
      name: [null, Validators.required],  // Required validator
      email: [null, [Validators.required, Validators.email]],  // Required and email validators
      message: [null],
    });
  }

  onSubmit(){
    if (this.userForm.invalid) {
      this.showErrorNotification = true;
      setTimeout(() => {
        this.showErrorNotification = false;
      }, 3000); // Hiển thị thông báo lỗi trong 3 giây
      return;
    }

    console.log("Form Submitted", this.userForm.value);

    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000); // Hiển thị thông báo thành công trong 3 giây
  }
}
