import { Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    themes = [
        {
            name: 'light theme',
            file: 'light',
            current: false
        },
        {
            name: 'dark theme',
            file: 'dark',
            current: true
        }
    ];

    themeEl = document.getElementById('theme');
    defaultTheme = 'dark';
    constructor(private renderer: Renderer2) {
        this.setTheme();
    }


    setTheme() {
        if (!localStorage.getItem('theme')) {
            this.changeTheme(this.defaultTheme);
        } else {
            this.changeTheme(localStorage.getItem('theme'));
        }
    }

    changeTheme(th) {
        localStorage.setItem('theme', th);
        this.renderer.setProperty(this.themeEl, 'href', `/assets/styles/${th}.css`);
    }

}

