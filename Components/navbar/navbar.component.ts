import { Component, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnChanges{

  @Output() searchEvent = new EventEmitter<string>();
  search : any ='';

  construnctor() {}

  ngOnChanges(changes: SimpleChanges): void {
  }

  findPatient(data: any) {
    this.searchEvent.emit(data);
  }
}
