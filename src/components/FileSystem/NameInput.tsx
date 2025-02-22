import { createEffect, onCleanup, Setter } from 'solid-js'
import { useFS } from '../../context/FsContext'
import { FSNode } from '../../types/FS.types'
import { Input } from '../ui/Input'

export const NodeNameInput = (props: {
	node: FSNode
	parentEl?: HTMLElement
	editingValue: string
	isTemp: boolean
	isEditing: boolean
	setEditingValue: Setter<string>
	setIsEditing: Setter<boolean>
}) => {
	const { removeNode, updateNodeName } = useFS()

	const finishEditing = () => {
		const trimmedName = props.editingValue.trim()
		if (!trimmedName) {
			if (props.isTemp) removeNode(props.node)
			props.setEditingValue('')
			props.setIsEditing(false)
		} else {
			if (trimmedName !== props.node.name) {
				updateNodeName(props.node, trimmedName)
			}
			props.setEditingValue('')
			props.setIsEditing(false)
		}
	}

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') finishEditing()
		else if (e.key === 'Escape') {
			if (props.isTemp) removeNode(props.node)
			props.setEditingValue('')
			props.setIsEditing(false)
		}
	}
	createEffect(() => {
		if (props.isEditing) {
			const handler = (e: MouseEvent) => {
				if (props.parentEl && !props.parentEl.contains(e.target as Node)) {
					finishEditing()
				}
			}
			document.addEventListener('click', handler)
			onCleanup(() => document.removeEventListener('click', handler))
		}
	})

	return (
		<Input
			value={props.editingValue}
			onInput={e => props.setEditingValue(e.currentTarget.value)}
			onBlur={finishEditing}
			onKeyDown={handleKeyDown}
			onClick={e => e.stopPropagation()}
			autofocus
			variant="inline"
			style={{ width: 'fit-content' }}
		/>
	)
}
