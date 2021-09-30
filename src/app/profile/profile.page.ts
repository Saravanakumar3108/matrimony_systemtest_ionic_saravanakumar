import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
pdata: any = [];
slideOpts = {
  slidesPerView: 1,
  spaceBetween: 5,
  speed: 400,
  firstSlides: true
}
  constructor(private route: ActivatedRoute,private router: Router,public translate: TranslateService) {
    this.route.queryParams.subscribe(params => {
      if (params) {
       
       this.pdata = params; 
       console.log("pdata",this.pdata);
      }
      else {        
        this.router.navigate(['/dashboard']);
      }
    });
   }

  ngOnInit() {
  }

  goback(){
    this.router.navigate(['/dashboard']);
  }

}
