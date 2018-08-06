import { Component, OnInit } from '@angular/core';
import { MockService } from '../ph/mock.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  msg;
  
  constructor(private svc : MockService) { 
    
  }

  ngOnInit() {
    this.msg = this.svc.getMsg();
  }

}
