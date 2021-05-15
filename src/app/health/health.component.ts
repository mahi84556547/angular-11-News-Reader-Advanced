import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../SERVICE/newsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  news5:any =[]
  constructor(private _http2:NewsapiService) { }

  ngOnInit(): void {
    this._http2.getAllNews5().subscribe((result) => {
      this.news5 = result.articles;
      console.log(result);
      })
  }

}
