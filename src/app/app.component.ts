import { Component } from '@angular/core';
import { KeyvalueService } from './keyvalue.service';

export class Post {
  constructor(
    public title: string,
    public body: string,
    public check: boolean
  ) {}
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postIt: Array<Post> = [];
  selezione: Post;
  apikey: string;
  importantSelector: boolean = false;

  constructor(public kvs: KeyvalueService) {}

  public showPost(post: Post) {
    this.selezione = new Post(post.title, post.body, post.check);
  }

  public important() {
    if (!this.importantSelector) {
      document.getElementById('buttonImportant').innerHTML = 'Tutti i messaggi';
      this.importantSelector = true;
    } else {
      document.getElementById('buttonImportant').innerHTML =
        'Solo Post-It importanti';
      this.importantSelector = false;
    }
  }

  public getVal() {
    this.kvs.getData().subscribe(
      (x: Array<Post>) => {
        this.postIt = x;
      },
      err => {
        console.log(err);
        this.apikey = undefined;
      }
    );
  }

  public setVal(post: Post) {
    this.postIt.push(post);
    this.kvs.setData(this.postIt).subscribe();
  }

  public setKey(key: string) {
    this.apikey = key;
    this.kvs.keySet(key);
    this.getVal();
  }

  public getKey() {
    this.kvs.getKey().subscribe((f: string) => {
      this.apikey = f.substring(25, 33);
      this.kvs.keySet(this.apikey);
      this.kvs.setData(this.postIt).subscribe();
    });
  }
}
