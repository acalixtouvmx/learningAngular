import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class MainPageComponent {

    constructor( private dbzService: DbzService){}

    
    public get characters() : Character[] {
        // Los tres puntos ... crea una copia de los datos"characters" del servicio 
        return [...this.dbzService.characters];
    }

    public onDeleteCharacter(id:string): void{
        this.dbzService.deleteCharacterById(id);
    }

    public onNewCharacter( character:Character): void{
        this.dbzService.addCharacter(character);
    }
    

}