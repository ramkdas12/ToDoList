import { Component } from '@angular/core';

import { ListService } from './../list.service';
import { List } from './../list.class';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css']
})
export class SectionComponent {
    list: List[];
    
}