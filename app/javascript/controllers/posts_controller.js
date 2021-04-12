import {Controller} from 'stimulus';
import axios from 'axios';


export default class extends Controller {
  static targets = ['posts'];
  static values = { count: Number };

  connect() {
    console.log(this.countValue);
  }

  linkTo(event) {
    event.preventDefault();
    window.location.href = event.currentTarget.dataset['href'];
  }

  delete(event) {
    event.preventDefault();
    this.countValue--;
    this.postsTargets.forEach((elem, i) => {
      elem.hidden = i !== this.countValue
    })
  }
}
