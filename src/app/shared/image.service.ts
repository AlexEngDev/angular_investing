import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Images, Photo } from '../models/image.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }


  private apiBaseUrl = "https://api.pexels.com/v1/"
  private apiKey = "SLYnok1plZxYFC4HTr28gkZeBb3djOzSIPbV27o9LrBhnqdVhIVfruoq"


  private options = {
   headers: new HttpHeaders({
     "Authorization": this.apiKey
   })
  }


  getAllImgs(): Observable<Images>{
   let url = `${this.apiBaseUrl}curated?page=1&per_page=40`
   return this.http.get<Images>(url, this.options)
  }


  getImgById(id: string): Observable<Photo> {
   let url = `${this.apiBaseUrl}photos/${id}`
   return this.http.get<Photo>(url, this.options);
  }


  searchImgs(query: string): Observable<Images> {
    let url = `${this.apiBaseUrl}search?query=${query}&per_page=5`;
    return this.http.get<Images>(url,  this.options);
  }


  aggPreferiti(img: Photo){
    return this.http.post<Photo>("http://localhost:3000/preferiti", img)
  }


  getPreferiti():Observable<Photo[]>{
    return this.http.get<Photo[]>("http://localhost:3000/preferiti")
  }


  deleteDaPreferiti(id: number){
    return this.http.delete("http://localhost:3000/preferiti/"+id).subscribe();
  }


}
