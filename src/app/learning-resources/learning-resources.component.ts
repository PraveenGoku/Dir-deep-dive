import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';
import { LogDirective } from '../log.directive';

@Component({
	selector: 'app-learning-resources',
	templateUrl: './learning-resources.component.html',
	styleUrl: './learning-resources.component.css',
	standalone: true,
	imports: [SafeLinkDirective,LogDirective]
})
export class LearningResourcesComponent {
	heading = 'Learning Resources';
	subheading = 'Helpful resources you might want to use in addition to this course.';
	// stringArray: string[] = ['value 1', 'value 2', 'value 3'];
	a:string[] = ['Angular Documentation','Accenture','Google'];

}
