import { NewsapiService } from './../SERVICE/newsapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  news2:any =[]
  constructor(private _http1:NewsapiService) { }

  ngOnInit(): void {
    this._http1.getAllNews2().subscribe((result) => {
      this.news2 = result.articles;
      console.log(result);
      })
  }

}
