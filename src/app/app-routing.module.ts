import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionSalesComponent } from './section-sales/section-sales.component';

const routes: Routes = [
  {path: 'sales', component: SectionSalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SectionSalesComponent]
