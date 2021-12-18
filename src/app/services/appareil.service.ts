export class AppareilService{


  appareils=[
    {
      name:'Machine a laver',
      status:'eteint'
    },
    {
     name:'Television',
     status:'allumé',
   },
   {
     name:'Ordinateur',
     status:'eteint'
   }
  ];

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
