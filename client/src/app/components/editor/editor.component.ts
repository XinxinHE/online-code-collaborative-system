import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollaborationService } from '../../services/collaboration.service';
declare const ace: any;  
// we declare ace here since the program will find the script reference during the run time

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  languages: string[] = ['Java', 'Python', 'C_cpp'];
  language: string = 'Java';
  problemId: string;
  roomId: string;
  output: string = '';
  defaultContent = {
    'Java': `public class Example {
        public static void main(String[] args) {
          // Type your Java code here
        }
    }`,

    'Python': `class Solution(object):
      def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """`
      , 

    'C_cpp': `class Solution {
        public:
            vector<int> twoSum(vector<int>& nums, int target) {
            }
        };`
  }
  constructor(private collaboration: CollaborationService,
              private route: ActivatedRoute,
              @Inject('data') private dataService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.problemId = params['id'];
      this.roomId = params['roomId'];
      // console.log(params);
      // console.log("roomId: " + this.roomId);
    });
    this.initEditor();
  }

  initEditor(): void {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.resetEditor();

    document.getElementsByTagName('textarea')[0].focus();  // cursor position

    this.collaboration.initEditor(this.editor, this.problemId, this.roomId);
    // this.initCursor();
    // content change 
    this.editor.lastAppliedChange = null;
    this.editor.on('change', e => {
      // console.log('editor changed: ' + JSON.stringify(e));
      if (this.editor.lastAppliedChange != e) {
        this.collaboration.change(JSON.stringify(e));
      }
    });    
    // cursor change 
    // Ace keeps all the editor states (selection, scroll position, etc.) in editor.session
    this.editor.getSession().getSelection().on('changeCursor', () => {
      const cursor = this.editor.getSession().getSelection().getCursor();
      // console.log('Cursor move', JSON.stringify(cursor));
      this.collaboration.cursorMove(JSON.stringify(cursor));
    });

    // call restore buffer
    this.collaboration.restoreBuffer();
  }

  initCursor():void {
    const cursor = this.editor.getSession().getSelection().getCursor();
    this.collaboration.cursorMove(JSON.stringify(cursor));
  }
  setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();
  }

  resetEditor(): void {
    this.editor.getSession().setMode(`ace/mode/${this.language.toLowerCase()}`);
    this.editor.setValue(this.defaultContent[this.language]);
    this.output = '';
  }

  submit() {
    this.output = '';
    const userCodes = this.editor.getValue();
    //console.log(userCodes);

    const codes = {
      userCodes: userCodes,
      lang: this.language.toLocaleLowerCase()
    }

    this.dataService.buildAndRun(codes)
    .then(res => this.output = res.text);
  }
}
