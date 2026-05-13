---
name: Kindle & Clay
colors:
  surface: '#f3faff'
  surface-dim: '#c3deec'
  surface-bright: '#f3faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e6f6ff'
  surface-container: '#d8f2ff'
  surface-container-high: '#d1ecfa'
  surface-container-highest: '#cbe7f5'
  on-surface: '#021f29'
  on-surface-variant: '#594136'
  inverse-surface: '#19343e'
  inverse-on-surface: '#dff4ff'
  outline: '#8d7164'
  outline-variant: '#e2bfb0'
  surface-tint: '#9f4200'
  primary: '#9f4200'
  on-primary: '#ffffff'
  primary-container: '#ff6d00'
  on-primary-container: '#582100'
  inverse-primary: '#ffb692'
  secondary: '#1b6d24'
  on-secondary: '#ffffff'
  secondary-container: '#a0f399'
  on-secondary-container: '#217128'
  tertiary: '#00629e'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a0fc'
  on-tertiary-container: '#003457'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcb'
  primary-fixed-dim: '#ffb692'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#a3f69c'
  secondary-fixed-dim: '#88d982'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005312'
  tertiary-fixed: '#cfe5ff'
  tertiary-fixed-dim: '#99cbff'
  on-tertiary-fixed: '#001d34'
  on-tertiary-fixed-variant: '#004a78'
  background: '#f3faff'
  on-background: '#021f29'
  surface-variant: '#cbe7f5'
typography:
  display-xl:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Quicksand
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 32px
  body-md:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  label-bold:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  unit-xs: 0.5rem
  unit-sm: 1rem
  unit-md: 2rem
  unit-lg: 4rem
  margin-mobile: 1.5rem
  margin-desktop: 5rem
---

## Brand & Style

This design system is built for early childhood learners, prioritizing tactile delight and cognitive ease. The brand personality is encouraging, safe, and imaginative, functioning as a digital "play-mat" where the interface itself feels like a physical object.

The aesthetic follows a **Minimalist Claymorphism** approach. By combining the cleanliness of minimalism with the soft, 3D volume of clay-like surfaces, the UI becomes intuitively "tappable" for developing motor skills. Every element is designed to reduce anxiety and maximize focus by stripping away traditional UI chrome like navigation bars, headers, or complex hierarchies. The emotional response should be one of curiosity and gentle joy.

## Colors

The palette avoids the sterile whites of typical SaaS products, opting instead for a soothing **Soft Sky (#E0F2F1)** base that reduces eye strain. 

Action colors are high-energy and semantic:
- **Action Video (Vivid Orange):** Used exclusively for passive learning and viewing experiences.
- **Action Play (Vivid Green):** Used for interactive games and "doing" states.
- **Neutral:** A muted slate blue used for text and secondary icons to maintain high legibility without the harshness of pure black.

## Typography

**Quicksand** is the sole typeface, chosen for its rounded terminals that mirror the claymorphic shapes of the UI. Typography is scaled significantly larger than standard interfaces to accommodate early readers and provide clear focal points.

Headlines use a heavy weight to anchor the page, while body text maintains a medium weight to ensure the rounded stems of the characters remain distinct and highly legible. All text is set with generous line heights to prevent visual crowding.

## Layout & Spacing

The layout philosophy is **No Grid**. In the absence of navigation bars, the system relies on "Safe Zones" and massive dynamic padding. Content is centered or grouped in organic clusters to mimic a physical tabletop.

- **Mobile/Tablet:** A single-column "focus mode" where elements occupy the center 80% of the screen.
- **Desktop:** Large-scale horizontal spreads with wide margins to prevent the eye from wandering.
- **Spacing Rhythm:** Based on an 8px scale, but utilized in large increments (32px, 64px) to create the "distraction-free" environment requested.

## Elevation & Depth

This system utilizes **Claymorphic Volume** instead of traditional shadows. 
- **Inner Glows:** Every container uses two inner shadows (one light, one dark) to create a soft, 3D extruded "clay" effect.
- **Drop Shadows:** Use very large blur radii (30px+) with low-opacity colors derived from the background (e.g., a soft teal shadow for the light blue background) rather than grey.
- **Active State:** When pressed, elements should "sink" into the background by reversing the inner shadows and reducing the outer drop shadow.

## Shapes

The shape language is dominated by **Pill-shaped (3)** geometry. There are no sharp corners in the design system. 

- **Primary Containers:** Use the `rounded-xl` (3rem) setting to create a friendly, "bubbled" appearance.
- **Small Elements:** Icons and small buttons use the `rounded-full` (pill) treatment to ensure they feel safe and approachable.

## Components

### Buttons
Buttons are the primary interactive triggers. They feature a thick bottom border (2-4px) in a slightly darker shade of the button color to simulate a physical 3D button.
- **Video Button:** Orange background, white icon, clay-depth.
- **Play Button:** Green background, white icon, clay-depth.

### Cards
Cards act as the primary content containers. They share the same background color as the screen but are defined by their claymorphic inner/outer shadows. They should never have borders.

### Progress Indicators
Instead of a thin line, use "Seed Tracks"—large, rounded dots that fill with color as the child progresses through a task.

### Selection (Checkboxes/Radio)
Use large, tactile "Toggle Bubbles." When selected, the bubble should expand slightly with a spring animation and change to the Play Green color.

### Interactive Icons
Icons must be thick-stroked and rounded. Avoid thin lines or complex details. Every icon should be contained within a pill-shaped background for a larger tap target.