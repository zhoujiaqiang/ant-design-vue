import { VNode } from 'vue';
import { AntdVueComponent } from './component';

/** AAnchor Layout Component */
export declare class AAnchor extends AntdVueComponent {
  affix: boolean

  bounds: number

  getContainer: () => HTMLElement

  offsetBottom: number

  offsetTop: number

  showInkInFixed: boolean

  $emit(eventName: 'click', event: KeyboardEvent, link: object): this
}


/** ALink Layout Component */
export declare class ALink extends AntdVueComponent {
  href: string

  title: string | VNode

  $slots: {
    title: VNode[]
  }
}
