import { toast } from 'solid-sonner'
import { useTheme } from '../context/ThemeContext'

type ToastOpts = { duration?: number; description?: string }

function themedStyle() {
	const { currentColor, dragHandleColor, secondaryBackground } = useTheme()
	return {
		'background-color': secondaryBackground(),
		color: currentColor(),
		border: `1px solid ${dragHandleColor()}`,
		'box-shadow': `0 2px 8px rgba(0,0,0,0.15)`
	} as Record<string, string>
}

export function themedToast(message: string, opts?: ToastOpts) {
	return toast(message, {
		duration: opts?.duration ?? 1500,
		description: opts?.description,
		style: themedStyle()
	})
}
