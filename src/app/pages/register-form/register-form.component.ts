import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit{
  private http;
  public countiesList:any;

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(){
    this.http.get("https://restcountries.com/v3.1/all").subscribe(data=>{
      this.countiesList = data;
    })
  }
  public countryCode = "";

  seletedCountry(country:any){
    this.countryCode = country.idd.root+country.idd.suffixes+" ";
  }

}
