import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Images, Photo } from 'src/app/models/image.model';
import { ImageService } from 'src/app/shared/image.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit{

  constructor(private imageService: ImageService, private route: ActivatedRoute){ }

  @Input()ImageParent:Images



  ngOnInit(): void {}



}
