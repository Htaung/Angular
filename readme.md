
<h1> [FreeTutorials.Us] Udemy - Angular 6 (formerly Angular 2) - The Complete Guide <h1>

<h1> Installed Angular Latest </h1>
<pre>
<code>
npm install angular@latest

ng new myApp
//server run on default port 4200
cd myApp
ng serve

</code>
</pre>

Getting started ==> stop at Editing First App


Create a workspace and initial application

//Start creating angular
ng new my-first-app

//Run ng web server
ng serve


<pre>
Course Structure
The Basic
component & data binding
Directives
Services & Dependency Injection
Routing
Observable
Forms	
Pipes
Http 
Authenication
Optimization & NgModules
Deployment
Animation & Testing



Installed bootstrap
<code> 
npm install --save bootstrap@3
</code>


angular.json configure CLI 

import style in angular.json by adding or searching


Ends at 7.Course Structure




<h2> 2. How an Angular App gets Loaded and Started </h2>
index.html under the body <app-body> tag represent for all app.component 
main.ts ==> import { AppModule } from './app/app.module';
passed the AppModule to the method


NOTE ==> Angular is a JSFramework, changing your DOM(HTML)  at runtime

Each component have own template, html, business logic

Component is the decorator ==> enhance your class, element


selector ==> html element alble to use component later	

after add new component need to change app.module.ts to use it
angular use component to build web pages use module to bundle component as packages


after add new component need to change app.module.ts to use it
add declaration in app.module.ts to know the added new component

user youreditor+emmet to suggestion
https://code.visualstudio.com/blogs/2017/08/07/emmet-2.0
add autoclose tag extension in your ide if end tag doesn't show after enter first tag

<h2> 7. Creating Components with the CLI & Nesting Components </h2>
ng generate component servers
ng g c servers

<h2> Working with component style</h2>
to use multi-line expression ==> use `` instead of ''


Attribute Selector
selector: '[app-servers]',
use it in html element as a tag 
<div app-servers></div>

Class Selector
selector: '.app-servers',
<div class='app-servers'></div>

//Should use this element style
Element Selector ( Element Tag)
selector: 'app-server',
<app-server><app-server>	

<h2> Data Binding </h2
String interpolation {{ data }}

Propery Data binding [property] = "data" ==> 
[disabled]= "!allowNewServer"

Event Binding (event) = "expression"
<p> Data binding is communication between typescript(business logic) and template(html)

Property binding and event binding
<button class="btn btn-primary" [disabled]= "!allowNewServer" (click)="onCreateServer()">Add Server</button>

Declaring variable in Typescript
	serverId:number = 10;
    serverStatus:String = 'Offline';
	
Casting as HTMLInputElement ==> <HTMLInputElement>

user $event to fetch the data
<input type="text" class="form-control" (input)="onUpdateServerName($event)"/>

To be able to use ngModel ==> FormModule from (@angular/forms) need to abe added to import array in AppModule (default in CLI project)

<h2>Two way Data binding </h2>
<input type="text" class="form-control" [(ngModel)]="serverName"/>
Notes ==> Don't use space between [( and )] otherwise raised error
DOMException: Failed to execute 'setAttribute' on 'Element': '[(' is not a valid attribute name.
 

 <h2> What are directive? </h2>
Directives are instructions in the DOM. 
</pre>

*ngIf only on when the condition is true html element is added dynamically
<p *ngIf="serverCreated">Server was created, server name is {{serverName}}</p>

ngIf with else noServer is like marker
<p *ngIf="serverCreated; else noServer">Server was created, server name is {{serverName}}</p>
<ng-template #noServer>
    <p>
        No Server was created
    </p>
</ng-template>

Unlike structural directives, attribute directives don't add or remove elements. They only change the element they were placed on.
[] ==> indicate want to bind some data on directive
ngStyle attribute directive
<p [ngStyle]="{ backgroundColor: getColor()}">

<p>
*ngFor
<div *ngFor="let logItem of log; let i = index"
</p>
		
<h1> Reached at 
Angular 6 (formerly Angular 2) - The Complete Guide\2. The Basics > 30