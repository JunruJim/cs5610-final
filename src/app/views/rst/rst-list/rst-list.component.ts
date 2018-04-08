import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rst-list',
  templateUrl: './rst-list.component.html',
  styleUrls: ['./rst-list.component.css']
})
export class RstListComponent implements OnInit {

  // use Inject instead of import
  constructor(
    @Inject('UserService') private userService,
    @Inject('SharedService') private sharedService,
    private router: Router
  ) {}



  ngOnInit() {

  }

}
