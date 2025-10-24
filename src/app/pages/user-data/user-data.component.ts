import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserResponse, UserService } from '../../services/user.service';
import { ModalDialogComponent } from '../../shared/components/modal-dialog/modal-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-data',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss',
})
export class UserDataComponent {
  // form!: FormGroup;
  // user: UserResponse | null;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private userService: UserService
  // )
  // {
  //   this.user = this.userService.getUser();
  //   this.form = this.formBuilder.group(
  //     {
  //       nome: [{value: this.user?.nome || '', disabled:true}],
  //       email:[{value: this.user?.email || '', disabled:true}],
  //     }
  //   )
  // }

  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);
  readonly dialog = inject(MatDialog);

  user = this.userService.getUser();
  form = this.formBuilder.group({
    nome: [{ value: this.user?.nome || '', disabled: true }],
    email: [{ value: this.user?.email || '', disabled: true }],
  });

  cadastrarEndereco() {
    // window.alert("Cadastrado endereço")
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      data: {title: 'Adicionar Endereço'},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  cadastrarTelefone() {
    // window.alert('Cadastrado telefone');
    const dialogRef = this.dialog.open(ModalDialogComponent, {
       data: {title: 'Adicionar Telefone'},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
