import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


interface DiologData {
  title: string
}

@Component({
  selector: 'app-modal-dialog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.scss',
})
export class ModalDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ModalDialogComponent>);
  readonly data = inject<DiologData>(MAT_DIALOG_DATA);


  onCancel(): void {
    this.dialogRef.close();
  }
}
