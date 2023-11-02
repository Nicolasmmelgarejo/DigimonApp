import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '@shared/services/component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'DigimonApp';

  @ViewChild("mainCard") mainCard:any;
  @ViewChild("alert") alert:any;
  constructor(public router:Router,
    private componentService:ComponentService) { }

    ngOnInit(): void {
    }
}
