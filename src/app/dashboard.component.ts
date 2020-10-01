import { Component, Input, Output } from '@angular/core';


@Component({
    selector: 'app-dashboard', 
    template: `
    <input type = "text" (input)="onUserInput($event)" value="name">
    <!-- input type = "text" [(ngModel)]= "loadState"><button (click)="onClickMe()"> {{ loadState }}</button>
        <p>I am the Dashboard Component</p>    
        <p>Hello, {{ loadState }}!</p -->
               `
})
export class DashboardComponent {
    @Input() loadState = 'loading'
    @Output() nameChanged = 'chenage'

    onClickMe() {
        this.loadState = "finished";
    }
}