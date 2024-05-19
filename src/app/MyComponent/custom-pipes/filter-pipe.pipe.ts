import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(values: any, searchfilter: string): any[] {  
    debugger
    if(!searchfilter)
       return values;
 
       searchfilter = searchfilter.toLowerCase();
    const userArry: any[]=[];
   
    for(let i=0; i< values.length;i++)
    {
      let name:string=values[i].name.toLowerCase();
      if(name.startsWith(searchfilter))
      {
        userArry.push(values[i])
      }
      let gender:string=values[i].gender.toLowerCase();
      if(gender.startsWith(searchfilter))
      {
        userArry.push(values[i])
      }
         }
    return userArry;

    // return values.filter((e:any) => {
    //   return e.name.indexof(searchfilter) >-1;
    // });
  }

}
