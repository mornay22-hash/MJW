

# MJW Group Website Modernization Plan

## Reference Analysis
The uploaded screenshot shows a modernized dark theme with:
- Deep navy/slate background with subtle circular geometric accents
- Teal/cyan accent for CTAs and highlights
- Gold/warm accent for labels ("MVOLS PLATFORMS ECOSYSTEM")
- Large serif headings with "Operational Reality" in teal gradient
- Cleaner, more spacious hero layout with centered content
- More premium glassmorphism feel

## Color System Update

Update `src/index.css` CSS variables to introduce richer blues, retain teal, add orange accent, and refine gold:

**Light mode adjustments:**
- `--primary`: shift to deeper navy blue `210 50% 10%`
- `--accent`: warm gold stays `40 55% 52%`
- Add `--orange` custom property: `24 85% 55%`
- Add `--blue-accent`: `210 70% 50%`
- Refine `--teal` to brighter: `175 55% 38%`

**Dark mode (and hero sections):**
- Deeper navy: `215 45% 8%`
- Richer teal highlights
- Orange and blue accent shades available

Update `tailwind.config.ts` to register `orange` and `blue-accent` color tokens.

## Homepage Redesign (`src/pages/Index.tsx`)

1. **Hero section**: Match reference image layout
   - Center-aligned content with MJW Group logo above
   - "MVOLS PLATFORMS ECOSYSTEM" gold label
   - Large serif headline: "Systems Software Built From **Operational Reality**" (with teal gradient on last two words)
   - Structured subtitle and credibility line
   - Two CTAs: "Explore MVOLs Platforms" (teal fill) + "View Platform Architecture" (outline)
   - Subtle circular geometric accent (CSS pseudo-element or radial gradient)

2. **Vaulta Launch Banner**: Update to use orange accent for urgency

3. **What We Build section**: Add glassmorphism to cards (`backdrop-blur-xl bg-white/5 border border-white/10`)

4. **Ecosystem Structure section**: Refine visual hierarchy with gradient connectors

5. **Platform Cards**: Add subtle gradient borders (teal-to-blue), glassmorphism backgrounds

6. **Live Platform Access section**: Use gradient background (navy to deep blue) instead of flat primary

7. **Philosophy section**: Modernize card styling

## Global Component Updates

### Navbar (`src/components/Navbar.tsx`)
- Match reference: "Home" with active dot indicator beneath
- "Architecture" nav item (rename "Data Protection")
- Cleaner spacing, same dark backdrop-blur

### Footer (`src/components/Footer.tsx`)
- Subtle gradient top border (teal to blue)
- Slightly refined spacing

## Platform Pages (Vaulta, Obstrata, Ledgera, Sentra)
- Update hero gradients to use richer blue-to-teal spectrum
- Add glassmorphism to capability cards
- Use orange accent sparingly for CTAs or badges where appropriate
- Ensure screenshot cards have consistent shadow with blue-tinted glow

## Secondary Pages (About, Security, FAQ, Contact, Legal)
- Update hero sections to match new gradient style
- Glassmorphism on cards where applicable
- Orange accent on form submit button (Contact page)

## Recommendations to Add

1. **"Why MJW Group" section on homepage**: 3-column grid with metrics — "4 Live Platforms", "POPIA-Aligned", "Operator-Built" with subtle gradient backgrounds
2. **Smooth scroll behavior**: Add `scroll-behavior: smooth` to html
3. **Enhanced hover states**: Scale + glow effect on platform cards
4. **Gradient text utility**: CSS class for teal-gradient text on key headings
5. **Newsletter/Updates CTA** at bottom of homepage before footer

## Files to Edit
1. `src/index.css` — Color variables, gradient utilities, smooth scroll
2. `tailwind.config.ts` — New color tokens (orange, blue-accent)
3. `src/pages/Index.tsx` — Hero redesign, glassmorphism, new sections
4. `src/components/Navbar.tsx` — Active indicator, nav label updates
5. `src/components/Footer.tsx` — Gradient border, refined styling
6. `src/pages/Vaulta.tsx` — Updated gradients and card styles
7. `src/pages/Obstrata.tsx` — Updated gradients and card styles
8. `src/pages/Ledgera.tsx` — Updated gradients and card styles
9. `src/pages/Sentra.tsx` — Updated gradients and card styles
10. `src/pages/About.tsx` — Updated hero and card styles
11. `src/pages/Security.tsx` — Updated hero and card styles
12. `src/pages/FAQ.tsx` — Updated hero styling
13. `src/pages/Contact.tsx` — Updated hero, form button styling

