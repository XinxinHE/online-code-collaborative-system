import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Problem } from 'app/data-structure/problem';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  Problem: Problem;
  constructor(
    private route: ActivatedRoute,
    @Inject('data') private data
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // + String convert to number
      //this.Problem = this.data.getProblem(+params['id']);
      this.data.getProblem(+params['id'])
        .then(problem => this.Problem = problem);
    });
  }
}
