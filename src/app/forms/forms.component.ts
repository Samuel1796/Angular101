import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Auth={
  username: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  user: Auth = {
    username: '',
    password: '',
    email: ''
  };
onSubmit(){
  console.log("working");
  console.log(this.user)
}
}
