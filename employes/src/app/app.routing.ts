import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//Componentes
import { AppComponent } from './app.component';
import { SaveComponent } from './save/save.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
    {path: '', component: ListComponent},
    {path: 'save', component: SaveComponent},
    {path: 'update', component: UpdateComponent},
    {path: 'list', component: ListComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
