export class Rst {
  _id: String;
  name: String;
  categories;
  content: String;
  rating: number;
  review_count: number;
  locaiton;
  image_url: String;
  price: String;
  dateCreated: String;

  constructor(_id: String, name: String) {
    this._id = _id;
    this.name = name;
  }
}
