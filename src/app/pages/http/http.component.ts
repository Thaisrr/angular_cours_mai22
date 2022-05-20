import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostsService} from "../../utils/services/posts.service";
import {Post} from "../../utils/models/Post";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  url = 'https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode';
  joke?: string;
  posts?: Post[];
  postGroup = new FormGroup({
    text: new FormControl('', [Validators.required])
  })

  constructor(
    private http: HttpClient,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.http.get<any>(this.url)
      .subscribe(response => {
        this.joke = response.joke;
        console.log(this.joke)
      })

    this.getPosts();
  }

  createPost() {
    if(this.postGroup.valid) {
      this.postService.create(this.postGroup.value)
        .subscribe(() => {
          this.postGroup.reset();
          this.getPosts()
        })
    }
  }

  getPosts() {
    this.postService.getAll().subscribe({
      next: res => this.posts = res,
      error: err => console.log(err)
    })
  }

  delete(id?: number) {
    if(id) {
      this.postService.delete(id)
        .subscribe( () => {
            alert('Supprimé avec succès');
            this.getPosts();
        });
    }

  }



}
