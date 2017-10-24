import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MoviesService} from '../../app/services/movies.service'

@Component({
  selector: 'movies',
  templateUrl: 'movies.html'
})
export class MoviesPage {
    movies: any;
    mName: any;
    //mName = "The dark knight";
    //title = mName;
    constructor(public navCtrl: NavController , public moviesService: MoviesService) 
    {
        
    }

    ngOnInit()
    {
        //this.mName = this.mName;
        this.getMovies(this.mName, 0);
    }

    getMovies(title, limit)
    {
        this.moviesService.getMovies(title,limit).subscribe(response => {
            //this.getMovies(title, limit);
            console.log(response);
            this.movies = response.Similar.Results;
        });
    }

}
