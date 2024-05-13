import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/couter.component";

@NgModule({
    declarations:[
        CounterComponent
    ],
    exports:[
        CounterComponent
    ]
})

export class CounterModule {}