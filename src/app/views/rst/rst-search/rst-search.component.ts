import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {User} from '../../../models/user.model.client';
import {Rst} from '../../../models/rst.model.client';

@Component({
  selector: 'app-rst-search',
  templateUrl: './rst-search.component.html',
  styleUrls: ['./rst-search.component.css']
})
export class RstSearchComponent implements OnInit {

  latitude: String;
  longitude: String;
  searchText: String;
  searchResults;
  user: User;

  loadingGeoFlag: Boolean = false;
  loadingGeoMsg: String = 'loading location...';

  // use maximumAge to tell browser use the data recently queried
  // use timeout to set maximum waiting time
  geoOptions = {
    maximumAge: 5 * 60 * 1000,
    timeout: 60 * 1000,
    // enableHighAccuracy: false

  };

  constructor(
    @Inject('YelpSearchService') private yelpSearchService,
    @Inject('SharedService') private sharedService,
    @Inject('RstService') private rstService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  searchRst() {
    this.yelpSearchService.searchRst(this.latitude, this.longitude, this.searchText).subscribe(
      (data: any) => {
        this.searchResults = data;
        console.log(this.searchResults);
      }
    );
  }

  selectRst(rst) {
    this.rstService.createRstWithoutOwner(rst).subscribe(
      (data: Rst) => {
        const rstId = data._id;
        this.router.navigate(['../rst/' + rstId + '/page'], {relativeTo: this.activatedRoute});
      }
    );
  }


  ngOnInit() {
    this.user = this.sharedService.user;
    // get current location
    if (navigator.geolocation) {
      this.loadingGeoFlag = true;
<<<<<<< HEAD
      console.log('waiting');
=======
      console.log('loading location');
      this.latitude = '47.622611';
      this.longitude = '-122.338192';
>>>>>>> e992f02f1d3904a68ba9aab70eecc8e4545d2de9
      navigator.geolocation.watchPosition(
        (position: any) => {
          this.loadingGeoFlag = false;
          console.log('location acquired');
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        }, (err: any) => {

          // error.code can be:
          //   0: unknown error
          //   1: permission denied
          //   2: position unavailable (error response from location provider)
          //   3: timed out
          console.log(err);
          this.loadingGeoFlag = false;
          alert('Error occurs when acquiring your position so we use Seattle location');
        }, this.geoOptions);
    } else {
      this.loadingGeoFlag = false;
      alert('Location disabled');
    }
  }

}
