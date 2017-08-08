import { TodoServiceProvider } from './../../providers/todo-service/todo-service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, AlertController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   todos: Observable<any>;
 
  constructor(public navCtrl: NavController, public TodoServiceProvider: TodoServiceProvider, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.loadTodos();
  }
 
  loadTodos() {
    this.todos = this.TodoServiceProvider.getTodos();
  }
 
  addTodo() {
    let prompt = this.alertCtrl.create({
      title: 'Add Todo',
      message: "Enter the text for your new todo",
      inputs: [
        {
          name: 'text',
          placeholder: 'Buy Milk'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.TodoServiceProvider.addTodo(data.text).subscribe(data => {
              this.showToast(data.msg);
              this.loadTodos();
            });
          }
        }
      ]
    });
    prompt.present();
  }
 
  removeTodo(id) {
    this.TodoServiceProvider.deleteTodo(id).subscribe(data => {
      this.showToast(data.msg);
      this.loadTodos();
    })
  }
 
  private showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
