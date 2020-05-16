import { Component, OnInit } from '@angular/core';
import { NumVerifyService } from '../service/num-verify.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  


  model:any;
  number = 14158586273;
  dispNum = {};
  num: any;
  searchString: Number;

  constructor(private numSrv: NumVerifyService, private http: HttpClient) {
    this.model = {};
  }
  
  searchNum(num){
    this.dispNum = {};
    console.log(this.searchString);
    this.numSrv.getNumbers(num)
    .pipe(first())
    .subscribe(res => {
      this.dispNum = res;
      console.log(this.dispNum);
    });

  }


  ngOnInit(): void {
    // this.searchString = this.number;
    this.searchNum(this.number);

  }

  submit(){
    console.log(this.number);
  }
  

}
