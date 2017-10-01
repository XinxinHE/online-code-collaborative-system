webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_collaboration_service__ = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_problem_list_problem_list_component__ = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_problem_detail_problem_detail_component__ = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_new_problem_new_problem_component__ = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_room_board_room_board_component__ = __webpack_require__("../../../../../src/app/components/room-board/room-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_chat_box_chat_box_component__ = __webpack_require__("../../../../../src/app/components/chat-box/chat-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_secondsToTime_pipe__ = __webpack_require__("../../../../../src/app/pipes/secondsToTime.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_problem_list_problem_list_component__["a" /* ProblemListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_new_problem_new_problem_component__["a" /* NewProblemComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_room_board_room_board_component__["a" /* RoomBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_chat_box_chat_box_component__["a" /* ChatBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_secondsToTime_pipe__["a" /* secondsToTimePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */]
        ],
        providers: [
            {
                provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]
            },
            __WEBPACK_IMPORTED_MODULE_6__services_collaboration_service__["a" /* CollaborationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__ = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__ = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");



var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__["a" /* ProblemListComponent */]
    },
    {
        path: 'problems/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */]
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-box/chat-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatbox {\n    border-top: 1px solid #CECECE;\n    margin-top: 20px;\n    margin-left: -20px;\n    margin-right: -20px;\n    padding: 20px;\n    padding-bottom: 0px;\n}\n\n.historyMsg {\n    height: 400px;\n    width: 100%;\n    overflow-x: auto;\n}\n\n.user {\n    margin: 5px 0;\n}\n.user-initial {\n    display: inline-block;\n    vertical-align: top;\n    width: 30px;\n    padding: 2px 0;\n    margin-right: 6px;\n    margin-top: 2px;\n    color: #ffffff;\n    font-weight: bold;\n    border-radius: 3px;\n    text-align: center;\n}\n.user-message {\n    display: inline-block;\n    width: 250px;\n    background-color: #efefef;\n    padding: 5px 10px;\n    word-wrap: break-word;\n    border-radius: 5px;\n}\n.form-inline {\n    margin-top: 10px;\n}\n.form-inline .margin {\n    margin-right: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-box/chat-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"chatbox\">\n      <div class=\"historyMsg\" id=\"historyMsg\">\n        <div class=\"user\" *ngFor=\"let message of messageHistory\">\n            <span class=\"user-initial\" [ngStyle]=\"{'background-color': message.color}\">\n              {{message.name[0]}}\n            </span>\n            <span class=\"user-message\">{{message.message}}</span>\n        </div>\n      </div>\n      <div class=\"form-inline\">\n        <input class=\"form-control margin\" [(ngModel)]=\"message\" placeholder=\"Input Message...\">\n        <button class=\"btn btn-info\" (click)=\"sendMessage()\" type=\"button\">Send</button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/chat-box/chat-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_collaboration_service__ = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatBoxComponent = (function () {
    function ChatBoxComponent(collaboration) {
        this.collaboration = collaboration;
        this.messageHistory = [];
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.collaboration.initChatbox().subscribe(function (newMessage) {
            newMessage = JSON.parse(newMessage);
            _this.messageHistory.push(newMessage);
            var container = document.getElementById('historyMsg');
            container.scrollTop = container.scrollHeight;
        });
    };
    ChatBoxComponent.prototype.sendMessage = function () {
        if (this.message) {
            console.log('Chat-box message: ' + this.message);
            this.collaboration.sendMessage(this.message);
            this.message = '';
        }
    };
    return ChatBoxComponent;
}());
ChatBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat-box',
        template: __webpack_require__("../../../../../src/app/components/chat-box/chat-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat-box/chat-box.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_collaboration_service__["a" /* CollaborationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_collaboration_service__["a" /* CollaborationService */]) === "function" && _a || Object])
], ChatBoxComponent);

