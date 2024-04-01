import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter}}</h3>>
    <button (click)="increasebBy(+1)">+1</button>
    <button (click)="resetCounter()"> Reset </button>
    <button (click)="increasebBy(-1)">-1</button>
    `   
})
export class CounterComponet {

    public counter: number = 10;

    increasebBy(value :number): void {
        this.counter += value;
    }

    resetCounter(): void {
        this.counter = 10;
    }

    constructor(){
        
    }
    
    
}