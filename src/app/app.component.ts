import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'This is the test message: ';
  titleMessage = '';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getTestData().subscribe(resp => {
      this.titleMessage = resp.dbString;
    });
  }


}
