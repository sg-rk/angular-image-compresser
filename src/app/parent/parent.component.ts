import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { DataService } from "../data.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child
  constructor(private data: DataService) { }

  imgResultAfterCompress: string;

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  receiveMessage($event) {
    this.imgResultAfterCompress = $event.imgResultAfterCompress;    
  }
}