import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit{
  private http;
  public bookList:any = {}; 

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadAllBook();
    console.log("Hello world");
  }

  loadAllBook():void{
    this.http.get('http://localhost:8080/book/getBooks').subscribe((data)=>{
      this.bookList = data;
      console.log(this.bookList);
    });
  }

  public selectBook:any;

  deleteBook(){
    this.http.delete(`http://localhost:8080/book/${this.selectBook.id}`).subscribe(data=>{
      console.log(data);
      this.loadAllBook();
    });
    
  }

  selectedBook(book:any){
    console.log(book.id);
    this.selectBook = book;
  }
}
