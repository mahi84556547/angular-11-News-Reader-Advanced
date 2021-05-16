import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(public _http:HttpClient) { }

newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0e6d4be8777a4585bcfaa3db4ec3a09c"
newsApiUrl1 = " https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=0e6d4be8777a4585bcfaa3db4ec3a09c"
newsApiUrl2 = " https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=0e6d4be8777a4585bcfaa3db4ec3a09c"
newsApiUrl3 = " https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=0e6d4be8777a4585bcfaa3db4ec3a09c"
newsApiUrl4 = " https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=0e6d4be8777a4585bcfaa3db4ec3a09c"
newsApiUrl5 = " https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=0e6d4be8777a4585bcfaa3db4ec3a09c"


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
