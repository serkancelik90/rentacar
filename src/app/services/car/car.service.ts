import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/helpers/constans';
import { Car } from 'src/app/models/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private httpClient:HttpClient) { }
  
  getCars():Observable<ListResponseModel<Car>>{
  return this.httpClient.get<ListResponseModel<Car>>(Constants.apiUrl +"car/getcarsdetails");
 }
 getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
return this.httpClient.get<ListResponseModel<Car>>(Constants.apiUrl+"car/getcarsbybrandid?brandId="+brandId)
 }
 getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
  return this.httpClient.get<ListResponseModel<Car>>(Constants.apiUrl+"car/getcarsbycolorid?colorId="+colorId)
   }
}
