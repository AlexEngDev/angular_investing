import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'investings_news';

  ngOnInit(): void {
    document.addEventListener('click', documentClick);
    function documentClick(e) {
      const targetItem = e.target;
      if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open')
      }
    }
  }

}
