import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PasswordFieldComponent } from '../../shared/components/password-field/password-field.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    PasswordFieldComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(6)]],
    });
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get fullNameErrors(): string | null {
    const fullNameControl = this.form.get('fullName');
    if (fullNameControl?.hasError('required')) {
      return 'O nome completo é obrigatório';
    }
    if (fullNameControl?.hasError('minlength')) {
      return 'Cadastre um nome com mais de 3 letras';
    }
    return null;
  }

  get emailErrors(): string | null {
    const emailControl = this.form.get('email');
    // console.log(emailControl)
    if (emailControl?.hasError('required')) {
      return 'O email é obrigatório';
    }
    if (emailControl?.hasError('email')) {
      return 'Cadastre um email válido';
    }
    return null;
  }



  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Formulário submetido', this.form.value);
  }
}
