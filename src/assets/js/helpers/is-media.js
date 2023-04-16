export function isMediaBreakpoint(breakpoint = 1023.98) {
  const mediaBreakpoint = breakpoint;

  if (document.documentElement.clientWidth > mediaBreakpoint) {
    return false;
  }

  return true;
}
