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

  lat = 51.678418;
  lng = 7.809007;

  locationAcquiredFlag = false;

  constructor(
    @Inject('RstService') private rstService,
    @Inject('ReviewService') private reviewService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.rstService.findRstById(params['rstid']).subscribe(
        (rst: Rst) => {
          this.rst = rst;
          console.log(rst);
          this.lat = rst.coordinates.latitude.toNumber();
          this.lng = rst.coordinates.longitude.toNumber();
          console.log(this.lat);
          console.log(this.lng);
          this.locationAcquiredFlag = true;
        }
      );
      this.reviewService.findReviewsByRst(params['rstid']).subscribe(
        (reviews: Review[]) => {
          this.reviews = reviews;
        }
      );
    });
  }

}
