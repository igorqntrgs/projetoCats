import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  // updateProductForm: FormGroup;

updateProductForm = new FormGroup({
  product_name: new FormControl(),
  product_description: new FormControl()
});

constructor(
  public fb: FormBuilder,
  private ngZone: NgZone,
  private router: Router,
  private productService: ProductService,
  private actRoute: ActivatedRoute

){
  let id = this.actRoute.snapshot.paramMap.get('id');
  this.productService.getProduct(id).subscribe((data)=> {
    console.log(data);
    this.updateProductForm = this.fb.group({
      product_name: [data.product_name],
      product_description: [data.product_description],
    });
  })
}

submitForm(){
  let id = this.actRoute.snapshot.paramMap.get('id');
  this.productService.updateProduct(id, this.updateProductForm.value).subscribe((res)=> {
    console.log("Product update!");
    this.ngZone.run(() => this.router.navigateByUrl('/product-list'));
  })
}
}
