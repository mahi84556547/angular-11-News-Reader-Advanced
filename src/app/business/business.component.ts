import { NewsapiService } from './../SERVICE/newsapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
news1:any =[]
  constructor(private _http:NewsapiService) { }

  ngOnInit(): void {
    this._http.getAllNews1().subscribe((result) => {
      this.news1 = result.articles;
      console.log(result);
      })

  }

}
