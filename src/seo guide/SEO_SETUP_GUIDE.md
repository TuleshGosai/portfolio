# SEO Setup Guide

This guide will help you set up Google Search Console verification, sitemap, and other SEO features for your portfolio website.

## ✅ Yes, these are for SEO!

All of these features help improve your website's visibility in search engines:
- **Google Search Console Verification** - Verifies site ownership and provides SEO insights
- **sitemap.xml** - Helps search engines discover and index all your pages
- **robots.txt** - Tells search engines which pages to crawl

## 🔧 Setup Instructions

### 1. Google Search Console Verification

#### Step 1: Get Your Verification Code
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your website URL (e.g., `https://tuleshgosai.com`)
4. Choose "HTML tag" verification method
5. Copy the verification code (it looks like: `abc123def456ghi789`)

#### Step 2: Add Verification Code
1. Open `index.html`
2. Find the line: `<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />`
3. Replace `YOUR_VERIFICATION_CODE` with your actual code from Google Search Console
4. Save and deploy your site

#### Alternative: HTML File Method
If you prefer the HTML file method:
1. Download the verification HTML file from Google Search Console
2. Place it in the `public/` folder
3. Deploy your site

### 2. Sitemap Setup

#### Automatic Generation
The sitemap is already created at `public/sitemap.xml`. To regenerate it:

```bash
npm run generate:sitemap
```

#### Manual Update
Edit `public/sitemap.xml` or update `scripts/generateSitemap.js` to add/remove pages.

#### Submit to Google Search Console
1. After verifying your site in Google Search Console
2. Go to "Sitemaps" in the left menu
3. Enter: `sitemap.xml`
4. Click "Submit"

### 3. robots.txt

The `robots.txt` file is already created at `public/robots.txt`. It:
- Allows all search engines to crawl your site
- Points to your sitemap location

### 4. Update Your Domain

**✅ Already Updated:** All files have been updated with your Vercel domain: `https://tuleshgosai.vercel.app`

If you get a custom domain later, update these files:
1. **`public/sitemap.xml`** - Replace `https://tuleshgosai.vercel.app` with your custom domain
2. **`scripts/generateSitemap.js`** - Update `baseUrl` variable
3. **`src/utils/sitemapBuilder.tsx`** - Update `baseUrl` in `defaultSitemapConfig`
4. **`index.html`** - Update canonical URL and Open Graph URLs
5. **`public/robots.txt`** - Update sitemap URL

### 5. Environment Variable (Optional)

You can set your site URL as an environment variable:

```bash
# .env
SITE_URL=https://tuleshgosai.com
```

Then run:
```bash
SITE_URL=https://tuleshgosai.com npm run generate:sitemap
```

## 📋 Checklist

- [ ] Add Google Search Console verification code to `index.html`
- [ ] Update domain URLs in `sitemap.xml`
- [ ] Update domain URLs in `scripts/generateSitemap.js`
- [ ] Update domain URLs in `src/utils/sitemapBuilder.ts`
- [ ] Update domain URLs in `public/robots.txt`
- [ ] Deploy your site
- [ ] Verify site in Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Test sitemap accessibility at `https://yourdomain.com/sitemap.xml`
- [ ] Test robots.txt at `https://yourdomain.com/robots.txt`

## 🔍 Testing

After deployment, test your setup:

1. **Sitemap**: Visit `https://yourdomain.com/sitemap.xml`
2. **robots.txt**: Visit `https://yourdomain.com/robots.txt`
3. **Google Search Console**: Check "Coverage" and "Sitemaps" sections

## 📚 Additional SEO Tips

1. **Update sitemap regularly** - Run `npm run generate:sitemap` when you add new pages
2. **Monitor Google Search Console** - Check for indexing issues
3. **Keep content fresh** - Update your portfolio regularly
4. **Use descriptive URLs** - Your current structure is good (hash-based sections)
5. **Add structured data** - Consider adding JSON-LD schema markup (future enhancement)

## 🆘 Troubleshooting

### Sitemap not found
- Ensure `sitemap.xml` is in the `public/` folder
- Check that it's being copied to `dist/` during build
- Verify the file is accessible at `/sitemap.xml` after deployment

### Verification failed
- Double-check the verification code is correct
- Ensure there are no extra spaces or characters
- Try the HTML file method as an alternative

### Pages not indexing
- Submit sitemap in Google Search Console
- Wait 24-48 hours for initial indexing
- Check for crawl errors in Search Console