var _a;
//# sourceMappingURL=chat-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen {\n    #editor {\n        height: 600px;\n    }\n    .lang-select {\n        width: 100px;\n        margin-right: 10px;\n    }\n    header .btn {\n        margin: 0 5px;\n    }\n    footer .btn {\n        margin: 0 5px;\n    }\n    .editor-footer, .editor-header {\n        margin: 10px 0;\n    }\n    .cursor {\n        background: rgba(0, 250, 0, 0.5);\n        z-index: 40;\n        width: 2px !important\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>\n    <select class=\"form-control float-left lang-select\" id=\"language\" name=\"language\"\n      [(ngModel)]=\"language\"\n      (change)=\"setLanguage(language)\"\n      >\n      <option *ngFor=\"let language of languages\"\n        [value]=\"language\">\n        {{language}}  \n      </option>\n    </select>\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <span aria-hidden=\"true\">Reset</span>\n    </button>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\" id=\"myModalLabel\">Reset</h4>\n          </div>\n          <div class=\"modal-body\">\n            Are you sure?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"resetEditor()\">Reset</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header> \n  <br/>\n  <div>\n    <div id=\"editor\">\n    </div>\n    <div>\n      {{output}}\n    </div>\n  </div>\n  <footer>\n    <button type=\"button\" class=\"btn btn-success float-right\" (click)=\"submit()\">\n      Submit Solution  \n    </button>\n  </footer>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__ = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// we declare ace here since the program will find the script reference during the run time
var EditorComponent = (function () {
    function EditorComponent(collaboration, route, dataService) {
        this.collaboration = collaboration;
        this.route = route;
        this.dataService = dataService;
        this.languages = ['Java', 'Python', 'C_cpp'];
        this.language = 'Java';
        this.output = '';
        this.defaultContent = {
            'Java': "public class Example {\n        public static void main(String[] args) {\n          // Type your Java code here\n        }\n    }",
            'Python': "class Solution(object):\n      def twoSum(self, nums, target):\n        \"\"\"\n        :type nums: List[int]\n        :type target: int\n        :rtype: List[int]\n        \"\"\"",
            'C_cpp': "class Solution {\n        public:\n            vector<int> twoSum(vector<int>& nums, int target) {\n            }\n        };"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.problemId = params['id'];
            _this.roomId = params['roomId'];
            // console.log(params);
            // console.log("roomId: " + this.roomId);
        });
        this.initEditor();
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/eclipse");
        this.resetEditor();
        document.getElementsByTagName('textarea')[0].focus(); // cursor position
        this.collaboration.initEditor(this.editor, this.problemId, this.roomId);
        // this.initCursor();
        // content change 
        this.editor.lastAppliedChange = null;
        this.editor.on('change', function (e) {
            // console.log('editor changed: ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
        // cursor change 
        // Ace keeps all the editor states (selection, scroll position, etc.) in editor.session
        this.editor.getSession().getSelection().on('changeCursor', function () {
            var cursor = _this.editor.getSession().getSelection().getCursor();
            // console.log('Cursor move', JSON.stringify(cursor));
            _this.collaboration.cursorMove(JSON.stringify(cursor));
        });
        // call restore buffer
        this.collaboration.restoreBuffer();
    };
    EditorComponent.prototype.initCursor = function () {
        var cursor = this.editor.getSession().getSelection().getCursor();
        this.collaboration.cursorMove(JSON.stringify(cursor));
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
        this.editor.setValue(this.defaultContent[this.language]);
        this.output = '';
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        this.output = '';
        var userCodes = this.editor.getValue();
        //console.log(userCodes);
        var codes = {
            userCodes: userCodes,
            lang: this.language.toLocaleLowerCase()
        };
        this.dataService.buildAndRun(codes)
            .then(function (res) { return _this.output = res.text; });
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.css")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__["a" /* CollaborationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__["a" /* CollaborationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, Object])
], EditorComponent);

var _a, _b;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-blue {\n    background-color:rgba(0, 204, 204, 1);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-toggleable-md navbar-inverse bg-blue\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Sign in</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Sign up</a></li>\n      </ul>\n    </div>\n  </nav>\n \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.title = "Teamcode";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bottom {\n    margin-bottom: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<form #formRef=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"problemName\">Problem Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"problemName\" name=\"problemName\" \n           placeholder=\"Input your problem name\" required\n           [(ngModel)]=\"newProblem.name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"problemDesc\">Problem Description</label>\n    <input type=\"text\" class=\"form-control\" id=\"problemDesc\" name=\"problemDesc\" \n           placeholder=\"Input your problem description\" required\n           [(ngModel)]=\"newProblem.desc\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"difficulty\">Difficulty</label>\n    <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\"\n           [(ngModel)]=\"newProblem.difficulty\">\n           <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n              {{difficulty}}\n           </option>\n    </select>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <button type=\"submit\" class=\"btn btn-primary pull-right bottom\"\n              (click)=\"addProblem()\">Submit</button>\n    </div>\n  </div>\n</form>\n<div>"

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProblemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
}); // freeze: always return to default value after submitting
var NewProblemComponent = (function () {
    function NewProblemComponent(data) {
        this.data = data;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        // Create a shallow copy, otherwise problem cannot be changed because of freeze
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.data.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error.body); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    return NewProblemComponent;
}());
NewProblemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-problem',
        template: __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object])
], NewProblemComponent);

