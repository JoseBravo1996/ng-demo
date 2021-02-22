import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  public products = [] as  any;;
  public documentId = null;
  public currentStatus = 1;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required)
    });

    this.productService.getProducts().subscribe((catsSnapshot) => {
      this.products = [];
      catsSnapshot.forEach((catData: any) => {
        this.products.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })
    });

  }

  public newPerson(form: any, documentId: any) {
    if (this.currentStatus == 1) {
    let data = {
        name: form.name,
        url: form.url
      }
      this.productService.addProduct(data).then(() => {
        this.form.setValue({
          name: '',
          url: '',
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      let data = {
        name: form.name,
        url: form.url
      }
      this.productService.updateProduct(documentId, data).then(() => {
        this.currentStatus = 1;
        this.form.setValue({
          name: '',
          url: '',
        });
      }, (error) => {
        console.log(error);
      });
    }

    this.form.reset();
  }

  public editPerson(documentId: any) {
    let editSubscribe = this.productService.getProduct(documentId).subscribe((prod: any) => {
      this.currentStatus = 2;
      this.documentId = documentId;
      this.form.setValue({
        id: documentId,
        name: prod.payload.data()['name'],
        url: prod.payload.data()['url']
      });
      editSubscribe.unsubscribe();
    });
  }

  public deletePerson(documentId: any) {
    this.productService.deleteProduct(documentId).then(() => {
    }, (error) => {
      console.error(error);
    });
  }


}
