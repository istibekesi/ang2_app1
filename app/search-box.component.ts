import {Component, Input} from "@angular/core";

@Component({
    selector: 'search-box',
    template: `<input placeholder="{{text}}" #inp>
                <button class="btn-clear" (click)="clear(inp)">Clear</button>` 
})
export class SearchBox {
    @Input('placeholder')
    text = 'Type your search';

    clear(obj) {
        console.log('clear...');
        obj.value = '';
    }
}
