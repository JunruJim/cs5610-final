export class Faq {
  _id: String;
  question: String;
  followups: any[];
  dateCreated: String;

  constructor(_id: String, question: String) {
    this._id = _id;
    this.question = question;
  }
}
