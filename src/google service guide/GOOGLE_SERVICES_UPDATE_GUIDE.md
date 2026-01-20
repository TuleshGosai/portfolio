# Google Analytics & Search Console Update Guide

After changing your domain from `https://tuleshgosai.netlify.app` to `https://tuleshgosai.vercel.app`, you need to update both Google Analytics and Google Search Console.

## ✅ Google Analytics (GA4)

### Current Status
- ✅ Google Analytics is already set up in your project
- ✅ Measurement ID: `G-MJWHCYZPYH` (from `.env` file)
- ✅ Tracking code is integrated in `src/components/GoogleAnalytics.tsx`

### What You Need to Do:

#### Option 1: No Changes Needed (Recommended)
**Your GA4 tracking code will automatically track the new domain!** 

Google Analytics tracks by the tracking code (G-MJWHCYZPYH), not by domain. As long as:
- ✅ The same tracking code is on the new site
- ✅ The site is deployed and live

**Your analytics will continue working automatically** - no changes needed in Google Analytics dashboard!

#### Option 2: Update Domain Settings (Optional)
If you want to explicitly add the new domain in GA4:

1. **Go to Google Analytics**: [analytics.google.com](https://analytics.google.com)
2. **Navigate to Admin** (gear icon) → **Data Streams**
3. **Click on your web stream** (your portfolio)
4. **Add the new domain** to "Web stream details":
   - Website URL: `https://tuleshgosai.vercel.app`
5. **Save changes**

**Note**: This is optional - GA4 will track both domains automatically if the same tracking code is used.

#### Verify It's Working:
1. Visit your new site: `https://tuleshgosai.vercel.app`
2. Navigate through a few pages
3. Go to Google Analytics → **Reports** → **Realtime**
4. You should see your visit appear within 30 seconds

---

## 🔍 Google Search Console

### Current Status
- ✅ Verification code is already in `index.html`: `BdOM9VnfoSeS1L-qhnV0BMOBcZC34mdzsmjuJgkTBPQ`
- ⚠️ **You need to add the new Vercel domain as a new property**

### What You Need to Do:

#### Step 1: Add New Property for Vercel Domain

1. **Go to Google Search Console**: [search.google.com/search-console](https://search.google.com/search-console)

2. **Add Property**:
   - Click the property dropdown (top left)
   - Click **"Add property"**
   - Select **"URL prefix"**
   - Enter: `https://tuleshgosai.vercel.app`
   - Click **"Continue"**

3. **Verify Ownership**:
   - Since your verification code is already in `index.html`, Google should auto-verify
   - If not, choose **"HTML tag"** method
   - The verification code is already in your HTML: `BdOM9VnfoSeS1L-qhnV0BMOBcZC34mdzsmjuJgkTBPQ`
   - Click **"Verify"**

#### Step 2: Submit New Sitemap

1. **In the new property**, go to **"Sitemaps"** (left sidebar)

2. **Add sitemap**:
   - Enter: `sitemap.xml`
   - Click **"Submit"**

3. **Wait for processing** (usually takes a few minutes to 24 hours)

#### Step 3: Link Google Analytics (Optional but Recommended)

1. **In Google Search Console**:
   - Go to **Settings** (gear icon) → **Google Analytics property**
   - Select your GA4 property
   - Click **"Save"**

   This links Search Console data with Analytics for better insights.

#### Step 4: Set Up Change of Address (Optional)

If you want to transfer some SEO value from the old domain:

1. **In the NEW property** (Vercel domain):
   - Go to **Settings** → **Change of address**
   - Select the old Netlify property: `https://tuleshgosai.netlify.app`
   - Click **"Validate and update"**

**Note**: This is optional. For a portfolio site, you can skip this and just focus on the new domain.

---

## 📋 Checklist

### Google Analytics
- [ ] Verify tracking code is working on new domain (check Realtime reports)
- [ ] (Optional) Add new domain to GA4 data stream settings
- [ ] (Optional) Link Search Console to Analytics

### Google Search Console
- [ ] Add new property: `https://tuleshgosai.vercel.app`
- [ ] Verify ownership (should auto-verify with existing code)
- [ ] Submit sitemap: `sitemap.xml`
- [ ] Wait for sitemap processing (check status)
- [ ] (Optional) Set up change of address from old domain
- [ ] Link Google Analytics property

---

## 🎯 Quick Actions Summary

### Immediate Actions (Do First):
1. ✅ **Google Analytics**: No action needed - will work automatically
2. ✅ **Google Search Console**: Add new property for Vercel domain
3. ✅ **Submit sitemap** in new Search Console property

### Optional Actions (Can Do Later):
- Update GA4 domain settings
- Set up change of address
- Link Search Console to Analytics

---

## ⚠️ Important Notes

1. **Google Analytics**: 
   - Works automatically with the same tracking code
   - No data loss - all data continues in the same property
   - You'll see traffic from both domains (if old one still works)

2. **Google Search Console**:
   - **Must add new property** - old and new domains are separate
   - Old domain data stays in old property
   - New domain starts fresh (but will index faster with sitemap)

3. **Verification Code**:
   - Your verification code in `index.html` works for both domains
   - Google will auto-verify if the code is present

4. **Sitemap**:
   - Already updated with new Vercel URLs ✅
   - Just need to submit it in the new Search Console property

---

## 🚀 After Setup

### Monitor These:

1. **Google Analytics**:
   - Check Realtime reports to see if tracking works
   - Monitor traffic from new domain

2. **Google Search Console**:
   - Check "Coverage" tab for indexing status
   - Monitor "Performance" tab for search impressions/clicks
   - Check "Sitemaps" tab to ensure it's processed

3. **Test Everything**:
   - Visit: `https://tuleshgosai.vercel.app`
   - Test all pages load correctly
   - Verify sitemap: `https://tuleshgosai.vercel.app/sitemap.xml`
   - Check robots.txt: `https://tuleshgosai.vercel.app/robots.txt`

---

## 📞 Need Help?

- **Google Analytics Help**: [support.google.com/analytics](https://support.google.com/analytics)
- **Search Console Help**: [support.google.com/webmasters](https://support.google.com/webmasters)
- **Search Console Forum**: [support.google.com/webmasters/community](https://support.google.com/webmasters/community)

---

**Summary**: 
- ✅ **Google Analytics**: No changes needed - works automatically!
- ⚠️ **Google Search Console**: Add new property and submit sitemap

Good luck with your new Vercel deployment! 🎉
