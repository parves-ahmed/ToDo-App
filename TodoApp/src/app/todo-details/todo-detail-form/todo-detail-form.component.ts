import { Component, OnInit } from '@angular/core';
import { TodoDetailService } from 'src/app/shared/todo-detail.service';
import { NgForm } from '@angular/forms';
import { TodoDetail } from 'src/app/shared/todo-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-detail-form',
  templateUrl: './todo-detail-form.component.html',
  styles: [
  ]
})
export class TodoDetailFormComponent implements OnInit {

  constructor(public service:TodoDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postTodos().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Submitted Successfully", "Todo App")
      },
      err=>{console.log(err);}
    )
  }

  updateRecord(form:NgForm){
    this.service.putTodo().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Updated Successfully", "Todo App")
      },
      err=>{console.log(err);}
    )
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new TodoDetail();
  }

}
