import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
	this.items = db.collection('items').valueChanges();
	db.collection('items').add({title:"ASDddd", content:"QWERTY"});
	console.log(this.items);  	
  }
}
