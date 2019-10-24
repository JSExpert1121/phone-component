import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-form-editor',
	templateUrl: './form-editor.component.html',
	styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {

	phoneIn = null;
	myFormGroup = new FormGroup({
		myTextInput: new FormControl('')
	});
	constructor() { }

	ngOnInit() {
		this.phoneIn = this.myFormGroup.get('myTextInput');
		this.phoneIn.valueChanges.subscribe(value => {
			this.phoneIn.setValue(this.validateNo(value), { emitEvent: false });
		});
	}

	validateNo(value: string) {
		let numstr = value.split('').filter((char) => (char != '-' && char > '0' && char <= '9')).join('');
		const len = numstr.length;
		if (len > 10) {
			numstr = numstr.slice(0, 10);
		}
		console.log(numstr);

		let result = numstr;
		if (len > 3) {
			result = numstr.slice(0, 3);
			result += '-';
			result += numstr.slice(3);
		}

		if (len > 6) {
			const last = result.slice(7);
			result = result.slice(0, 7);
			result += '-';
			result += last;
		}

		return result;
	}
}
