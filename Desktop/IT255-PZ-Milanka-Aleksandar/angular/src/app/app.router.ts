import { Routes } from '@angular/router';
import HomeComponent from "./pages/home/home.component";
import RegisterComponent from "./pages/register/register.component";
import LoginComponent from "./pages/login/login.component";
import KorpaComponent from "./pages/korpa/korpa.component";
import AdminPanelComponent from "./pages/adminPanel/adminpanel.component";
import ONamaComponent from "./pages/onama/onama.component";
import ProizvodiComponent from "./pages/proizvodi/proizvodi.component";
import ReceptiComponent from "./pages/recepti/recepti.component";
import KontaktComponent from "./pages/kontakt/kontakt.component";
import ProdavniceComponent from "./pages/prodavnice/prodavnice.component";

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'korpa', component: KorpaComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'onama', component: ONamaComponent },
  { path: 'proizvodi/:id', component: ProizvodiComponent },
  { path: 'recepti', component: ReceptiComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'prodavnice/:id', component: ProdavniceComponent },

];
