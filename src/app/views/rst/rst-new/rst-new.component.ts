import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Rst} from '../../../models/rst.model.client';

@Component({
  selector: 'app-rst-new',
  templateUrl: './rst-new.component.html',
  styleUrls: ['./rst-new.component.css']
})
export class RstNewComponent implements OnInit {

  rst: Rst;

  constructor(
    @Inject('SharedService') private sharedService,
    @Inject('RstService') private rstService,
    private router: Router
  ) { }

  createBlog() {
    this.rstService.createRstForOwner(this.sharedService._id, this.rst)
      .subscribe((rst: Rst) => {
        this.rst = rst;
        this.router.navigate(['/rst/' + rst._id + '/page']);
      });
  }

  ngOnInit() {
    this.rst = this.rstService.dumpRst();
  }

}
