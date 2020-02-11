import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit';

@Component({
  selector : 'app-produit',
  templateUrl : './produit.component.html',
  styleUrls : ['./produit.component.css']
})

export class ProduitComponent implements OnInit {

  produits : Produit[];
  produitForm : FormGroup;

  constructor(private ps : ProduitService, private fb : FormBuilder){
    this.produitForm = this.fb.group({
      ref : ['', Validators.required],
      quantite : '',
      prixUnitaire : ''
    });
  }

  ngOnInit(){
    this.loadProduits();
  }

  loadProduits(){
    this.ps.getProduits().subscribe(
      data => {this.produits = data},
      error => {console.log('An error was occured.')},
      () => {console.log('Loading produits was done.')}
    );
  }
}
