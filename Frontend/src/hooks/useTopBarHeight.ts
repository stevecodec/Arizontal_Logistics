// Custom Hook to get TopBar height
// TopBar is now permanently visible, so this returns a constant value

/**
 * Returns the fixed height of TopBar for positioning Header below it
 * @returns TopBar height in pixels (22px)
 */
export const useTopBarHeight = (): number => {
  return 22; // Fixed height: py-0.5 (2px) + py-1 (4px on sm+) ≈ 22px
};
