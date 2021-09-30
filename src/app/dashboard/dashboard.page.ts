import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  slideOpts = {
    
    initialSlide: 0,
    slidesPerView: 1.5,
    spaceBetween: 5,
    speed: 400,
    // loop: true,
    firstSlides: true,
    // autoplay: false,
    pagination : false,

  }
  List: any;
  items: any = [];
  constructor(private router: Router,public translate: TranslateService) {
    translate.get('items').subscribe((text: string) => {
      this.items = text;
    });
    console.log("this.items",this.items);
   }

  ngOnInit() {
    console.log("items",this.items);
    this.List = this.items;
  }
  goTOProfile(pdata){
    console.log("goTOProfile",pdata);    
    // this.router.navigate(['/profile']);    
    this.router.navigate(['/profile'], { queryParams:  pdata });
  }
  Profile_dislike(pdata){
    
    console.log("Profile_dislike",pdata);
  }

}
