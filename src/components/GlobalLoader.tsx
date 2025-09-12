import { Show } from 'solid-js/web'
import { isGlobalLoading } from '../stores/appStateStore'
import { currentColor } from '../stores/themeStore'
import Icon from './ui/Icon'

export const GlobalLoader = (props: { show?: boolean }) => {
	return (
		<Show when={props.show ?? isGlobalLoading()}>
			<div class="fixed top-0 left-0 w-full h-full bg-black/50 z-120 flex items-center justify-center">
				<Icon color={currentColor()} icon="loader" size={100} />
			</div>
		</Show>
	)
}

export const Loader = (props: { show: boolean; class?: string }) => {
	return (
		<Show when={props.show}>
			<Icon color={currentColor()} icon="loader" class={props.class} size={30} />
		</Show>
	)
}
