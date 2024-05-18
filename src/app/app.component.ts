import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SecaoComponent } from './secao/secao.component';
import { ListcervejasComponent } from "./listcervejas/listcervejas.component";
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Spaten350Component } from './spaten350/spaten350.component';
import { Spaten600Component } from './spaten600/spaten600.component';
import { Spaten355Component } from './spaten355/spaten355.component';
import { Spaten269Component } from './spaten269/spaten269.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent, SecaoComponent, ListcervejasComponent, LoginComponent, CadastroComponent,
      Spaten350Component, Spaten600Component, Spaten355Component, Spaten269Component
    ]
})
export class AppComponent {
  title = 'Bloodrinks';
}
