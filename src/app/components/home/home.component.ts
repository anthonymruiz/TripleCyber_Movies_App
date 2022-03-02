import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page: number = 1;
  pages: number = 0;
  total: number = 0;
  movies: Movie[] = [];
  movieDescription: Movie | undefined;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.list(this.page)
  }
  list(page: number){
     this.moviesService.getMovies(page).subscribe((movies:any)=> {
         if(this.pages == 0 && this.total ==0){
           this.pages = movies['total_pages']
           this.total = movies['total_results']
         } 
         this.movies = movies['results'];
         console.log(this.movies)
     })
  }
  setMovieDescription(id: number){
    this.movieDescription = undefined;
    this.movieDescription = this.movies.find((movie: Movie) => movie.id == id);
  }
}
