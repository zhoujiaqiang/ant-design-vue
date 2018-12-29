import { AntdVueComponent, AntdVueComponentSize } from './component';

type shape = 'circle' | 'square'

/** AAvatar Layout Component */
export declare class AAvatar extends AntdVueComponent {
  icon: string

  shape: shape

  size: AntdVueComponentSize

  src: string

  alt: string

  loadError: () => boolean
}
