import {Component, Inject, OnInit} from '@angular/core';
import {Rst} from '../../../models/rst.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Review} from '../../../models/review.model.client';

@Component({
  selector: 'app-rst-page',
  templateUrl: './rst-page.component.html',
  styleUrls: ['./rst-page.component.css']
})
export class RstPageComponent implements OnInit {

  rst: Rst;
  reviews: Review[];

  constructor(
    @Inject('RstService') private rstService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.rstService.findRstById(params['rstid']).subscribe(
        (rst: Rst) => {
          this.rst = rst;
        }
      );
      this.reviewService.findReviewByRst(params['rstid']).subscribe(
        (reviews: Review[]) => {
          this.reviews = reviews;
        }
      )
    });
  }

}
