import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private WebRequestService: WebRequestService) { }

  createList(title: string) {
    return this.WebRequestService.post('list', { title }); 
  }

  getLists() {
    return this.WebRequestService.get('lists'); 
  }

  getTask(listId: string){
    return this.WebRequestService.get(`lists/$(listId)/tasks`);
  }

  updateLists(id: string, title: string){
    return this.WebRequestService.patch(`lists/${id}`, { title } ); 
  }
}
