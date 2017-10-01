import { Component } from '@angular/core';

import { ListService } from './../list.service';
import { List } from './../list.class';

import { AccordionComponent } from './../accordion/accordion.component';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css']
})
export class SectionComponent {
    //list: List[];
    list: List[] = [{
        id: 1,
        title: 'Windstorm',
        completed: false,
        description: "Nothing"
    },{
        id: 2,
        title: 'Dmart',
        completed: true,
        description: "Nothing"
    }];

    openModal: false;

    deleteList = function(index){
        this.list.splice(index,1);
    }

    showModal = function(){
        this.openModal = true;
    }

    closeModal = function(){
        this.openModal = false;
    }
}