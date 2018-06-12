import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeVagasComponent } from './home-vagas.component';
import { DetalhesComponent } from './detalhes.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const rotas: Routes = [
    {
        path: '', component: PublicComponent, children: [
			{ path: 'cadastro/cadastroVaga', component: CadastroComponent},
			{ path: 'detalhes', component: DetalhesComponent},
            { path: '', component: HomeVagasComponent}
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule { }