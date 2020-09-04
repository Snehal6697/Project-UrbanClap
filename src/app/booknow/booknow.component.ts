import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  public fbFormGroup = this.fb.group({
    name: ['', Validators.required,],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    location: ['', Validators.required],
    service: ['', Validators.required],

  });
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  async booknow() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3200/conuser";
    const result = await this.http.post(url, data).toPromise();
    console.log(result);
    this.router.navigate(['home']);
    this.fbFormGroup.reset();
  }
}
