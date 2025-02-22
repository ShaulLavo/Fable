import { makePersisted } from '@solid-primitives/storage'

import { createSignal } from 'solid-js'
import { themeSettings } from '../consts/themeSettings'
import { getLighterRgbColor } from '../utils/color'

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
const dragHandleColor = () =>
	getLighterRgbColor(currentColor(), isDark() ? 0.05 : 0.1)

export {
	baseFontSize,
	bracketColors,
	currentBackground,
	currentColor,
	currentTheme,
	currentThemeName,
	dragHandleColor,
	isDark,
	setBaseFontSize,
	setTheme,
	termColors,
	themeSettings,
	xTermTheme
}

export type { ThemeKey, ThemeSetting }
