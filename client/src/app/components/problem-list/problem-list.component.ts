import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Problem } from 'app/data-structure/problem';
import { CollaborationService } from '../../services/collaboration.service';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})

export class ProblemListComponent implements OnInit {
  problems: Problem[] = [];
  problemsAndRooms: any; // problemId -> roomIndex -> roomId
  problemId: string;
  roomId: string;
  name: string = '';
  constructor(private collaboration: CollaborationService,
              @Inject('data') private dataService,
              private router: Router,
              private elementRef: ElementRef) { }

  ngOnInit() {
    this.getProblems();
    this.collaboration.initSocket();
    this.getProblemsAndRooms();
  }

  getProblems(): void {
    //this.problems = this.dataService.getProblems(); 
    this.dataService.getProblems()
      .subscribe(problems => {
        this.problems = problems;
        //console.log("----------------------");
        //console.dir(this.problems); 
      });
  }

  getProblemsAndRooms(): void {
    this.collaboration.getProblemsAndRooms()
      .subscribe(value => {
        this.problemsAndRooms = value;
        console.dir(this.problemsAndRooms);      
      });
  }

  newRoom(problemId: string) {
    $(function () {
      $('#myModal').modal();
    });
    
    this.problemId = problemId;
    if (!this.problemsAndRooms[problemId] || this.problemsAndRooms[problemId].length === 0) {
      this.roomId = '0';
    } else {
      const roomLength = this.problemsAndRooms[problemId].length;
      this.roomId = (parseInt(this.problemsAndRooms[problemId][roomLength - 1]['roomId']) + 1) + '';
    }
  }

  specificRoom(problemId: string, roomId: string) {
    if (this.getParticipantCount(problemId, roomId) < 5) {
      $(function () {
        $('#myModal').modal();
      });
      this.problemId = problemId;
      this.roomId = roomId;
    } else {
      $(function () {
        $('#fullRoom').modal();
      });
    }
  }

  enterRoom() {
    $(function () {
      $('#myModal').modal('toggle');
    });
    window.open(window.location.origin + 
                `/problems/${this.problemId};roomId=${this.roomId};name=${this.name}`);
    this.name='';
  }

  getParticipantCount(problemId, roomId): number {
    for (let room of this.problemsAndRooms[problemId]) {
      if (room['roomId'] === roomId) {
        return room.participants.length;
      }
    }
  }
}
