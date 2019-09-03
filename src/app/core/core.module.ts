import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
    imports: [
        ...CoreModule.components
    ],
    exports: [
        ...CoreModule.components
    ],
    declarations: [...CoreModule.components]
})
export class CoreModule {
    static components: any = [
        MenuComponent,
        FooterComponent,
        ErrorComponent,
        SpinnerComponent
    ];
}
