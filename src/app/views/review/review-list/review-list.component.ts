import {Component, Inject, OnInit} from '@angular/core';
import {Review} from '../../../models/review.model.client';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews: Review[] = [];

  constructor(
    @Inject('ReviewService') private reviewService,
    @Inject('SharedService') private sharedService,
  ) { }

  ngOnInit() {
    this.reviewService.findReviewsByUser(this.sharedService.user._id).subscribe(
      (reviews: Review[]) => {
        this.reviews = reviews;
      }
    );
  }

}
