import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service'; 
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/model/list.model';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[] | undefined; 
  tasks: Task[] | undefined; 

  selectedListId:string | undefined; 
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>
    {
      if(params['listId']) {
        this.selectedListId = params['listId']; 
        this.taskService.getTask(params['listId'] ).subscribe((tasks)=>
        {tasks=tasks;})
      }else{
        this.tasks = undefined; 
      } 
    } 
    )
    this.taskService.getLists().subscribe((lists) => {
      lists = lists;
    })
  }

    createNewList(){
      this.taskService.createList('Testing').subscribe((response: any) => {
        console.log(response)
      }); 
    }

}
