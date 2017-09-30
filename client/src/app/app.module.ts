import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { routing } from './app.routes';

import { DataService } from './services/data.service';
import { CollaborationService } from './services/collaboration.service';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { RoomBoardComponent } from './components/room-board/room-board.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { secondsToTimePipe } from './pipes/secondsToTime.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    EditorComponent,
    RoomBoardComponent,
    ChatBoxComponent,
    secondsToTimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {
      provide: 'data',
      useClass: DataService
    },
    CollaborationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
