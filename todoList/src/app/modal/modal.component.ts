import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { List } from '../list.class';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
    @Input() list: List;
    @Input() openModal: Boolean;
    @Output() openModalStatusChange = new EventEmitter<Boolean>();

    item = new List();

    ngOnInit(): void {

    }

    updateList = function () {
        this.item.id = this.list.length;
        this.item.completed = false;
        var test = this.item;
        this.list.push(test);
        this.item = {};
        this.openModal = false;
        this.openModalStatusChange.emit(this.openModal);
    }
}