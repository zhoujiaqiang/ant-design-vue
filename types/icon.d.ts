import { AntdVueComponent } from './component';
import { VNode, Component } from 'vue';

type FromIconfontCN = { scriptUrl: string, extraCommonProps: object };
export declare class AIcon extends AntdVueComponent {
  type: string;

  theme: 'filled' | 'outlined' | 'twoTone';

  spin: boolean;

  component: VNode;

  twoToneColor: string;

  static setTwoToneColor: (color: string) => void;

  static getTwoToneColor: () => string;

  createFromIconfontCN: (value: FromIconfontCN) => Component;

}
