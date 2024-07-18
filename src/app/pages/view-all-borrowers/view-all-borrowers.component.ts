import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-all-borrowers',
  templateUrl: './view-all-borrowers.component.html',
  styleUrl: './view-all-borrowers.component.css'
})
export class ViewAllBorrowersComponent implements OnInit{

  private http;
  public borrowerList:any = {};

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }
  ngOnInit(): void {

    this.http.get("http://localhost:8081/user/getAllUser").subscribe(data =>{
      this.borrowerList = data;
      console.log(data);
    })
  }

  public selectBorrower:any = {};

  selectedBorrower(borrower:any){
    this.selectBorrower = borrower;
  }

  deleteBorrower(){
    this.http.delete(`http://localhost:8081/user/deleteUser/${this.selectBorrower.studentId}`).subscribe(data =>{
      console.log(data);
    })
  }

  loadBorrowers():void{
    this.http.get("http://localhost:8081/user/getAllUser").subscribe(data =>{
      this.borrowerList = data;
    })
  }

  updateBorrower(){
    this.http.post("http://localhost:8081/user/updateUser", this.selectBorrower).subscribe(data=>{
      console.log(data);
    })
  }

student = {
  studentId:"",
  studentName:"",
  email:"",
  country:"",
  phoneNumber:"",
  remark:""
};


  

}
