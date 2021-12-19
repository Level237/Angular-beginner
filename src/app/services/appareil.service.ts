import { Subject } from "rxjs";

export class AppareilService{

 appareilSubject=new Subject<any[]>();
 private appareils=[
    {
      id:1,
      name:'Machine a laver',
      status:'eteint'
    },
    {
      id:2,
     name:'Television',
     status:'allumé',
   },
   {
     id:3,
     name:'Ordinateur',
     status:'eteint'
   }
  ];

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilById(id:number):any{
    const appareil=this.appareils.find(
      (appareilObject)=>{
        return appareilObject.id === id;
      }
    )
    return appareil;
  }

  switchOnAll(){
    for(let appareil of this.appareils){
      appareil.status='allumé';
    }
    this.emitAppareilSubject();
  }
  switchOfAll(){
    for(let Appareil of this.appareils){
      Appareil.status='eteint';
    }
    this.emitAppareilSubject();
  }
  switchOnOne(index:number){
    this.appareils[index].status='allumé';
    this.emitAppareilSubject();
  }
  switchOfOne(index:number){
    this.appareils[index].status='eteint';
    this.emitAppareilSubject();
  }
}
