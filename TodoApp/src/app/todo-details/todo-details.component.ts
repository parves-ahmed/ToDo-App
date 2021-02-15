import { Component, OnInit } from '@angular/core';
import { TodoDetailService } from '../shared/todo-detail.service';
import { TodoDetail } from '../shared/todo-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styles: [
  ]
})
export class TodoDetailsComponent implements OnInit {

  constructor(public service:TodoDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:TodoDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are You Sure You Want Delete This Todo Item?')){
      this.service.deleteTodo(id).subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Deleted Successfully", "Todo App")
        },
        err=>{console.log(err)}
      )
    }
  }
}
