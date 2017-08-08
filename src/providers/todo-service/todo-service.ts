
import { AppSettingsProvider } from '../app-settings/app-settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {

 
  apiUrl = this.AppSettingsProvider.getApiUrl();
 
  constructor(public http: Http, public AppSettingsProvider: AppSettingsProvider) {
  }
 
  public getTodos() {
    return this.http.get(this.apiUrl + 'todos')
      .map(response => response.json().result);
  }
 
  public addTodo(newTodo) {
    return this.http.post(this.apiUrl + 'todos', {'text': newTodo})
      .map(response => response.json());
  }
 
  public deleteTodo(todoId) {
    return this.http.delete(this.apiUrl + 'todos/' + todoId)
      .map(response => response.json());
  }

}
