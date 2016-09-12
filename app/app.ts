import { SearchBox } from './search-box.component';
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@Component({
    selector: 'app',
    template: `Hello Ng2 World! - v3
                <div>
                    <search-box [placeholder]="'Custom placeholder'"></search-box>
                    <br/>
                    <search-box placeholder="Custom placeholder 2"></search-box>
                </div>`
})
export class App {

}

@NgModule({
    declarations: [App, SearchBox],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

 