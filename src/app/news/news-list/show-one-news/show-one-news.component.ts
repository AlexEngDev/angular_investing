import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Photo } from 'src/app/models/image.model';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-show-one-news',
  templateUrl: './show-one-news.component.html',
  styleUrls: ['./show-one-news.component.css']
})
export class ShowOneNewsComponent implements OnInit{

  constructor(private imageService: ImageService, private route: ActivatedRoute){ }


  image?: Photo;
  error: any;

  ngOnInit(): void {

    console.log('show funziona');


		let id = this.route.snapshot.paramMap.get("id");
    if (id != null) {
      this.imageService.getImgById(id)
        .pipe(
          catchError(err => {
            this.error = err;
            return of(undefined);
          })
        )
        .subscribe(im => {
          this.image = im;
        });
    }
  }

}
