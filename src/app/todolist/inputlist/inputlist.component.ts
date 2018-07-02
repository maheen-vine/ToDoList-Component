import { Component,Output, EventEmitter } from '@angular/core'

@Component({

    selector:'app-input-list',
    templateUrl:'./inputlist.component.html',
    styleUrls:['./inputlist.component.css']
})


export class InputListComponent{
  @Output() userstring=new EventEmitter<string>();
  item="Enter Item";



    DisableButton(){
        if(this.item=='Enter Item'|| this.item=='' ){return false;}
        else{return true;}
        }

        AddItem(){
           this.userstring.emit(this.item);
            this.item='';
      
       
        
         }
          
}