import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../SERVICE/newsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  news4:any =[]
  constructor(private _http3:NewsapiService) { }

  ngOnInit(): void {
    this._http3.getAllNews4().subscribe((result) => {
      this.news4 = result.articles;
      console.log(result);
      })
  }
}
