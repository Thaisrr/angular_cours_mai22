import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../utils/services/posts.service";
import {Post} from "../../utils/models/Post";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post? : Post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.postService.getById(params['id'])) // annule l'observable de router.params
    ).subscribe({ // on souscrit à postService.getId
      next : post => {
       this.post = post;
      },
      error: err => alert(`Oups, quelque chose s'est mal passé`)
    })
  }
}
