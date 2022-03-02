import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  param! : string | null;
  movie: Movie | undefined;
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRequestParam();  
  }
  getRequestParam = ()=>{  
    this.route
        .paramMap
        .subscribe((params) => {   
           this.param =params.get('id');  
           this.getMovie(this.param); 
    })
  }
  getMovie(id: any){
    this.moviesService.getMovie(id).subscribe(movie =>{
        this.movie = movie;
        console.log(this.movie)
    })
  }
   

}
