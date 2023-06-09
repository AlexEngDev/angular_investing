import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/image.model';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getAllImages()
  }


  imagesData?:Images
	searchQuery = "nature"

	getAllImages():void{
		this.imageService.getAllImgs().subscribe((imgsData) => {
			this.imagesData = imgsData;
		})
	 }


  cercaImages() {
   this.imageService.searchImgs(this.searchQuery).subscribe(si => {
     this.imagesData = si;
   });
  }

}
