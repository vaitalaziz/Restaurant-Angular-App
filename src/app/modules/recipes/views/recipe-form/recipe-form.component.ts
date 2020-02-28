// https://www.npmjs.com/package/ngx-mat-select-search
// gess better the below:
// https://v8.material.angular.io/components/autocomplete/overview
// ** Must check for mage
// https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { RecipeService } from 'src/app/services/recipe.service';
import { mimeType } from '../../validators/mime-type.validators';

interface Ingredient {
  id: any;
  name: string;
}

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  imagePreview: string;
  ingredients: Ingredient[] = [
    { id: -1, name: 'Select ingredient' },
    { id: 111, name: 'chicken' },
    { id: 222, name: 'beef' }
  ];

  public recipeForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', { validators: [Validators.required], asyncValidators: [mimeType] }],
    selector_ingredient: ['', Validators.required],
    stocked_ingredients: this.fb.array([]),

  });

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService
  ) { }

  ngOnInit() { }

  createIngredient(stockIngre) {
    return this.fb.group({
      name: [stockIngre, Validators.required],
      amount: ['', Validators.required],
      amountType: ['', Validators.required],
    });
  }

  addIngredient() {
    const x = this.recipeForm.get('stocked_ingredients') as FormArray;
    x.push(this.createIngredient(this.recipeForm.get('selector_ingredient').value));
    // x.push(this.createIngredient(chk.target.value));
  }

  get stocks() {
    return (this.recipeForm.get('stocked_ingredients') as FormArray).controls;
  }

  onRemove({ group, index }: { group: FormGroup, index: number }) {
    const control = this.recipeForm.get('stocked_ingredients') as FormArray;
    control.removeAt(index);
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.recipeForm.patchValue({ image: file });
    this.recipeForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  /** create new object Or update existing object */
  onSave(): void {
    console.log(this.recipeForm.value);
    if (this.recipeForm.invalid) { return; }
    this.recipeService.createObject(this.recipeForm.value);

  }

}
