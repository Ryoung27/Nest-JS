import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from './product.model';

@Injectable()
export class ProductsService{
    private products: Product[] =[];
    // Install express to create real Id's
    insertProduct(title: string, desc: string, price: number){
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price)
        this.products.push(newProduct);
        return prodId;
    }

    getProducts(){
        return [...this.products];
    }

    getSingleProducts(productId: string){
        const product = this.products.find(prod => prod.id === productId);
        if (!product){
            throw new NotFoundException('Could not find product.');
        }
        return { ...product };
    }

}