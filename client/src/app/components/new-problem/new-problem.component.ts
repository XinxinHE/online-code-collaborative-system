import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from 'app/data-structure/problem';

const DEFAULT_PROBLEM: Problem = Object.freeze({
  id: 0,
  name: '',
  desc: '',
  difficulty: 'easy'
})     // freeze: always return to default value after submitting

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);  
  // Create a shallow copy, otherwise problem cannot be changed because of freeze
  
  difficulties: String[] = ['easy', 'medium', 'hard', 'super'];

  constructor(@Inject('data') private data) { }

  ngOnInit() {
  }

  addProblem() {
    this.data.addProblem(this.newProblem)
      .catch(error => console.log(error.body));
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }

}
