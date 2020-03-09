import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../utils/utils.service';
import { DeleteComponent } from '../delete/delete.component';
import { MessageComponent } from '../message/message.component';
import { Book } from './../../api/book';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() book: Book;
  @Input() path: string;
  @Input() value: string;
  @Input() deleteAction: boolean;

  public redirectPage: string;
  public message = "Removido com sucesso!";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    public utilsService: UtilsService,
    public _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.redirectPage = this.path + this.value;
  }

  public redirectToPage(): void {
    this.router.navigate([this.redirectPage], { relativeTo: this.route });
  }

  public openDialog(): void {
    const deleteDialog = this.dialog.open(DeleteComponent, {
      width: '300px',
      data: {
        book: this.book
      }
    })

    deleteDialog.afterClosed().subscribe(result => {
      if (result) {
        this.utilsService.deleteBook(result).then(
          (result) => {
            if (result) {
              const result = this._snackBar.openFromComponent(MessageComponent, {
                duration: 1000, data: this.message
              })

              result.afterDismissed().subscribe(() => {
                window.location.reload();
              })

            }
          })
      }
    })
  }
}
