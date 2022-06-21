import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit, AfterViewInit {

  @Input() placeholder: string="";
  @Input() name: string = "default";
  @Input() id: string = "defaultId";
  @Input() maxLength: string | number | undefined= '';
  @Input() isDisabled: boolean = false;

  @ViewChild('refArea') refArea: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.refArea);

  }

  ngAfterViewInit() {
    this.toggleScroll()
  }

  private toggleScroll(){

    this.refArea?.nativeElement.addEventListener('keyup', function (e: { target: any; }) {
      let target = e.target;
      target.scrollTop > 0 ? target.style.overflowY = 'visible' : target.style.overflowY = 'hidden';

    })
  }
}
