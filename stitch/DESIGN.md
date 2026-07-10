---
name: Tag Pebble
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3d4947'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#924628'
  on-tertiary: '#ffffff'
  tertiary-container: '#b05e3d'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#773215'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
  mono-label:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  gutter: 12px
  row-height-sm: 32px
  row-height-md: 40px
---

## Brand & Style
The design system is engineered for professional-grade utility, prioritizing information density without sacrificing visual clarity. The brand personality is **reliable, deterministic, and efficient**, catering to power users who manage large volumes of metadata. 

The aesthetic is **Dense Minimalism**. It avoids decorative elements and "marketing fluff" in favor of structural integrity and functional hierarchy. The UI should evoke a sense of calm control, using generous internal white space within components while maintaining a compact overall layout. This approach ensures that even when the screen is full of data, the interface remains legible and un-intimidating.

## Colors
This design system utilizes a high-clarity palette dominated by cool neutrals to reduce cognitive load. 

- **Primary (Emerald Green):** Used exclusively for primary actions and "active" states. It signifies progress and confirmation.
- **Secondary (Slate Blue):** Used for structural elements, secondary iconography, and text that requires more weight than the body.
- **Neutrals:** A range of light grays (`#F8FAFC` to `#94A3B8`) defines the surface hierarchy. The background remains clean white to maximize contrast.
- **Accents:** Use a subtle tint of the primary color (Emerald 50) for hover states on list items and chips to provide a "quiet" feedback loop.

## Typography
The typography system relies on **Inter** for its exceptional legibility in data-heavy environments. The scale is intentionally tight, focusing on the 11px to 18px range to allow for high information density.

- **Scale:** Use `body-sm` (13px) as the default for list content and metadata. 
- **Labels:** Use `label-xs` in all-caps for section headers to distinguish them from interactive content.
- **Monospace:** For tag IDs or technical strings, use a secondary monospaced font at a small scale to provide visual distinction from natural language.

## Layout & Spacing
The layout follows a **Fluid Grid** model with strict 4px increments. While the container adapts to the screen width, internal component spacing is kept tight to maintain a "utility tool" feel.

- **Density:** Components use "Compact" spacing (8px internal padding) to maximize the number of visible rows in a list.
- **Responsive:** On mobile, the 24px container padding reduces to 16px. Sidebars collapse into a bottom sheet or a simple icon-only rail.
- **Alignment:** All text elements must align to a horizontal baseline grid to ensure rows of data across different columns remain visually connected.

## Elevation & Depth
In keeping with the "Dense but Calm" narrative, the design system avoids heavy shadows. Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Background):** White (#FFFFFF).
- **Level 1 (Cards/Sidebar):** Very light gray (#F8FAFC) with a 1px border (#E2E8F0).
- **Level 2 (Popovers/Modals):** White with a very subtle, highly diffused shadow (0px 4px 12px rgba(0,0,0,0.05)) and a solid border.
- **Hover States:** Elements should not lift (Y-axis shift). Instead, they should change background color to a subtle neutral or a tinted primary shade.

## Shapes
The design system uses a **Soft** shape language (4px radius). This provides a professional, "tooled" look that feels more precise than fully rounded "pill" shapes, while remaining more approachable than sharp corners. 

Use 2px for very small elements like checkboxes, and up to 8px for large container cards.

## Components
- **Buttons:** Small (28px height) and Medium (36px height). Primary buttons use the Emerald Green fill. Secondary buttons use a white fill with a Slate Blue border.
- **Chips (Tags):** The core of the tool. 20px height, using `label-xs` typography. They feature a light gray background with a "remove" icon that appears only on hover to reduce visual noise.
- **Input Fields:** Flat design with a 1px border. No shadows. The border thickens and changes to the primary color only when focused.
- **List Items:** High-density rows (32px height). Hovering over a row highlights the entire background in `#F1F5F9`.
- **Status Indicators:** Small 6px dots. Use Emerald for "Active," Slate for "Draft," and Amber for "Needs Review." No text labels for status unless space allows.
- **Data Tables:** Borderless rows with a 1px separator. Use `mono-label` for numerical data to ensure column alignment.