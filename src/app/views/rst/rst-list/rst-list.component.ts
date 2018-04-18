import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {Rst} from '../../../models/rst.model.client';

@Component({
  selector: 'app-rst-list',
  templateUrl: './rst-list.component.html',
  styleUrls: ['./rst-list.component.css']
})
export class RstListComponent implements OnInit {

  // restaurant list for current user
  rsts: Rst[] = [];

  // use Inject instead of import
  constructor(
    @Inject('RstService') private rstService,
    @Inject('UserService') private userService,
    @Inject('SharedService') private sharedService,
    private router: Router
  ) {}

  ngOnInit() {

    // get all restaurants if the current user is 'admin'
    if (this.sharedService.userType === String('admin')) {
      this.rstService.findAllRsts().subscribe(
        (rsts: Rst[]) => {
          this.rsts = rsts;
        }
      );
    }

    // get restaurants for current 'owner'
    else {
      this.rstService.findRstsByUser(this.sharedService.user._id).subscribe(
        (rsts: Rst[]) => {
          this.rsts = rsts;
        }
      );
    }
  }

}
