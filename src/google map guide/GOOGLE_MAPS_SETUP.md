# Google Maps Setup Guide (Free Tier)

## Getting a Free Google Maps API Key

Google Maps offers a **free tier** with $200 in credits per month, which is more than enough for most portfolio websites.

### Steps to Get Your Free API Key:

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create a New Project** (or select existing)
   - Click "Select a project" → "New Project"
   - Enter project name (e.g., "Portfolio Website")
   - Click "Create"

3. **Enable Google Maps JavaScript API**
   - Go to "APIs & Services" → "Library"
   - Search for "Maps JavaScript API"
   - Click on it and press "Enable"

4. **Create API Key**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key

5. **Restrict API Key (Recommended for Security)**
   - Click on your API key to edit it
   - Under "API restrictions", select "Restrict key"
   - Choose "Maps JavaScript API"
   - Under "Application restrictions", you can restrict by HTTP referrer:
     - Add: `localhost:*` (for development)
     - Add: `yourdomain.com/*` (for production)
   - Click "Save"

6. **Add API Key to Your Project**
   - Create or edit `.env` file in the root directory
   - Add: `VITE_GOOGLE_MAPS_API_KEY=your_api_key_here`
   - Replace `your_api_key_here` with your actual API key

### Free Tier Limits:

- **$200 free credit per month**
- Dynamic Maps: ~28,000 loads/month (free)
- Static Maps: ~100,000 loads/month (free)
- This is more than enough for a portfolio website!

### Important Notes:

- The API key is public (it's visible in your code), so always restrict it
- Never commit your `.env` file to Git (it's already in `.gitignore`)
- The free tier is sufficient for most personal/professional portfolios
- You'll only be charged if you exceed the $200 monthly credit

### Example `.env` file:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Google Analytics (Optional)
VITE_GA_MEASUREMENT_ID=your_ga_measurement_id
```

### Troubleshooting:

- If the map doesn't load, check the browser console for errors
- Make sure the API key is correctly set in your `.env` file
- Verify that "Maps JavaScript API" is enabled in Google Cloud Console
- Check that your API key restrictions allow your domain
