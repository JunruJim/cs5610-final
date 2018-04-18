import {Component, Inject, OnInit} from '@angular/core';
import {Rst} from '../../../models/rst.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-rst-edit',
  templateUrl: './rst-edit.component.html',
  styleUrls: ['./rst-edit.component.css']
})
export class RstEditComponent implements OnInit {

  rst: Rst;

  constructor(
    @Inject('RstService') private rstService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  updateRst() {
    this.rstService.updateRst(this.rst._id, this.rst).subscribe(
      (rst: Rst) => {
        this.router.navigate(['/rst']);
      }
    );
  }

  deleteRst() {
    this.rstService.deleteRst(this.rst._id).subscribe(
      () => {
        this.router.navigate(['/rst']);
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.rstService.findRstById(params['rstid']).subscribe(
        (rst: Rst) => {
          this.rst = rst;
        }
      );
    });
  }

}
