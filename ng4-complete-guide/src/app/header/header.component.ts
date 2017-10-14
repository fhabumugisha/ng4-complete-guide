import {Component} from "@angular/core";
@Component({
    selector: 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})
export class HeaderComponent{
    menus: string[] ;

    constructor(){
        this.menus = ['Home', 'Shopping List', 'Recipe book'];
    }
}