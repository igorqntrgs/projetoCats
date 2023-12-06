import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  // productForm: FormGroup;

  productForm = new FormGroup({
    product_name: new FormControl(),
    product_description: new FormControl()
  });

constructor(
  public fb: FormBuilder,
  private ngZone: NgZone,
  private router: Router,
  private productService: ProductService

){}

clearProduct(){
  this.productForm = this.fb.group({
    product_name: [''],
    product_description: [''],
  });
}

ngOnInit(){
  this.clearProduct();
}

submitForm(){
  this.productService.createProduct(this.productForm.value).subscribe((res) =>{
    console.log("Product added!");
    this.ngZone.run(() => this.router.navigateByUrl('/product-list'));
  })
}


}
