import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  public addProduct(data: {name: string, url: string}) {
    return this.db.collection('products').add(data);
  }

  public getProduct(documentId: string) {
    return this.db.collection('products').doc(documentId).snapshotChanges();
  }

  public getProducts() {
    return this.db.collection('products').snapshotChanges();
  }

  public updateProduct(documentId: string, data: any) {
    return this.db.collection('products').doc(documentId).set(data);
  }

  public deleteProduct(documentId: string) {
    return this.db.collection('products').doc(documentId).delete();
  }
}
