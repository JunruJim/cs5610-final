import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {Faq} from '../../../models/faq.model.client';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {

  constructor(
    @Inject('FaqService') private faqService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  user: User;
  faqs: Faq[];


  ngOnInit() {
    this.user = this.sharedService.user;
    this.faqs = this.faqService.findALLFaqs()
      .subscribe(
        (faqs: Faq[]) => {
          this.faqs = faqs;
        }
      );
  }

}
