import { VNode } from 'vue';
import { AntdVueComponent } from './component';

type DataSourceItemType = { value: any, text: string };

type AutoCompleteValue = string | string[] | { key: string, label: string|VNode[] } | Array<{ key: string, label: string|VNode[]}>

/** AAutoComplete Layout Component */
export declare class AAutoComplete extends AntdVueComponent {
  allowClear: boolean

  autoFocus: boolean

  backfill: boolean

  dataSource: VNode | DataSourceItemType[]

  defaultActiveFirstOption: boolean

  defaultValue: AutoCompleteValue

  disabled: boolean

  filterOption: (inputValue: string, option: any) => boolean | boolean

  optionLabelProp: string

  placeholder: string | VNode

  value: AutoCompleteValue

  defaultOpen: boolean

  open: boolean

  static blur: () => void

  static focus: () => void

  $emit(eventName: 'change', value: AutoCompleteValue): this

  $emit(eventName: 'blur', event: KeyboardEvent): this

  $emit(eventName: 'focus', event: KeyboardEvent): this

  $emit(eventName: 'search', value: AutoCompleteValue): this

  $emit(eventName: 'select', value: AutoCompleteValue, option: object): this

  $emit(eventName: 'dropdownVisibleChange', open: boolean): this

  $slots: {
    /**
     * customize input element
     */
    '': VNode[]

    dataSource: VNode[]

    placeholder: VNode[]
  }
}
