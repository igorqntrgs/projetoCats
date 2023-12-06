import { Component, NgZone } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  constructor(private productService: ProductService,
    private ngZone : NgZone){

  }

  listProducts: any = []

  ngOnInit(){
    this.loadProducts()
  }

  loadProducts(){
    this.productService.getProducts().subscribe((data: {}) =>{
      this.listProducts = data
    })
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe((res)=> {
      console.log("Product deleted!");
      this.ngZone.run(() => this.loadProducts());
    })
  }
}
