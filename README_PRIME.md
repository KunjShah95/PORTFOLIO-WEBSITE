# 🌐 THE PRIME DIRECTIVE: FRONTEND ARCHITECTURE V2

**Status:** INITIALIZED
**Theme:** VOID / INDUSTRIAL / KINETIC
**Objective:** Billion-Dollar Digital Flagship

---

## 🏗️ Core Architecture Changes

### 1. The Void (Color System)

We have abandoned the "Clean Editorial" look. The new system is strictly **Dark Mode**.

- **Background**: `#050505` (The Void)
- **Primary**: `#FF4F00` (International Orange) - High visibility, industrial, alert.
- **Surface**: `#0A0A0A` (Matte Black)
- **Typography**: "Inter" (Structure) + "JetBrains Mono" (Data).

### 2. The HUD (Layout)

- **Top Bar**: Minimal status indicators. No navigation clutter.
- **Bottom Dock**: Functional, Mac-like but industrial.
- **Mobile**: Full-screen, high-contrast overlay.

### 3. Kinetic Typography (Hero)

- No more static text.
- The Hero is a **Scroll-Linked Animation**. The text "KUNJ SHAH" is the main visual element.
- Background is a 3D perspective grid that reacts to scroll.

---

## 🛠️ Migration Guide (Remaining Components)

You must update the following components to match the new "Industrial" aesthetic. Use `Projects.tsx` as your reference implementation.

### General Rules

1. **No Italics**: Remove all `italic` classes. We are building a machine, not a blog.
2. **No Pills**: Change `rounded-full` to `rounded-sm` or `rounded-none`.
3. **Monospace Headers**: Use `font-mono uppercase tracking-widest` for all section eyebrows.
4. **Borders over Shadows**: Use `border border-border` instead of `shadow-xl`.

### Specific Component Instructions

#### `Skills.tsx`

- **Current**: Cards with icons and rounded corners.
- **New Goal**: A "Capability Matrix". A dense grid of skills.
- **Action**: Remove the large numbers (`01`, `02`). Make it look like a technical spec sheet.

#### `Contact.tsx`

- **Current**: Rounded cards with gradients.
- **New Goal**: A "Communication Terminal".
- **Action**: Make the inputs look like command line prompts.

#### `ResearchLabs.tsx` & `AIVideoCreation.tsx`

- Convert these from "Feature Cards" to "Data Streams" similar to `Projects.tsx`.

---

## 🚀 Next Steps

1. Run the dev server: `npm run dev`
2. Verify the Hero animation smoothness.
3. Migrate `Skills.tsx` using the new design tokens.

**Signed,**
*Frontend Architect*
