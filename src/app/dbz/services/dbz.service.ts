import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7000
    }
  ];

  addCharacter(character:Character):void{
    // ...character Trae todas las propiedades del objeto
    const newCharacter: Character = { ...character };
    this.characters.push(newCharacter);
    console.log(this.characters);
    
  }

  // Delete(index:number){
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(uid:string){
    this.characters = this.characters.filter( character => character.id !== uid);
  }

}
