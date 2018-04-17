import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {Rst} from '../../../models/rst.model.client';

@Component({
  selector: 'app-rst-list',
  templateUrl: './rst-list.component.html',
  styleUrls: ['./rst-list.component.css']
})
export class RstListComponent implements OnInit {

  rsts: Rst[] = [];

  // use Inject instead of import
  constructor(
    @Inject('RstService') private rstService,
    @Inject('UserService') private userService,
    @Inject('SharedService') private sharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.rstService.findRstsByUser(this.sharedService.user._id).subscribe(
      (rsts: Rst[]) => {
        this.rsts = rsts;
      }
    );
  }

}
