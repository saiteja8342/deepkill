#!/bin/bash
# DEEPKIL Asset Setup Script
# Copies the brand logo and generated 3D product packaging renders into assets/images/
# so the repository is 100% self-contained and ready for GitHub Pages.

set -e

mkdir -p assets/images

echo "📦 Synchronizing DEEPKIL brand assets..."

# Logo
cp "/Users/vutukurisaiteja/.gemini/antigravity-ide/brain/88125a75-842d-4b5a-918e-759e62e9b434/.user_uploaded/media_1790181541123.png" "assets/images/deepkil-logo.png"

# Product Renders
cp "/Users/vutukurisaiteja/.gemini/antigravity-ide/brain/88125a75-842d-4b5a-918e-759e62e9b434/deepkill_hero_bottle_1790181756682.jpg" "assets/images/deepkil-hero-bottle.jpg"
cp "/Users/vutukurisaiteja/.gemini/antigravity-ide/brain/88125a75-842d-4b5a-918e-759e62e9b434/deepkill_citrus_red_1790181782748.jpg" "assets/images/deepkil-citrus-red.jpg"
cp "/Users/vutukurisaiteja/.gemini/antigravity-ide/brain/88125a75-842d-4b5a-918e-759e62e9b434/deepkill_marine_fresh_1790182034132.jpg" "assets/images/deepkil-marine-fresh.jpg"
cp "/Users/vutukurisaiteja/.gemini/antigravity-ide/brain/88125a75-842d-4b5a-918e-759e62e9b434/deepkill_twin_pack_1790182061013.jpg" "assets/images/deepkil-twin-pack.jpg"

echo "✅ All DEEPKIL assets copied into assets/images/!"
echo "🚀 Repository is ready to commit and push to GitHub."
