import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
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


export interface DiologField {
  name: string,
  label: string,
  value?: string | number,
  type?: string,
  button?: {icon: string, callback: (value: string, dialogRef: MatDialogRef<ModalDialogComponent>) => void}
  validators?: any[]
}

interface DiologData {
  title: string,
  formConfig: DiologField[]
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
    MatDialogTitle,
    ReactiveFormsModule,
    MatIconModule
],
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.scss',
})
export class ModalDialogComponent {
  readonly formBuilder = inject(FormBuilder);
  readonly dialogRef = inject(MatDialogRef<ModalDialogComponent>);
  readonly data = inject<DiologData>(MAT_DIALOG_DATA);

  fields: DiologField[] = this.data.formConfig;

  private buildControls(): Record<string, any> {
    const controls: Record<string, any> = {}
    
    this.fields.forEach(field => {
      controls[field.name] = [field.value ?? '', field.validators || []]
    });
    return controls;

  }

  form: FormGroup = this.formBuilder.group(this.buildControls());

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.form.value)
  }
}
