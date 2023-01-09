import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Resident } from 'src/model/resident';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private http:HttpClient) { }
  url:string = "https://63b59b2f58084a7af39a1cf4.mockapi.io/stanari";

  getResident(){
    return this.http.get<Resident[]>(this.url);
  }

  getResidentByID(id:number){
    return this.http.get<Resident[]>(this.url+'/'+id);
  }

  postResident(resident:Resident){
    return this.http.post(this.url,resident).subscribe(response=>{
      console.log(response);
    })

  }

  putResident(resident:Resident,id:number){
    return this.http.put(this.url+'/'+id,resident).subscribe(response=>{
      console.log(response);
    })
  }

  deleteResident(id:number){
    return this.http.delete(this.url+'/'+id).subscribe(response=>{
      console.log(response);
    })
  }

  addEditResident(resident:Resident){

    if(resident.id!=null)
    {
      this.putResident(resident,resident.id)
    }
    else
    {
      this.postResident(resident)
    }
  }
}
