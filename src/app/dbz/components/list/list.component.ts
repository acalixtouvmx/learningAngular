import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(){}

  @Input()
  public characterList: Character[] =[
    { 
      id: uuid(),
      name: 'Trunks',
      power: 100
    }
  ]

  @Output() public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string):void{ 
    this.onDelete.emit(id);
  }

}
