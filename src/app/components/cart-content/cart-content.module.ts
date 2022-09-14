import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartContentComponent } from './cart-content.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [CartContentComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [CartContentComponent],
})
export class CartContentModule {}
