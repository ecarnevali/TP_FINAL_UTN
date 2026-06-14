import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLinkWithHref, RouterOutlet, Event } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { filter } from 'rxjs';
import { StorageService } from './servicios/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, CommonModule, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private storageService = inject(StorageService);

  ngOnInit(): void {
    const lastVisited = this.storageService.getLocal(LOCALSTORAGE_KEY);

    if (lastVisited && lastVisited !== '/') {
      this.router.navigateByUrl(lastVisited);
    }


    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentUrl = event.urlAfterRedirects || event.url;
      this.storageService.setLocal(LOCALSTORAGE_KEY, currentUrl);
    });


  }
}

const LOCALSTORAGE_KEY = 'lastVisited';