import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../SERVICE/newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  news7:any =[]
  constructor(private _http7:NewsapiService) { }

  ngOnInit(): void {
    this._http7.getAllNews3().subscribe((result) => {
      this.news7 = result.articles;
      console.log(result);
      })
  }
}
