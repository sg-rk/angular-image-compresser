import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() btnTitle: string;
    @Input() classList: string;
    @Output() messageEvent = new EventEmitter<object>();

    constructor(private imageCompress: NgxImageCompressService, private ds: DataService) { }

    imgResultAfterCompress: string;

    compressFile() {
      this.imageCompress.uploadFile().then(({ image, orientation }) => {
        this.imageCompress.compressFile(image, orientation, 50, 50).then(
          result => {
            this.imgResultAfterCompress = result;
            console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
            let res  = {
              // childMessage: this.childMessage, 
              imgResultAfterCompress : this.imgResultAfterCompress
            }          
            this.messageEvent.emit(res);
          }
        );  
      });
    }

    ngOnInit() {
    }

}
