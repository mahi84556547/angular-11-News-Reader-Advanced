import { NewsapiService } from './../SERVICE/newsapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
news:any = []

  constructor(public _httpss:NewsapiService) { }

  ngOnInit(): void {
    this._httpss.getAllNews().subscribe((result) => {
    this.news = result.articles;
    console.log(result);
    })


  }

}
