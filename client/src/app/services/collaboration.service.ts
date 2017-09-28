import { Injectable } from '@angular/core';
import { Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { COLORS } from '../../assets/colors';

declare const io: any;
declare const ace:any;
@Injectable()
export class CollaborationService {
  problemListSocket: any;
  collaborationSocket: any;
  clientsInfo: Object = {};
  clientNum: number = 0;

  // behaviour subject: must initialize with a value
  private _problemsAndRooms = new Subject<any>();
  constructor() { }
  
  initSocket() {
    // namespace: /
    this.problemListSocket = io(window.location.origin);
  }

  getProblemsAndRooms():Observable<any> {
    // problemsAndRooms: use arrow function to bind to this, otherwise not refer to Injectable
    this.problemListSocket.on('getProblemsAndRooms', (problemsAndRooms) => { 
        // console.log('Rooms:  -----');
        // console.log(problemsAndRooms);
        this._problemsAndRooms.next(problemsAndRooms);
    });   
    return this._problemsAndRooms.asObservable();
  }

  initCollaborationSocket(problemId: string, roomId: number, name: string) {
    /* location.orign: returns the protocol, hostname, and port number of a URL
     * query: the query member is passed to the server on connection and parsed as a CGI style query string
     * Retrieved by socket.handshake.query at the server side
     */

    // namespace: problemEditor 
    this.collaborationSocket = io(window.location.origin + '/problemEditor',
    {query: 'problemId=' + problemId + '&roomId=' + roomId + '&name=' + name});
  }

  getRoomParticipants(problemId: string, roomId: number) {
    
  }

  initEditor(editor: any, problemId: string, roomId: number): void {

    this.collaborationSocket.on('change', (delta: string) => {
      console.log('Collaboration: editor changed by ' + delta);
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      // apply changes received from server to ace editor
      editor.getSession().getDocument().applyDeltas([delta]);
    });

    this.collaborationSocket.on('cursorMove', (cursor) => {
      console.log('Cursor: ' + cursor);
      const session = editor.getSession();
      cursor = JSON.parse(cursor);
      const x = cursor['row'];
      const y = cursor['column'];
      const changeClientId = cursor['socketId'];
      const markerId = changeClientId.replace(/[^a-zA-Z ]/g, "");
      if (changeClientId in this.clientsInfo) {
        session.removeMarker(this.clientsInfo[changeClientId]['marker']);
      } else {
        // it's a new client, assign a new color to the new client
        this.clientsInfo[changeClientId] = {};
        const css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = '.editor_cursor_' + markerId +
          '{ position: absolute; background: ' + COLORS[this.clientNum] + ';' +
          'z-index: 100; width: 3px !important;}';
        document.body.appendChild(css);
        this.clientNum++;
      }
      // draw a new marker
      const Range = ace.require('ace/range').Range;
      const newMarker = session.addMarker(new Range(x, y, x, y + 5), 
                                          'editor_cursor_' + markerId,
                                          null,
                                          true);
      this.clientsInfo[changeClientId]['marker'] = newMarker;

      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@");
      console.log(newMarker);
    });
  }

  change(delta: string): void {
    this.collaborationSocket.emit('change', delta);
  }

  cursorMove(cursor: string): void {
    this.collaborationSocket.emit('cursorMove', cursor);
  }

  restoreBuffer(): void {
    this.collaborationSocket.emit('restoreBuffer');
  }
}
