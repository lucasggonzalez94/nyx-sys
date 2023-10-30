import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  public currentTheme: string;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(this.currentTheme);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(this.currentTheme);
  }

  private setTheme(theme: string) {
    this.renderer.addClass(document.body, theme);
    this.renderer.removeClass(document.body, theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
  }
}
