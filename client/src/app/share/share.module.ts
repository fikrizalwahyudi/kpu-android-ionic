import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { SpinnerComponent } from './spinner.component';
import { SelectComponent } from './select.component';
// import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    declarations: [InputComponent,HeaderComponent, SpinnerComponent,SelectComponent],
    imports: [ CommonModule,FormsModule  ],
    exports: [InputComponent,HeaderComponent, SpinnerComponent,SelectComponent],
    providers: [],
})
export class ShareModule {}