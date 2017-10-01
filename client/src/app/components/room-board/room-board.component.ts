import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollaborationService } from '../../services/collaboration.service';

@Component({
  selector: 'app-room-board',
  templateUrl: './room-board.component.html',
  styleUrls: ['./room-board.component.css']
})
export class RoomBoardComponent implements OnInit {

  problemId: string;
  roomId: string;
  name: string;
  URL: string;
  participantList: any;
  participantIndex: any;
  time: number;

  constructor(private collaboration: CollaborationService,
              private route: ActivatedRoute,
              private zone: NgZone) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.problemId = params['id'];
      this.roomId = params['roomId'];
      this.name = params['name'];
      this.URL = window.location.origin + `/problems/${this.problemId}`;
      this.collaboration.getParticipants();
      this.collaboration.getTime();
    });
    
    this.collaboration.initParticipantList().subscribe((value) => {
      console.log(value);
      this.participantList = JSON.parse(value);
      this.participantIndex = Object.keys(this.participantList);
    });

    this.collaboration.initTime().subscribe((date) => {
      setInterval(() => {this.getTime(date)}, 1000);
    });
  }
  getTime(date: number) {
    this.time = (Date.now() - date) / 1000;
  }
}
