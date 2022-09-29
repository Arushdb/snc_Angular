import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { AuthService } from 'src/app/services/auth.service';

type MyType = {
  displayname: string;
  route: string;
  children: MyType;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id: string;
title = 'SNC Dayalbagh AGRA';
  public menus: MyType[] = [];
constructor(private router: Router, public authService: AuthService,
            // tslint:disable-next-line: variable-name
            public _activatedRoute: ActivatedRoute) { }

// tslint:disable-next-line: typedef
ngOnInit() {
  this.id = localStorage.getItem('username');
  // console.log(this.id);

  // console.log(this.router.getCurrentNavigation());

  // this.state$ = this.activatedRoute.paramMap
      // .pipe(map(() => {
      //   console.log("Hello in dasshboard ngoninit method");
      //   console.log(window.history.state);
      // }
      // ));
  const data = null;
  this._activatedRoute.queryParams.subscribe(params => {
        // console.log(params.menus);

        this.menus = JSON.parse(params.menus);
        // this.menus.push(data);
        // let mymenu = params["menu"];
        // this.menus.push(data);
        // console.log(this.menus);
      });
}
// tslint:disable-next-line: typedef
logout() {
  // console.log('logout in dashboard');
  this.authService.logout();
  this.router.navigate(['/login']);
}




}
