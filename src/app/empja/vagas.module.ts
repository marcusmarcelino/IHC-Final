import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeVagasComponent } from './home-vagas.component';
import { DetalhesComponent } from './detalhes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PublicRoutingModule
    ],
    declarations: [
        PublicComponent,
        HomeVagasComponent,
		DetalhesComponent,
		CadastroComponent
    ],
    providers: [
    ],
})
export class VagasModule { }