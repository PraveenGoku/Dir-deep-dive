import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LogDirective } from '../log.directive';

@Component({
	selector: 'app-auth',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.css',
	hostDirectives: [LogDirective]
})
export class AuthComponent {
	email = '';
	password = '';
	// stringArray: string[] = ['value 1', 'value 2', 'value 3'];
	a:string[] = ['E-Mail','Password','Login'];
	private authService = inject(AuthService);

	onSubmit() {
		this.authService.authenticate(this.email, this.password);
	}
}
