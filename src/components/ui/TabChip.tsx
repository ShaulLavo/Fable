import { createSignal, JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { getNodeIcon } from '../../stores/icons'
import { currentColor } from '../../stores/themeStore'
import { Span } from './Span'
import { useFS } from '../../context/FsContext'
import { getNode } from '../../service/FS.service'
import { VsClose } from 'solid-icons/vs'

type RefProp = HTMLDivElement | ((el: HTMLDivElement) => void)

interface TabChipProps {
  path: string
  selected?: boolean
  onClick?: () => void
  onClose?: (e: Event) => void
  ref?: RefProp
}

export function TabChip(props: TabChipProps) {
  const { fs } = useFS()
  const node = () => getNode(fs, props.path) ?? fs
  const [isHovered, setIsHovered] = createSignal(false)

  return (
    <Span
      selected={!!props.selected}
      title={props.path}
      ref={props.ref as any}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={() => props.onClick?.()}
      class={`px-1.5 py-1.5 focus:outline-none text-xs items-center flex cursor-pointer relative z-50 box-border border-t-1`}
      style={{
        'border-color': props.selected ? currentColor() : 'transparent'
      }}
      data-value={props.path}
      role="button"
    >
      <Dynamic component={getNodeIcon(node())} size={14} />
      <span class="px-1" />
      {props.path.split('/').pop()}
      <button
        onClick={e => props.onClose?.(e)}
        class="pl-2 flex items-center justify-center"
        style={{
          visibility: isHovered() || props.selected ? 'visible' : 'hidden',
          'padding-top': '1.5px'
        }}
      >
        <VsClose size={16} color={currentColor()} />
      </button>
    </Span>
  )
}

