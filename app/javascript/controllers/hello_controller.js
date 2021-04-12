// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus";
import axios from 'axios';

export default class extends Controller {
  static targets = ["name"];

  async connect() {
    this.nameTarget.value = "hello example";
    const data = await axios.get('/posts.json').then((res) => res.data);
    console.log(data);
  }

  async greet() {
    console.log(`hello ${this.name}!`);
    const data = await axios.get('/posts.json').then((res) => res.data);
    console.log(data);
    this.nameTarget.value = data[0].id;
  }

  get name() {
    return this.nameTarget.value;
  }
}
