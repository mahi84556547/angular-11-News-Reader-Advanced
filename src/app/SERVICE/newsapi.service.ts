import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(public _http:HttpClient) { }

newsApiUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9df272c7e7c743e8981b44753a88dbe0"
newsApiUrl1 = " https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9df272c7e7c743e8981b44753a88dbe0"
newsApiUrl2 = " https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=9df272c7e7c743e8981b44753a88dbe0"
newsApiUrl3 = " https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=9df272c7e7c743e8981b44753a88dbe0"
newsApiUrl4 = " https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=9df272c7e7c743e8981b44753a88dbe0"
newsApiUrl5 = " https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=9df272c7e7c743e8981b44753a88dbe0"


getAllNews():Observable<any>{
  return this._http.get(this.newsApiUrl);
}
getAllNews1():Observable<any>{
  return this._http.get(this.newsApiUrl1);
}
getAllNews2():Observable<any>{
  return this._http.get(this.newsApiUrl2);
}
getAllNews3():Observable<any>{
  return this._http.get(this.newsApiUrl3);
}
getAllNews4():Observable<any>{
  return this._http.get(this.newsApiUrl4);
}
getAllNews5():Observable<any>{
  return this._http.get(this.newsApiUrl5);
}
}
