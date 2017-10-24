import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class MoviesService
{
    http:any;
    baseUrl: String;
    key: String;

    constructor(http: Http)
    {
        this.http = http;
        this.baseUrl = 'https://tastedive.com/api/similar?q=';
        this.key = '287590-moviesSu-WFPMRRJ0';
        //this.baseUrl = 'https://www.reddit.com/r/food/top/.json?limit'
    }

    getMovies(title, limit)
    {
        return this.http.get(this.baseUrl + title + '&k=' + this.key).map(res => res.json());
    }
}