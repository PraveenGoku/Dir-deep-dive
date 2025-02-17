import { Component } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthDirective } from './auth/auth.directive';
import { LogDirective } from './log.directive';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports: [AuthComponent, LearningResourcesComponent,AuthDirective],
})
export class AppComponent {
	
	// stringArray: string[] = ['value 1', 'value 2', 'value 3'];
	a:string[]=['Only admins should see this!','Regular users should see this!','Guest users should see this!'];

}
