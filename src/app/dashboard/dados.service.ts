import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DadosService {

	readonly dados = [
        ['Coxinhas', 60],
        ['Empadinha', 67],
        ['Kibe', 70],
        ['Bolinha', 40],
        ['Enroladinho', 80],
        ['Risoles', 90],
		['cigarrete',50]
    ]

	constructor() {}

	/**
	 * Retorna um observable contendo os dados a serem
	 * exibidos no gráfico.
	 *
	 * @return Observable<any>
	 */
	obterDados(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		});
	}

}
