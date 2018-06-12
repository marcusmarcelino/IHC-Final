import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: 'cadastro.component.html'
})
export class CadastroComponent implements OnInit {
    constructor(
	private route: ActivatedRoute,
	private router: Router) {
	}
	

    ngOnInit() {}
}