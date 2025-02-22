import { batch } from 'solid-js'

export const viewTransition = (fn: () => void) => {
	if (!document.startViewTransition) return fn()
	return document.startViewTransition(fn)
}

export const viewTransitionBatched = (fn: () => void) => {
	viewTransition(() => batch(fn))
}
