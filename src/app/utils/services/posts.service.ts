import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = `${environment.api}/posts`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id} `); // http:localhost/post/2
  }

  getByText(text: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url,  {
      params: new HttpParams()//  http:localhost/post?text=blablabl
        .set('text', text)  // set : remplacer les parametres
        .append('param2', 'value2') // ajouter des nouveaux paramètres
        .append('param3', 'value3'), // mais aussi... delete(), get(param), getAll()...
      headers: new HttpHeaders()
        .set('Accept', 'data/json')
        .append('Authorization', 'Bearer Jjkdjdsklqmdjsdsqlmdj')
    })
  }

  getByTextBis(text: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url,  {
      params: {
        text,
        param2: 'value 2',
        param3: 'value 3'
      },
      headers: {
        Authorization: 'Bearer jkkldslfdsfdsfds'
      }
    })
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post, {/* config */});
  }

  update(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.url}/${post.id}`, post, {/* config */});
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.url}/${id}`)
  }

}
