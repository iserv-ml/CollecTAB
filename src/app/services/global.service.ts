// import { BaseResourceModel } from '../model/base-resource.model';
import { Observable, throwError } from 'rxjs';
// import { environment as env } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
// import currencyFormatter from "currency-formatter";

/**
 * Classe responsável por conter metodos e atributos comuns as classes de serviço
 * @author Djeison 13 de fev de 2020 
 */
export abstract class GlobalService {

    protected http: HttpClient;

    /**
     * Construtor receber os parametros necessários para operações gerais e fazer injeções de dependencias
     * @author Djeison 13 de fev de 2020 
     * @param entidade
     * @returns Observable<T[]>
     */    
    constructor(
        protected path: string,
        protected injector: Injector
    ) {
        this.http = injector.get(HttpClient);
    }

    /**
     * Método responsável por fazer a requisição para o web service para buscar todos os registros da entidade de manipulação
     * @author Djeison 13 de fev de 2020 
     * @param entidade
     * @returns Observable<T[]>
     */
    // getAll(): Observable<T[]>{
        // return this.http.get(env.baseApiUrl + this.path).pipe(
    //         catchError(this.handleError),
    //         map(this.jsonDataToEntidades)
    //     );
    // }

  /**
   * Método responsável por fazer a requisição para o web service para consultar a entidade por id
   * @author Djeison 13 de fev de 2020 
   * @param id
   * @returns Observable<T>
  */
    // getById(id: number): Observable<T> {
    //     const url = `${env.baseApiUrl+this.path+'/id'}/${id}`;
    //     return this.http.get(url).pipe(
    //         catchError(this.handleError),
    //         map(this.jsonDataToEntidade)
    //     );
    // }

    /**
     * Método responsável por fazer a requisição para o web service para salvar a entidade passada por parametro
     * @author Djeison 13 de fev de 2020 
     * @param entidade
     * @returns Observable<T>
    */
    // salvar(entidade: T): Observable<T> {
    //     return this.http.post(env.baseApiUrl + this.path, entidade).pipe(
    //         catchError(this.handleError),
    //         map(this.jsonDataToEntidade)
    //     );
    // }

    /**
     * Método responsável por fazer a requisição para o web service para editar a entidade passada por parametro
     * @author Djeison 13 de fev de 2020 
     * @param entidade
     * @returns Observable<T>
    */
    // editar(entidade: T): Observable<T> {
    //     return this.http.put(env.baseApiUrl + this.path, entidade).pipe(
    //         catchError(this.handleError),
    //         map(this.jsonDataToEntidade)
    //     );
    // }

    /**
     * Método responsável por fazer a requisição para o web service para deletar a entidade referente ao id passado por parametro
     * @author Djeison 13 de fev de 2020 
     * @param id
     * @returns Observable<T>
    */
    // delete(id: number): Observable<any> {
    //     const url = `${env.baseApiUrl+this.path}/${id}`;
    //     return this.http.delete(url).pipe(
    //         catchError(this.handleError),
    //         map(() => null)
    //     );
    // }

    /**
     * Método responsável por remover um elemento de uma lista
     * @author Djeison 13 de fev de 2020 
     * @param entidade
     * @param entidades
     * @returns T[]
    */
    // removerElementoLista(entidades: T[], entidade: T): T[] {
    //     const entidadesAux: T[] = [];
    //     entidades.forEach(element => {
    //         if(element.id != entidade.id)
    //         entidadesAux.push(element)
    //     });
    //     return entidadesAux;
    // }    

    /**
     * Método responsável por retornar o arquivo json do array de entidades requisitadas
     * @author Djeison 13 de fev de 2020 
     * @param jsonData
     * @returns T[]
    */
    // abstract jsonDataToEntidades(jsonData: any[]): T[];

    /**
     * Método responsável por retornar o arquivo json da entidade requisitada
     * @author Djeison 13 de fev de 2020 
     * @param jsonData
     * @returns T
    */
    // abstract jsonDataToEntidade(jsonData: any): T;

    /**
     * Método responsável por tratar os erros provinientes das requisições ao web service
     * @author Djeison 13 de fev de 2020 
     * @param error
     * @returns Observable<any>
    */
    protected handleError(error: any): Observable<any> {
        console.log('error: '+JSON.stringify(error));
        console.log("Erro na requisição => ", error);
        return throwError(error);
    }

    /**
     * Método formatar o valor com sifrão R$
     * @author Djeison 13 de fev de 2020 
     * @param valor
     * @returns valorFormatado
    */    
    // formatarValorMoeda(valor: number): string {
    //     let valorAux: number = 0;
    //     valorAux = this.retirarFormatacaoNumero(valor);
    //     return currencyFormatter.format(valorAux, { code: 'BRL' });
    // }

    /**
     * Método formatar o valor sem sifrão R$
     * @author Djeison 13 de fev de 2020 
     * @param valor
     * @returns valor
    */    
    // formatarValor(valor: number): string {
    //     let valorAux: string = '';
    //     valorAux = this.formatarValorMoeda(valor);
    //     return valorAux.replace('R$','');
    // }

    /**
     * Método remover formatação do numero
     * @author Djeison 13 de fev de 2020 
     * @param valor
     * @returns valor
    */    
    // retirarFormatacaoNumero(valor: number): number {
    //     return currencyFormatter.unformat(valor, { code: 'BRL'});
    // }
}