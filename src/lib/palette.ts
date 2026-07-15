export const OPEN_PALETTE_EVENT = 'cmdk:open';

export function openCommandPalette() {
  window.dispatchEvent(new CustomEvent(OPEN_PALETTE_EVENT));
}
