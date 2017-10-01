import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    console.log(this.renderer);
    console.log(this.eleRef);
  }
  ngOnInit() {
    
  }
  ngAfterViewInit() {
    let itemBody = this.eleRef.nativeElement.getElementsByClassName('itemBody');
    let itemHeader = this.eleRef.nativeElement.getElementsByClassName('itemHeader');
    var addClickEvent = function(ele){
      ele.onclick = function(){
        console.log(ele.nextElementSibling);
        if(ele.nextElementSibling.className.indexOf('hidden') >= 0){
          ele.nextElementSibling.className = ele.nextElementSibling.className.replace(' hidden', '');
        } else {
          ele.nextElementSibling.className = ele.nextElementSibling.className + ' hidden';
        }
      }
    }
    for(var i = 0; i < itemBody.length; i++) {
      console.log(itemBody[i].className);
      itemBody[i].className = itemBody[i].className + ' hidden';
    }
    for(var i = 0; i < itemHeader.length; i++) {
      console.log(itemHeader[i]);
      addClickEvent(itemHeader[i]);
    }
  }
}