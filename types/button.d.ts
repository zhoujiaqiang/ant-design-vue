import { AntdVueComponent, AntdVueComponentSize } from './component';

export type ButtonType = 'primary' | 'dashed' | 'danger';

export type ButtonShape = 'circle' | 'default';

export type HtmlType = 'button' | 'reset' | 'submit';

export declare class AButton extends AntdVueComponent {
  type: ButtonType

  shape: ButtonShape

  size: AntdVueComponentSize

  loading: boolean | { delay: number }

  disabled: boolean

  ghost: boolean

  htmlType: HtmlType

  icon: string

  block: boolean

  $emit(eventName: 'click', event: KeyboardEvent): this
}

export declare class AButtonGroup extends AntdVueComponent {

}
