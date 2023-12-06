import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListChapterTagComponent } from './components/list-chapter-tag/list-chapter-tag.component';
import { ListProductComponent } from './components/list-product/list-product.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'product-list'},
  {path: 'product-list', component: ListProductComponent},
  {path: 'product-add', component: AddProductComponent},
  {path: 'product-edit/:id', component: EditProductComponent},
  {path: 'chapterTag-list', component: ListChapterTagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
