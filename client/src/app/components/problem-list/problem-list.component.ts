import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from 'app/data-structure/problem';
import { CollaborationService } from '../../services/collaboration.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[] = [];
  problemsAndRooms: any; // problemId -> roomId
  constructor(private collaboration: CollaborationService,
              @Inject('data') private dataService) { }

  ngOnInit() {
    this.getProblems();
    this.getProblemsAndRooms();
  }

  getProblems(): void {
    //this.problems = this.dataService.getProblems(); 
    this.dataService.getProblems()
      .subscribe(problems => {
        this.problems = problems
      });
  }

  getProblemsAndRooms(): void {
    this.collaboration.init()
      .subscribe(value => {
        this.problemsAndRooms = value;
        console.dir( this.problemsAndRooms);      
      });
  }
}