//# sourceMappingURL=new-problem.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".align {\n  display: -ms-grid;\n  display: grid;\n  height: 70px;\n}\n\n.align > * {\n  margin-left: 10px;\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #00CC99;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"Problem\">\n    <div class=\"row\">\n        <div class=\"col-12 align\">\n          <span>Teamcode > Problem list</span>\n        </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-8\">\n          <div>\n              <h2>\n                {{Problem.id}}. {{Problem.name}}\n              </h2>\n              <p>\n                {{Problem.desc}}\n              </p>\n              <hr />\n          </div>\n          \n          <div>\n            <app-editor></app-editor>  \n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-4\">\n            <app-room-board></app-room-board>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__ = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProblemDetailComponent = (function () {
    function ProblemDetailComponent(collaboration, route, data, router) {
        this.collaboration = collaboration;
        this.route = route;
        this.data = data;
        this.router = router;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // + String convert to number
            _this.problemId = params['id'];
            _this.roomId = params['roomId'];
            _this.name = params['name'];
            _this.collaboration.initCollaborationSocket(_this.problemId, _this.roomId, _this.name);
            _this.data.getProblem(+params['id'])
                .then(function (problem) { return _this.Problem = problem; });
        });
    };
    return ProblemDetailComponent;
}());
ProblemDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-problem-detail',
        template: __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.css")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__["a" /* CollaborationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__["a" /* CollaborationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProblemDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=problem-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".align {\n  display: -ms-grid;\n  display: grid;\n}\n\n.align > * {\n  margin-left: 10px;\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #00CC99;\n}\n\n.difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n  padding-top: 0.4em;\n  padding-bottom: 0.4em;\n  color: #fbfdfa;\n  font-size: 14px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.diff-easy {\n  background-color: #42ebf4;\n}\n\n.diff-medium {\n  background-color: #92cf5c;\n}\n\n.diff-hard {\n  background-color: #dd0d1e;\n}\n\n.diff-super {\n  background-color: #8d16e2;\n}\n\n.room-full {\n  background-color: #C7C7C7;\n  color: black;\n}\n\n.room {\n  background-color: #ff7c3c;\n  color: white;\n  font-weight: bolder;\n  width: 30px;\n  height: 30px;\n  padding-top: 2px;\n  margin-left: 5px;\n  text-align: center;\n  display: inline-block;\n}\n\n.btn-newroom {\n  display: inline-block;\n  padding: .3rem .5rem;\n  font-size: .9rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <div class=\"row\">\n    <div class=\"col align\">\n      <span>Teamcode > Problem list</span>\n    </div>\n    <div class=\"col\">\n      <form class=\"form-inline my-2 float-right\">\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n          <button class=\"btn btn-outline-secondary my-2\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </div>\n\n  <app-new-problem></app-new-problem>\n  \n  <div class=\"list-group\">    \n    <span href=\"#\" class=\"list-group-item\" *ngFor=\"let problem of problems\">\n      <span class=\"col-4\">\n        <span class=\"{{'pull-left badge badge-pill difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n            {{problem.difficulty}}\n        </span>\n        <strong class=\"title\">{{problem.id}}. {{problem.name}} </strong>\n      </span>\n\n      <span class=\"col-8\" *ngIf=\"problemsAndRooms\">\n        <span *ngIf=\"problemsAndRooms[problem.id]\">\n            <span *ngFor=\"let room of problemsAndRooms[problem.id]\">\n                <span class=\"room\" \n                      (click)=\"specificRoom(problem.id, room.roomId)\" \n                      *ngIf=\"room['participants']\">\n                      {{room['participants'].length}}\n                </span>\n            </span>\n        </span>\n        <span class=\"float-right\">\n            <input href=\"#\" class=\"btn btn-newroom\" type=\"button\" value=\"New\" \n                   (click)=\"newRoom(problem.id)\"/>\n        </span>\n      </span>\n    </span>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Entering into the room...</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Please enter your Nick Name: \n        <input [(ngModel)]=\"name\" type=\"text\"/>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" id=\"submitBtn\" (click)=\"enterRoom()\" class=\"btn btn-primary\">Enter</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"fullRoom\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Room is full</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            Please join another room.\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__ = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProblemListComponent = (function () {
    function ProblemListComponent(collaboration, dataService, router, elementRef) {
        this.collaboration = collaboration;
        this.dataService = dataService;
        this.router = router;
        this.elementRef = elementRef;
        this.problems = [];
        this.name = '';
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
        this.collaboration.initSocket();
        this.getProblemsAndRooms();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        //this.problems = this.dataService.getProblems(); 
        this.dataService.getProblems()
            .subscribe(function (problems) {
            _this.problems = problems;
            //console.log("----------------------");
            //console.dir(this.problems); 
        });
    };
    ProblemListComponent.prototype.getProblemsAndRooms = function () {
        var _this = this;
        this.collaboration.getProblemsAndRooms()
            .subscribe(function (value) {
            _this.problemsAndRooms = value;
            console.dir(_this.problemsAndRooms);
        });
    };
    ProblemListComponent.prototype.newRoom = function (problemId) {
        $(function () {
            $('#myModal').modal();
        });
        this.problemId = problemId;
        if (!this.problemsAndRooms[problemId] || this.problemsAndRooms[problemId].length === 0) {
            this.roomId = '0';
        }
        else {
            var roomLength = this.problemsAndRooms[problemId].length;
            this.roomId = (parseInt(this.problemsAndRooms[problemId][roomLength - 1]['roomId']) + 1) + '';
        }
    };
    ProblemListComponent.prototype.specificRoom = function (problemId, roomId) {
        if (this.getParticipantCount(problemId, roomId) < 5) {
            $(function () {
                $('#myModal').modal();
            });
            this.problemId = problemId;
            this.roomId = roomId;
        }
        else {
            $(function () {
                $('#fullRoom').modal();
            });
        }
    };
    ProblemListComponent.prototype.enterRoom = function () {
        $(function () {
            $('#myModal').modal('toggle');
        });
        window.open(window.location.origin +
            ("/problems/" + this.problemId + ";roomId=" + this.roomId + ";name=" + this.name));
        this.name = '';
    };
    ProblemListComponent.prototype.getParticipantCount = function (problemId, roomId) {
        for (var _i = 0, _a = this.problemsAndRooms[problemId]; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room['roomId'] === roomId) {
                return room.participants.length;
            }
        }
    };
    return ProblemListComponent;
}());
ProblemListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-problem-list',
        template: __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('data')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__["a" /* CollaborationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__["a" /* CollaborationService */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], ProblemListComponent);

