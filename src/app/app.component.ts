import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Anguartesting';
  ngOnInit() {
    const searchBox = document.getElementById('searchBox');

    fromEvent(searchBox!, 'input').pipe(
      debounceTime(2000), // Wait for user to stop typing for 500ms
      map((event: any) => event.target.value), // Extract input value
      switchMap(value => {
        console.log('User Input:', value);
        return value; // Not calling API here, just logging
      })
    ).subscribe( );
  }
}
