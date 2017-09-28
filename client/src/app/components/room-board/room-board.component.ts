import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollaborationService } from '../../services/collaboration.service';

@Component({
  selector: 'app-room-board',
  templateUrl: './room-board.component.html',
  styleUrls: ['./room-board.component.css']
})
export class RoomBoardComponent implements OnInit {

  problemId: string;
  roomId: number;
  name: string;
  URL: string;
  constructor(private collaboration: CollaborationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.problemId = params['id'];
      this.roomId = params['roomId'];
      this.name = params['name'];
      this.URL = window.location.origin + `/problems/${this.problemId}`;
    });
  }

}
