import { Component } from '@angular/core';
import { DataService } from '../../Services/data.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent {

  data: any;
  search: any;
  dptoAndcitiesData: any;
  citiesData: any;
  documentData = [
    {
      id:0,
      def: "Cedula de ciudadania"
    },
    {
      id:1,
      def: "Cedula extranjera"
    },
    {
      id:2,
      def: "Registro Civil"
    }
  ]

  indexUpdate : any;
  edit: boolean = false;
  cityTemp: any = [];
  tempData: any;
  name: any;
  document : any;
  numberDocument : any;
  birthDate : any;
  dpto : any;
  city : any;
  constructor(
    private dataService: DataService
  ){}

  ngOnInit(){
    this.data = this.dataService.getData();
    

    this.dataService.getDepAndCities().subscribe(res => {
      if(res){
        this.dptoAndcitiesData = res;
      }
    })
  }

  findCities(){
    for (let i = 0; i < this.dptoAndcitiesData.length; i++ ){
      if(this.dptoAndcitiesData[i].departamento == this.dpto){
        this.citiesData = this.dptoAndcitiesData[i].ciudades;
      }
    }

    let cont = 0;
    this.citiesData.forEach((element: any) => {
      let temp = {
        id: cont,
        ciudad: element
      }
      cont++;
      this.cityTemp.push(temp)
    });
  }

  searchPatient(event: any){
    this.search = event;
  }

  editData(data: any){
    this.edit = true;
    let cont = 0;
    this.data.forEach((element: { name: any; document: any; numberDocument: any; birthDate: any; dpto: any; city: any; }) => {
      if(data === element.numberDocument){
        this.name = element.name;
        this.document =  element.document;
        this.numberDocument = element.numberDocument;
        this.birthDate = element.birthDate;
        this.dpto = element.dpto;
        this.city = element.city;
        this.indexUpdate = cont;
      }
      cont++;
    });
  }

  saveData(){
      this.tempData =
      {
        name: this.name,
        document: this.document,
        numberDocument: this.numberDocument,
        birthDate: this.birthDate,
        dpto: this.dpto,
        city: this.city
      }
    
      this.data.push(this.tempData);
  
    
    this.edit == true ? this.edit = false : '';
    this.cleanData();
  }

  updateData(){
    this.data[this.indexUpdate].name = this.name;
    this.data[this.indexUpdate].document = this.document;
    this.data[this.indexUpdate].numberDocument = this.numberDocument;
    this.data[this.indexUpdate].birthDate = this.birthDate;
    this.data[this.indexUpdate].dpto = this.dpto;
    this.data[this.indexUpdate].city = this.city;

    this.cleanData();
  }

  deleteData(numberDocument: any){
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i].numberDocument == numberDocument){
        this.data.splice(i, 1);
      }
    }
  }

  cleanData(){
    this.tempData = [];
    this.citiesData = [];
    this.cityTemp = []
    this.name = '';
    this.document= '';
    this.numberDocument= '';
    this.birthDate= '';
    this.dpto= '';
    this.city= '';
    this.indexUpdate = '';
  }
}
