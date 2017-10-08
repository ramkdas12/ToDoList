import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  animations: [
    trigger('accordionState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(0)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AccordionComponent implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    console.log(this.renderer);
    console.log(this.eleRef);
  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    let toggleState = function(ele) {
      ele.state = ele.state === 'active' ? 'inactive' : 'active';
    }
    let itemBody = this.eleRef.nativeElement.getElementsByClassName('itemBody');
    let itemHeader = this.eleRef.nativeElement.getElementsByClassName('itemHeader');
    var addClickEvent = function (ele) {
      ele.onclick = function () {
        console.log(ele.nextElementSibling);
        toggleState(ele.nextElementSibling);
        console.log(ele.nextElementSibling.calculatedHeight);
        console.log(ele.nextElementSibling.attributes);
        var shownElements = ele.nextElementSibling.getElementsByClassName('shown');
        if (ele.nextElementSibling.className.indexOf('collapsed') >= 0) {
          ele.nextElementSibling.attributes.style.value = 'height: ' + ele.nextElementSibling.calculatedHeight * shownElements.length + 'px';
          ele.nextElementSibling.className = ele.nextElementSibling.className.replace(' collapsed', ' expanded');
          //ele.nextElementSibling.style.transition = 'height 2 ease-in-out';
        } else {
          ele.nextElementSibling.attributes.style.value = 'height: 0px';
          ele.nextElementSibling.className = ele.nextElementSibling.className.replace(' expanded', ' collapsed');
          //ele.nextElementSibling.style.transition = 'height 2 ease-in-out';
        }
        //console.log(ele.nextElementSibling);
      }
    }
    for (var i = 0; i < itemBody.length; i++) {
      itemBody[i].calculatedHeight = itemBody[i].offsetHeight;
      itemBody[i].className = itemBody[i].className + ' collapsed';
      itemBody[i].style.height = 0;
      //itemBody[i].style.transition = 'height 2 ease-in-out';
      //console.log(itemBody[i].attributes);
      itemBody[i].attributes['[@accordionState]'] = 'inactive';
      //console.log(itemBody[i].attributes);
      itemBody[i]['@accordionState'] = 'inactive';
    }
    for (var i = 0; i < itemHeader.length; i++) {
      //console.log(itemHeader[i]);
      addClickEvent(itemHeader[i]);
    }
  }
}