import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import { ToastrService } from 'ngx-toastr';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dailyrecommended',
  templateUrl: './dailyrecommended.page.html',
  styleUrls: ['./dailyrecommended.page.scss'],
})
export class DailyrecommendedPage implements OnInit {  
  // @ViewChild('slides') slides: IonSlides;
  @ViewChild('slides', {static: true}) slides: IonSlides;
 
  drdata: any = [];
  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 5,
    speed: 400,
    firstSlides: true,
    pagination : false
  }
  header: string;
  pageIndex: any;
  activeIndex: number =0;
  stopslide : number = 1;
  selectshort: boolean = false;
  constructor(private router: Router,public translate: TranslateService,private toastr: ToastrService) { 
    translate.get('items.DailyRecommendation').subscribe((text: string) => {
      var drdatas = text;
      this.header = drdatas;
      this.drdata = drdatas[0];
    });
    console.log("this.drdata",this.drdata);

    
   
    // this.toastr.success("Welcome"); 
    // this.toastr.error('Error');
  }

  ngOnInit() {
  }
  interested(a,x){
  

    if(x == 1){
     this.slides.slideNext();
    }
  }
  notinterested(b,x){
   // this.toastr.success("Not Interested");
    
    if(x == 2){
      // this.slides.slideNext();
      this.slides.slidePrev();
     }
  }
  shortlisted(c,x){
   // this.toastr.success("Shortlisted");
   if(x == 3){
    this.slides.slideNext();
   }
  }

  goback(){
    this.router.navigate(['/dashboard']);
  }

  slideChanged(e: any, val) {
    console.log("val",val);
      
      if(val == 1){
        this.interested('',val);
        this.selectshort = false;
      }
      else if(val == 2){
        this.notinterested('',val);
        this.selectshort = false;
      }
      else if(val == 3){
        this.shortlisted('',val);
        this.selectshort = true;
      }
      else if(val == 0){
      
         this.slides.getActiveIndex().then((index: number) => {  

          if(this.activeIndex <= index){
            // console.log("ok this.activeIndex",this.activeIndex);
              this.activeIndex = index; 
              if(this.selectshort == true){
                this.toastr.success("Shortlisted");
              }      
              else{
                this.toastr.success("Interested");
              }                 
          }
          else if(this.activeIndex > index){
            // console.log("else this.activeIndex",this.activeIndex);
            this.activeIndex = index;            
            this.toastr.success("Not Interested");
          }            
        });
      }
        
}

  async onSlideChange(id) {
    
    console.log(id);
    // console.log();
    // this.slider.slideTo(4, 0);
    // this.slides.slideNext();
    //this.pageIndex = await this.slides.getActiveIndex();
    
    // this.pageIndex = await this.slides.getActiveIndex();
    // this.slides.getActiveIndex();
  }

  public async ionSlideDidChange(): Promise<void> {
    console.log("dddd");
    this.slides.getActiveIndex();
    // const index = await this.slides.getActiveIndex();

  }
  next() {
    this.slides.slideNext();
  }
  
  prev() {
    this.slides.slidePrev();
  }

  move(slides, x){
    console.log(slides);
    
    slides.slideTo(x);
}
}
