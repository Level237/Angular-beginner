export class AppareilService{


  appareils=[
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
  }
  switchOfAll(){
    for(let Appareil of this.appareils){
      Appareil.status='eteint';
    }
  }
  switchOnOne(index:number){
    this.appareils[index].status='allumé';
  }
  switchOfOne(index:number){
    this.appareils[index].status='eteint';
  }
}
