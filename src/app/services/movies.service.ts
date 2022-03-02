import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
   
  constructor(private http: HttpClient) { }

  getMovies(page:number){
    const params = new HttpParams()
    .set("api_key", environment.API_KEY)
    .set("language", 'en-US')
    .set("page", page)
     
    return this.http.get<any>(`${environment.API_URL}/movie/top_rated`, {params});
  }
  getMovie(id:number){
    const params = new HttpParams()
    .set("api_key", environment.API_KEY)
    .set("language", 'en-US') 
     
    return this.http.get<any>(`${environment.API_URL}/movie/${id}`, {params});
  }
}
