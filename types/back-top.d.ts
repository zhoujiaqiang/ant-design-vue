import { AntdVueComponent } from './component';

/** ABackTop Layout Component */
export declare class ABackTop extends AntdVueComponent {
  target: () => Window

  visibilityHeight: number

  $emit(eventName: 'click', event: KeyboardEvent): this
}
