// Simple per-path dirty tracking for editor files
// We leverage the existing docChanged check in the editor update listener
// to mark paths as dirty, and clear on save.

import { createSignal } from 'solid-js'

const dirty = new Map<string, boolean>()
const [dirtyVersion, setDirtyVersion] = createSignal(0)

export function markDirty(path: string | undefined | null) {
  if (!path) return
  dirty.set(path, true)
  setDirtyVersion(v => v + 1)
}

export function clearDirty(path: string | undefined | null) {
  if (!path) return
  dirty.delete(path)
  setDirtyVersion(v => v + 1)
}

export function isDirty(path: string | undefined | null): boolean {
  if (!path) return false
  return !!dirty.get(path)
}

export { dirtyVersion }
