import { Pipe, PipeTransform } from '@angular/core';
import {ShopComponent} from "./shop.component";
import {Product} from "./product";

@Pipe({
  name: 'productFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText? filterText:null
    return filterText?value.filter((p:Product)=>p.title.
    indexOf(filterText)!==-1):value;
  }

}
