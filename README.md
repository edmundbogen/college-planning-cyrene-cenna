# College Financial Planning Guide - Cyrene & Cenna

A comprehensive, interactive web application designed to help plan and save for college expenses for Cyrene (age 6) and Cenna (age 1). Built with Edmund Bogen luxury brand standards.

## Features

- **Interactive Tabbed Interface**: Easy navigation between different sections
  - Overview: Executive summary and key strategies
  - Timeline: Age-based action plans for both children
  - Calculator: 529 savings and tax benefit calculators
  - Cost Strategies: Top 10 cost-reduction strategies
  - NY Benefits: New York-specific programs and benefits
  - Savings Accounts: Comparison of different savings vehicles
  - Action Checklist: Comprehensive implementation checklist

- **Financial Calculators**:
  - 529 Savings Calculator: Calculate monthly savings needed to reach college funding goals
  - NY State Tax Benefit Calculator: Calculate tax savings from 529 contributions
  - Cost Comparison Tool: Compare costs across different college strategies

- **Interactive Checklist**:
  - Track your progress through actionable items
  - Progress automatically saved in browser localStorage
  - Organized by timeline (immediate actions, 6 months, high school, college years, etc.)

- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Installation & Setup

### Option 1: Simple Local Usage

1. **Download or clone this repository** to your computer

2. **Open the application**:
   - Navigate to the `college-planning-app` folder
   - Double-click `index.html` to open it in your default web browser

   That's it! The app runs entirely in your browser - no server needed.

### Option 2: Using a Local Web Server (Recommended for development)

If you want to run it through a local web server:

```bash
# Navigate to the project directory
cd college-planning-app

# Option A: Using Python 3
python3 -m http.server 8000

# Option B: Using Node.js (if you have it installed)
npx http-server -p 8000

# Then open your browser to:
# http://localhost:8000
```

## File Structure

```
college-planning-app/
├── index.html          # Main HTML file with all content
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality and calculators
└── README.md           # This file
```

## How to Use

### Getting Started

1. **Open the application** in your web browser
2. **Start with the Overview tab** to understand the big picture
3. **Use the Calculator tab** to determine your savings needs
4. **Review the Timeline tab** to see age-specific actions
5. **Explore Cost Strategies** to maximize savings
6. **Check NY Benefits** for state-specific programs
7. **Use the Checklist tab** to track your progress

### Using the Calculators

**529 Savings Calculator:**
1. Select which child you're planning for
2. Enter your college cost goal
3. Input your current 529 balance (if any)
4. Choose expected annual return rate
5. Click "Calculate" to see monthly savings needed

**NY Tax Benefit Calculator:**
1. Select your filing status (single or married)
2. Enter your annual 529 contribution
3. Click "Calculate" to see your tax savings

### Using the Checklist

- Click on any checklist item to mark it complete
- Your progress is automatically saved in your browser
- Come back anytime - your checklist progress will be remembered
- Clear your browser cache to reset the checklist

## Customization

### Adapting for Different States

While this guide is optimized for New York residents, you can adapt it for other states by:

1. **Updating NY-specific programs** in the "NY Benefits" tab
2. **Changing the tax rate** in `script.js` (currently 6.85% for NY)
3. **Modifying deduction limits** to match your state's 529 plan
4. **Replacing SUNY/CUNY** information with your state's public university system

### Customizing for Your Children

To customize ages and timelines:

1. Edit the child ages in `index.html`:
   - Search for "Child #1 (Age 6)" and update
   - Search for "Child #2 (Age 1)" and update
   - Update years to college calculations accordingly

2. Modify calculator defaults in `index.html`:
   - Find the `<select id="childSelect">` element
   - Update the value attributes to reflect correct years to college

## Browser Compatibility

This application works in all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

**Minimum browser versions:**
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Privacy & Data Storage

- **No data is sent to external servers**
- All calculations happen in your browser
- Checklist progress is saved in browser localStorage only
- Clear your browser data to remove saved progress

## Printing

To print the guide:
1. Use your browser's print function (Cmd/Ctrl + P)
2. The page is optimized for printing with:
   - Hidden navigation tabs
   - Clean white background
   - All content visible

## Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **No external dependencies** - Works completely offline
- **LocalStorage API** - Checklist persistence
- **Responsive CSS Grid** - Modern layout system
- **CSS Animations** - Smooth transitions between tabs

## Updates & Modifications

To update content:
1. **HTML content**: Edit `index.html`
2. **Styling**: Edit `styles.css`
3. **Functionality**: Edit `script.js`

No build process needed - just refresh your browser to see changes.

## Troubleshooting

**Checklist not saving?**
- Ensure cookies/localStorage are enabled in your browser
- Check if you're in private/incognito mode (localStorage won't persist)

**Calculator not working?**
- Ensure JavaScript is enabled
- Check browser console for errors (F12)

**Layout looks broken?**
- Try a different modern browser
- Ensure browser is up to date

## Credits

This application provides general financial planning guidance. For specific financial advice:
- Consult with a qualified financial advisor
- Visit official NY 529 website: [nysaves.org](https://www.nysaves.org)
- Research current Excelsior Scholarship requirements: [hesc.ny.gov](https://www.hesc.ny.gov)

## License

This project is provided as-is for educational and personal planning purposes.

## Support

For issues or questions about this application, please refer to the troubleshooting section above.

For questions about college planning, 529 plans, or financial aid:
- NY 529 Direct Plan: 1-877-NYSAVES
- Federal Student Aid: 1-800-433-3243
- HESC (NY): 1-888-697-4372

---

**Version:** 1.0
**Last Updated:** November 2025
**Personalized for:** Cyrene (age 6) and Cenna (age 1)
**Brand:** Edmund Bogen Team - Luxury real estate brand standards applied
