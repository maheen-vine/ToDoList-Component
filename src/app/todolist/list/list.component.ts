import { Component, Input, SimpleChanges } from '@angular/core'

@Component({

    selector:'app-list',
    templateUrl:'./list.component.html',
    styleUrls:['./list.component.css']
})


export class ListComponent{
@Input() childstring:string;
additem:string[]=[];
localitem:string;
parselist:string[];
chng:any;
cur:any;

ngOnChanges(changes:SimpleChanges){
  for(let propName in changes){

    this.chng=changes[propName];
    this.cur=JSON.stringify(this.chng.currentValue);
    if(this.cur!=undefined){
      this.additem.push(`${this.cur}`);
      localStorage.setItem("localitems",JSON.stringify(this.additem));}
  }
}

Refresh(){

    this.parselist=JSON.parse(localStorage.getItem("localitems"));
     if(this.parselist!=null)
     this.additem=this.parselist;
       }

  Update(){
    this.parselist=JSON.parse(localStorage.getItem("localitems"));
  }

  
  Delete(i:number){
    this.additem.splice(i,1);
    localStorage.setItem("localitems", JSON.stringify(this.additem));
    this.parselist=JSON.parse(localStorage.getItem("localitems"));
    this.Update();
  }


}
