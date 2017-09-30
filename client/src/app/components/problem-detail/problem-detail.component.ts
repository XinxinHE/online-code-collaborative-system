import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Problem } from 'app/data-structure/problem';
import { CollaborationService } from '../../services/collaboration.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  Problem: Problem;
  problemId: string;
  roomId: string;
  name: string;
  constructor(
    private collaboration: CollaborationService,
    private route: ActivatedRoute,
    @Inject('data') private data,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // + String convert to number
      this.problemId = params['id'];
      this.roomId = params['roomId'];
      this.name = params['name'];
      this.collaboration.initCollaborationSocket(this.problemId, this.roomId, this.name);

      this.data.getProblem(+params['id'])
        .then(problem => this.Problem = problem);
    });
  }
}
