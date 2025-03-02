import { makePersisted } from '@solid-primitives/storage'

import { createEffect, createSignal } from 'solid-js'
import { themeSettings } from '../consts/themeSettings'
import { getDarkerRgbColor, getLighterRgbColor } from '../utils/color'

type ThemeKey = keyof typeof themeSettings
type ThemeSetting = (typeof themeSettings)[ThemeKey]

const [baseFontSize, setBaseFontSize] = makePersisted(createSignal(16), {
	name: 'baseFontSize'
})

const [currentThemeName, setTheme] = makePersisted(
	createSignal<ThemeKey>('mojo'),
	{ name: 'theme' }
)

const currentThemeSettings = () =>
	themeSettings[currentThemeName() ?? 'mojo'] ?? themeSettings.poimandres
const currentTheme = () => currentThemeSettings().theme
const currentColor = () => currentThemeSettings().color

const currentBackground = () => currentThemeSettings().background
const secondaryBackground = () => getDarkerRgbColor(currentBackground(), 1, 0.8)
const secondaryColor = () =>
	isDark()
		? getLighterRgbColor(currentColor(), 1, 0.5)
		: getDarkerRgbColor(currentColor(), 1, 0.8)

const isDark = () => currentThemeSettings().mode === 'dark'
const bracketColors = () => currentThemeSettings().rainbowBracket
const xTermTheme = () =>
	currentThemeSettings().xTermTheme ?? {
		background: currentBackground(),
		foreground: currentColor(),
		cursor: currentColor()
	}
const termColors = () => ({
	color1: currentThemeSettings().color1,
	color2: currentThemeSettings().color2
})
const dragHandleColor = () => getLighterRgbColor(currentBackground(), 1)

const style = document.createElement('style')
document.head.appendChild(style)

createEffect(async () => {
	const module = currentThemeSettings().hljsCss
	const { default: css } = await module()
	if (css) {
		style.innerHTML = css
	}
})

export {
	baseFontSize,
	setBaseFontSize,
	currentColor,
	currentBackground,
	isDark,
	currentTheme,
	currentThemeName,
	bracketColors,
	dragHandleColor,
	setTheme,
	termColors,
	themeSettings,
	xTermTheme,
	secondaryBackground,
	secondaryColor
}

export type { ThemeKey, ThemeSetting }