var _a, _b, _c;
//# sourceMappingURL=problem-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/room-board/room-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timer {\n    height: 50px;\n    text-align: center;\n    font-weight: bold;\n    padding: .8em;\n    margin: 30px auto;\n    background-color: #f5f5f5;\n}\n\n.user {\n    margin: 5px 0;\n}\n.user-initial {\n    display: inline-block;\n    width: 30px;\n    padding: 2px 0;\n    margin-right: 6px;\n    color: #ffffff;\n    /* font-size: 1rem; */\n    font-weight: bold;\n    text-align: center;\n    border-radius: 3px;    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/room-board/room-board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">Room Link</h4>\n      <p class=\"card-text\">{{URL}}</p>\n      <div class=\"timer\">{{time | secondsToTime}}</div>\n      <div *ngIf=\"participantList\">\n        <h4 class=\"card-title\">Room Members</h4>\n        <div class=\"user\" *ngFor=\"let id of participantIndex\">\n          <span class=\"user-initial\" [ngStyle]=\"{'background-color': participantList[id].color}\">\n            {{participantList[id].name[0]}}\n          </span>\n          <span>{{participantList[id].name}}</span>\n        </div>\n      </div>\n      <app-chat-box></app-chat-box>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/room-board/room-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__ = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomBoardComponent = (function () {
    function RoomBoardComponent(collaboration, route, zone) {
        this.collaboration = collaboration;
        this.route = route;
        this.zone = zone;
    }
    RoomBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.problemId = params['id'];
            _this.roomId = params['roomId'];
            _this.name = params['name'];
            _this.URL = window.location.origin + ("/problems/" + _this.problemId);
            _this.collaboration.getParticipants();
            _this.collaboration.getTime();
        });
        this.collaboration.initParticipantList().subscribe(function (value) {
            console.log(value);
            _this.participantList = JSON.parse(value);
            _this.participantIndex = Object.keys(_this.participantList);
        });
        this.collaboration.initTime().subscribe(function (date) {
            setInterval(function () { _this.getTime(date); }, 1000);
        });
    };
    RoomBoardComponent.prototype.getTime = function (date) {
        this.time = (Date.now() - date) / 1000;
    };
    return RoomBoardComponent;
}());
RoomBoardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-room-board',
        template: __webpack_require__("../../../../../src/app/components/room-board/room-board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/room-board/room-board.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__["a" /* CollaborationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_collaboration_service__["a" /* CollaborationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object])
], RoomBoardComponent);

