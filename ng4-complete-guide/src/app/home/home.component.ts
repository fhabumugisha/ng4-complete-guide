import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const myObservable = Observable.create((observer: Observer<string>) => {
        setTimeout(function() {
          observer.next('first package');
        }, 2000);
        setTimeout(function() {
          observer.next('second package');
        }, 4000);
        setTimeout(function() {
          observer.error('this doesnt work');
        }, 5000);
    });
  this.customObsSubscription =  myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      },


    );
  }

  ngOnDestroy(){
    this.customObsSubscription.unsubscribe();
  }
}
