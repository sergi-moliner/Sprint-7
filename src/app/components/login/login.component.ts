import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          console.log('Login successful');
          this.errorMessage = null;
        },
        error: (err) => {
          this.errorMessage = err.error?.error || 'Invalid credentials';
          console.error('Login error:', err);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all fields correctly';
    }
  }
}
