import { Component, OnInit } from '@angular/core';
import { Book } from '../../api/book';
import { UtilsService } from '../../utils/utils.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public book: Book = new Book();
  public displayedColumns: String[];
  public products$: Book[];

  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.initComponents();
  }

  public initComponents(): void {
    this.initDataTable();
  }

  public async initDataTable(): Promise<void> {
    this.displayedColumns = [
      'id', 'name', 'author', 'genre', 'language', 'quantity', 'actions'
    ]

    this.products$ = await this.utilsService.getBooks().toPromise();
  }

  public redirectToPage(page: string):void{
    this.utilsService.redirectToPage(page);
  }
}
