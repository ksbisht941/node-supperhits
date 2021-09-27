import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailPageComponent } from "src/app/shared/detail-page/detail-page.component";
import { MoviesComponent } from "./components/movies.component";

const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: ':movieName', component: DetailPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MovieRoutingModule { } 