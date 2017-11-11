import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  credentials = { email: "", password: "" };

  constructor() {

  }

  ngOnInit() {
    // this.vendorApi.find().subscribe((data: Vendor[]) => {
    //   console.log(data);
    //   this.models = data;
    // });
  }
}
