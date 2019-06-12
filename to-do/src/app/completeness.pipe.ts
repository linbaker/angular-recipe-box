import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from './models/recipe.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Recipe[], desiredCompleteness) {
    var output: Recipe[] = [];
    if(desiredCompleteness === "incompleteRecipes") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].haveTried === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "completedRecipes") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].haveTried === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
