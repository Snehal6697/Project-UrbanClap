import { Component, OnInit } from '@angular/core';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  public Facebook = faFacebook;
  public Google = faGoogle;
  public Linkedin = faLinkedin;
  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }
  async submit() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3200/updatedata";
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr)
      console.log(result);
    this.router.navigate(['login']);
    this.fbFormGroup.reset();
  }

}
