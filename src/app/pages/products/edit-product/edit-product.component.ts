import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../../api/book';
import { MessageComponent } from '../../../generics/message/message.component';
import { UtilsService } from '../../../utils/utils.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public productCheckArray = [];
  public firstEvent: boolean = false;
  public book: Book;
  public productFormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]
    ),
    author: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]
    ),
    language: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required])
  });

  public GENRES: any[] = [
    'Fantasy', "Action", "Suspense", "Romance", "Syfy", "Mystery", "Farce", "Supernatural", "Fantasy novel", "Satirical novel"
  ];

  public LANGUAGES: any[] = [
    'English', "Spanish", "Chinese", "Portuguese", "France"
  ];

  public message = "Atualizado com sucesso!";
  public id: string;

  constructor(
    private utilsService: UtilsService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.utilsService.getBookById(this.id).subscribe((result) => {
      this.book = result;

      this.productFormGroup.setValue({
        id: this.book.id,
        name: this.book.name,
        quantity: this.book.quantity,
        language: this.book.language,
        author: this.book.author
      })

      this.productCheckArray = this.book.genre;
    })
  }

  onSubmit(): void {

    if (this.productFormGroup.valid) {
      const bookToSave: Book = this.productFormGroup.value as Book;
      bookToSave['genre'] = this.productCheckArray;
      
      this.utilsService.saveEditedBook(bookToSave.id, bookToSave)
        .then(
          (result) => {
            if (result) {
              const result = this._snackBar.openFromComponent(MessageComponent, {
                duration: 1000, data: this.message
              })

              result.afterDismissed().subscribe(() => {
                this.utilsService.redirectToPage('products');
              })

            }
          }
        )
    }
  }

  onCheckChange(event): void {
    
    if (event.checked) {
      this.productCheckArray.push(event.source.value);
    } else {
      
      this.productCheckArray.forEach((value: string, index: number) => {
        
        if (value.toLowerCase() === event.source.value.toLowerCase()) {
          this.productCheckArray.splice(index, 1);
        }
      })
    }
    
  }

  public findCheckedItem(item: string): boolean {

    if (this.book) {
      return this.book.genre.find((v: string) => {
        return v.toLowerCase() === item.toLowerCase()  
      });
    }

    return false;
  }

}
