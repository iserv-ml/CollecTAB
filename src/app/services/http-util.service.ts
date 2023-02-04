import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

/**
 * Classe responsável por fazer as operações e gerencia com o token de autenticação e usuários autenticados
 * @author Djeison 13 de fev de 2020 
 */
@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  /**
   * Método responsável por recuperar o token a adcionar o cabeçalho da requisição
   * @author Djeison 13 de fev de 2020 
   */  
  headers() {
  	let httpHeaders: HttpHeaders = new HttpHeaders();
	
  	if (localStorage['token']) {
  	  httpHeaders = httpHeaders.set(
  	  	'Authorization', 'Bearer ' + localStorage['token']
  	  );
  	}
    
    return { headers: httpHeaders };
  }

  /**
   * Método responsável por fazer a requisição para o web service para buscar todos os registros da entidade de manipulação
   * @author Djeison 13 de fev de 2020 
   * @returns idUsuario
  */
  obterIdUsuario(): string {
  	if (!localStorage['token']) {
  	  return '';
  	}
  	const dadosUsuario = this.obterDadosUsuario();
  	return dadosUsuario ? dadosUsuario.id : '';
  }

  /**
   * Método responsável por obter os dados do usuário contidos no token de autenticação
   * @author Djeison 13 de fev de 2020 
   * @returns usuario
  */ 
  obterDadosUsuario() {
    if (!localStorage['token']) {
      return '';
    }
    return JSON.parse(atob(localStorage['token'].split('.')[1]));
  }

  /**
   * Método responsável por obter o perfil do usuário
   * @author Djeison 13 de fev de 2020 
   * @returns perfil
   */ 
  obterPerfil(): string {
    if (!localStorage['token']) {
      return '';
    }
    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.role : '';
  }  
}
