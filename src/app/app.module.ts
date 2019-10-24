import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { NumfilterDirective } from './numfilter.directive';

@NgModule({
	declarations: [
		AppComponent,
		FormEditorComponent,
		NumfilterDirective
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
