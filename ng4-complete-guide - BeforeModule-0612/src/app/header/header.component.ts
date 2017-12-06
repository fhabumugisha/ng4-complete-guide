import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    menus: [{ path: string, label: String }] = [
        { path: '', label: 'Home' },
        { path: 'recipes', label: 'Recipe Book' },
        { path: 'shopping-list', label: 'Shopping List' }

    ];
    // @Output() menuClicked = new EventEmitter<{clickedMenu: string}>();
    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService,
              private router: Router) { }

    /*  onMenuClicked(clickedItem: string) {
         console.log(clickedItem);
          this.menuClicked.emit({clickedMenu: clickedItem});
     } */

     onSaveData(){
        this.dataStorageService.storeRecipes().subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
     }

     onFetchData(){
      this.dataStorageService.getRecipes();
     }

     onLogout() {
       this.authService.logout();
       this.router.navigate(['/']);
     }
}
