import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  dataTest = [
    {
      id: 0,
      name: "Daniel Leonardo Gomez Mora",
      document: "Cedula de ciudadania",
      numberDocument: 1033845963,
      birthDate: "05-12-1980",
      dpto: "Cundinamarca",
      city: "Bogota DC"
    },
    {
      id: 1,
      name: "Emiliano Garzon Castro",
      document: "Cedula extranjera",
      numberDocument: 1033801415,
      birthDate: "11-03-2001",
      dpto: "Medellin",
      city: "Manizales"
    },
    {
      id: 2,
      name: "Mary Angelica Fonseca",
      document: "Registro civil",
      numberDocument: 1048621552,
      birthDate: "29-10-1998",
      dpto: "Tolima",
      city: "Ibague"
    },
    {
      id: 3,
      name: "Emiliano Garzon Castro",
      document: "Registro civil",
      numberDocument: 4655975436,
      birthDate: "03-01-2000",
      dpto: "Valle del cauca",
      city: "Cali"
    },
    {
      id: 4,
      name: "Emiliano Garzon Castro",
      document: "Cedula extranjera",
      numberDocument: 1056984153,
      birthDate: "07-04-1990",
      dpto: "Amazonas",
      city: "Leticia"
    },
    {
      id: 5,
      name: "Jaime Ignacion Puertas",
      document: "Cedula de ciudadania",
      numberDocument: 100005486,
      birthDate: "21-12-2001",
      dpto: "Boyoca",
      city: "Tunja"
    },
    {
      id: 6,
      name: "Claudia Cepedez Arieta",
      document: "Cedula de ciudadania",
      numberDocument: 7259638,
      birthDate: "19-06-1993",
      dpto: "Atlantico",
      city: "Barranquilla"
    },
  ]

  public getData(){
    return this.dataTest;
  }

  public getDepAndCities (): Observable<any>{
    return this.http.get<any>("https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json")
  }

}