var _a, _b, _c;
//# sourceMappingURL=room-board.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/secondsToTime.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return secondsToTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var secondsToTimePipe = (function () {
    function secondsToTimePipe() {
        this.times = {
            d: 86400,
            h: 3600,
            m: 60,
            s: 1
        };
    }
    secondsToTimePipe.prototype.transform = function (seconds) {
        var time_string = '';
        var plural = '';
        for (var key in this.times) {
            if (Math.floor(seconds / this.times[key]) > 0) {
                time_string += Math.floor(seconds / this.times[key]).toString() + ' ' + key.toString() + ' ';
                seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
            }
        }
        return time_string;
    };
    return secondsToTimePipe;
}());
secondsToTimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'secondsToTime'
    })
], secondsToTimePipe);

//# sourceMappingURL=secondsToTime.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/collaboration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaborationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollaborationService = (function () {
    function CollaborationService() {
        this.clientsInfo = {};
        this.clientNum = 0;
        // behaviour subject: must initialize with a value
        this._problemsAndRooms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._participantList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._newMessage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._startTime = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    CollaborationService.prototype.initSocket = function () {
        this.problemListSocket = io(window.location.origin);
    };
    CollaborationService.prototype.getProblemsAndRooms = function () {
        var _this = this;
        // problemsAndRooms: use arrow function to bind to this, otherwise not refer to Injectable
        this.problemListSocket.on('getProblemsAndRooms', function (problemsAndRooms) {
            // console.log('Rooms:  -----');
            // console.log(problemsAndRooms);
            _this._problemsAndRooms.next(problemsAndRooms);
        });
        return this._problemsAndRooms.asObservable();
    };
    CollaborationService.prototype.initCollaborationSocket = function (problemId, roomId, name) {
        /* location.orign: returns the protocol, hostname, and port number of a URL
         * query: the query member is passed to the server on connection and parsed as a CGI style query string
         * Retrieved by socket.handshake.query at the server side
         */
        this.collaborationSocket = io(window.location.origin + '/problemEditor', { query: 'problemId=' + problemId +
                '&roomId=' + roomId +
                '&name=' + name });
    };
    CollaborationService.prototype.initParticipantList = function () {
        var _this = this;
        this.collaborationSocket.on('getParticipants', function (value) {
            // console.log(value);
            _this._participantList.next(value);
        });
        return this._participantList.asObservable();
    };
    CollaborationService.prototype.initEditor = function (editor, problemId, roomId) {
        var _this = this;
        this.collaborationSocket.on('change', function (delta) {
            console.log('Collaboration: editor changed by ' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            // apply changes received from server to ace editor
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        this.collaborationSocket.on('cursorMove', function (cursor) {
            console.log('Cursor: ' + cursor);
            var session = editor.getSession();
            cursor = JSON.parse(cursor);
            var x = cursor['row'];
            var y = cursor['column'];
            var changeClientId = cursor['socketId'];
            var color = cursor['color'];
            var markerId = changeClientId.replace(/[^a-zA-Z ]/g, "");
            if (changeClientId in _this.clientsInfo) {
                session.removeMarker(_this.clientsInfo[changeClientId]['marker']);
            }
            else {
                // it's a new client, assign a new color to the new client
                _this.clientsInfo[changeClientId] = {};
                var css = document.createElement('style');
                css.type = 'text/css';
                css.innerHTML = '.editor_cursor_' + markerId +
                    '{ position: absolute; background: ' + color + ';' +
                    'z-index: 100; width: 3px !important;}';
                document.body.appendChild(css);
            }
            // draw a new marker
            var Range = ace.require('ace/range').Range;
            var newMarker = session.addMarker(new Range(x, y, x, y + 2), 'editor_cursor_' + markerId, null, true);
            _this.clientsInfo[changeClientId]['marker'] = newMarker;
        });
    };
    CollaborationService.prototype.initChatbox = function () {
        var _this = this;
        this.collaborationSocket.on('sendMessage', function (message) {
            _this._newMessage.next(message);
        });
        return this._newMessage.asObservable();
    };
    CollaborationService.prototype.initTime = function () {
        var _this = this;
        this.collaborationSocket.on('getTime', function (date) {
            _this._startTime.next(date);
        });
        return this._startTime.asObservable();
    };
    CollaborationService.prototype.getTime = function () {
        this.collaborationSocket.emit('getTime');
    };
    CollaborationService.prototype.sendMessage = function (message) {
        this.collaborationSocket.emit('sendMessage', message);
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit('change', delta);
    };
    CollaborationService.prototype.cursorMove = function (cursor) {
        this.collaborationSocket.emit('cursorMove', cursor);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit('restoreBuffer');
    };
    CollaborationService.prototype.getParticipants = function () {
        this.collaborationSocket.emit('getParticipants');
    };
    return CollaborationService;
}());
CollaborationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CollaborationService);

//# sourceMappingURL=collaboration.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        //problems: Problem[] = PROBLEMS;
        this._problemSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]); // ???
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        //return this.problems;
        this.http.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res.json());
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        var _this = this;
        //return this.problems.find( (problem) => problem.id === id);
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        //problem.id = this.problems.length + 1;
        //this.problems.push(problem);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('/api/v1/problems', problem, options)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res.json();
        })
            .catch(this.handleError);
    };
    // define a data model
    DataService.prototype.buildAndRun = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('/api/v1/build_and_run', data, options)
            .toPromise()
            .then(function (res) {
            console.log('in client side build and run', res);
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occured!', error);
        return Promise.reject(error);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map