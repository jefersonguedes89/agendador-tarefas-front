import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'password-field',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.scss',
})
export class PasswordFieldComponent {
  hide = signal(true);

  @Input({required: true}) control!: FormControl;


  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }



  get passwordErrors(): string | null {
    const passwordControl = this.control;
    if (passwordControl?.hasError('required')) return 'A senha é obrigatória';
    if (passwordControl?.hasError('minlength')) {
      const req = this.control.errors?.['minlength']?.requiredLength;
      return `A senha deve ter pelo menos 6 caracteres`;
    }
    return null;
  }

}
