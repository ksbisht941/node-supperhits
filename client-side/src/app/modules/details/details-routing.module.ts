import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./components/details.component";

const routes: Routes = [
    {
        path: '', component: DetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DetailsRoutingModule { } 