import { VNode } from 'vue';
import { AntdVueComponent } from './component';

type Types = 'success' | 'info' | 'warning' | 'error';
/** AAlert Layout Component */
export declare class AAlert extends AntdVueComponent {
  afterClose: () => void

  banner: boolean

  closable: boolean

  closeText: string | VNode

  description: string | VNode

  message: string | VNode

  showIcon: boolean

  iconType: string

  type: Types

  $emit(eventName: 'close', event: KeyboardEvent): this

  $slots: {
    closeText: VNode[]

    description: VNode[]

    message: VNode[]
  }
}
