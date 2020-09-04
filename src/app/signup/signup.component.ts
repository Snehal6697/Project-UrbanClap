import { Component, OnInit } from '@angular/core';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public Facebook = faFacebook;
  public Google = faGoogle;
  public Linkedin = faLinkedin;

  public fbFormGroup = this.fb.group({
    name: ['', Validators.required,],
    email: ['', Validators.required],
    password: ['', Validators.required],

  });
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  async signup() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3200/adduser";
    const result = await this.http.post(url, data).toPromise();
    console.log(result);
    this.router.navigate(['login']);
    this.fbFormGroup.reset();
  }
}
