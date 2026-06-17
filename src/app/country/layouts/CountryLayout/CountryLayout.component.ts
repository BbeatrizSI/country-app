import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from '../../components/top-menu/top-menu';

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMenu],
  templateUrl: './CountryLayout.component.html',
})
export class CountryLayoutComponent {}
