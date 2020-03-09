import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Book } from '../../../api/book';
import { MessageComponent } from '../../../generics/message/message.component';
import { UtilsService } from '../../../utils/utils.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public book: Book = new Book();
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
    genre: new FormArray([], Validators.required),
    language: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required])
  })

  public GENRES: any[] = [
    'Fantasy', "Action", "Suspense", "Romance", "Syfy", "Mystery", "Farce", "Supernatural", "Fantasy novel", "Satirical novel"
  ];

  public LANGUAGES: any[] = [
    'English', "Spanish", "Chinese", "Portuguese", "France"
  ];

  public message = "Salvo com sucesso!";

  constructor(
    private utilsService: UtilsService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    if (this.productFormGroup.valid) {
      const bookToSave: Book = this.productFormGroup.value as Book;

      this.utilsService.saveBook(bookToSave)
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

    const productCheckArray: FormArray = this.productFormGroup.get('genre') as FormArray;

    if (event.checked) {
      productCheckArray.push(new FormControl(event.source.value));
      console.log(productCheckArray);
    } else {
      let i: number = 0;

      productCheckArray.controls.forEach((formControl: FormControl) => {
        if (formControl.value === event.source.value) {
          productCheckArray.removeAt(i);
        }

        i++;
      })
    }
  }

}
