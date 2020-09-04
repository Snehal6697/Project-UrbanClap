import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private modalService: NgbModal) { }
  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }
  logout() {

    // sessionStorage.removeItem('sid')
    // this.router.navigate(['login'])
    this.modalService.open(LogoutComponent, { centered: true });
  }
  dedelogout() {

  }

}
