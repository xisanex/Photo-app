import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface SignUpFormType{
  email:FormControl<string | null>;
  password:FormControl<string | null> 
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})


export class AuthComponent implements OnInit{
  isLoginMode = true;

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(){
    if(!this.signUpForm.valid){return}
    const email = this.signUpForm.value.email
    console.log(this.signUpForm.value)
    this.signUpForm.reset();
  }

  signUpForm: FormGroup<SignUpFormType> = new FormGroup<SignUpFormType>({
    email:new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  ngOnInit(): void {

  }
}
