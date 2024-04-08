import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomColor',
  standalone: true
})
export class RandomColorPipe implements PipeTransform {

  transform(value: unknown,): string{
    let color: string;
    const brightnessThreshold = 128; // Порог яркости для определения "тёмного" цвета
    let brightness: number;
    do {
      // Генерируем рандомный цвет
      color = this.getRandomColor();
      // Получаем яркость цвета
      brightness = this.getBrightness(color);
      // Проверяем, является ли цвет "тёмным"
    } while (brightness < brightnessThreshold); // Если цвет "тёмный", повторяем процесс генерации

    return color;
  }

  private getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }

  private getBrightness(color: string) {
    // @ts-ignore
    const components = color.match(/\d+/g).map(Number);

    return 0.299 * components[0] + 0.587 * components[1] + 0.114 * components[2];
  }
}
