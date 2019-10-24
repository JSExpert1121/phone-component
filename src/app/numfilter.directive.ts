import { Directive, HostListener } from '@angular/core';

@Directive({
	selector: '[appNumfilter]'
})
export class NumfilterDirective {

	@HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
		if ((e.keyCode >= 35 && e.keyCode <= 39) || ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1)) {
			return;
		}

		if (
			(e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
			(e.keyCode < 96 || e.keyCode > 105)
		) {
			e.preventDefault();
		}
	}

	constructor() { }

}
