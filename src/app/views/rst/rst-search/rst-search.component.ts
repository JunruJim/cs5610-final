import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-rst-search',
  templateUrl: './rst-search.component.html',
  styleUrls: ['./rst-search.component.css']
})
export class RstSearchComponent implements OnInit {

  latitude: String;
  longitude: String;
  searchText: String;
  searchResults: any[];
  user: User;

  loadingGeoFlag: Boolean = false;
  loadingGeoMsg: String = 'loading location...';

  // use maximumAge to tell browser use the data recently queried
  // use timeout to set maximum waiting time
  geoOptions = {
    maximumAge: 5 * 60 * 1000,
    timeout: 30 * 1000,
    enableHighAccuracy: false
  };

  constructor(
    @Inject('YelpSearchService') private yelpSearchService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  searchRst() {
    this.yelpSearchService.searchRst(this.latitude, this.longitude, this.searchText).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }
  ngOnInit() {

    // get current location
    if (navigator.geolocation) {
      this.loadingGeoFlag = true;

      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          this.loadingGeoFlag = false;
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
          alert('Error occurs when acquiring your position');
        }, this.geoOptions);
    } else {
      this.loadingGeoFlag = false;
      alert('Location disabled');
    }
  }

}
