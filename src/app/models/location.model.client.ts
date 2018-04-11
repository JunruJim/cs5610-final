export class Location {
  city: String;
  country: String;
  address1: String;
  address2: String;
  state: String;
  zip_code: number;

  constructor(city: String, country: String, address1: String, address2: String, state: String, zip_code: number) {
    this.city = city;
    this.country = country;
    this.address1 = address1;
    this.address2 = address2;
    this.state = state;
    this.zip_code = zip_code;
  }
}
