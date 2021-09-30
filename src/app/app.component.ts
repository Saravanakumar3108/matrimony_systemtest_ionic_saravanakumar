import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [  ];
  
  items: string;
  constructor(public translate: TranslateService,private toastr: ToastrService) {
    translate.setDefaultLang('en');
    translate.use('en'); 

    console.log("Welcome");
    // this.toastr.success('Hello world!', 'Toastr fun!');

    translate.get('items').subscribe((text: string) => {
      this.items = text;
      this.appPages = [
        { title: this.items['menu'].DailyRecommendation, url: '/dailyrecommended', icon: 'today-outline' },
      ]
    });
 
  }
}
