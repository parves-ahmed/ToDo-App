import { Injectable } from '@angular/core';
import { TodoDetail } from './todo-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:5000/api/TodoItems'
  formData:TodoDetail = new TodoDetail();
  list : TodoDetail[];

  postTodos(){
    var isCompleteVal = String(this.formData.isComplete)
    console.log(isCompleteVal)
    this.formData.isComplete = isCompleteVal == "true" ? true : false
    return this.http.post(this.baseURL, this.formData);
  }

  putTodo(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  deleteTodo(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res=> this.list = res as TodoDetail[]);
  }
}
