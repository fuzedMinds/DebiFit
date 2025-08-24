# 🚀 DebiFit Website Deployment Guide

## 📋 Prerequisites
- GitHub account with your DebiFit repository
- Vercel account (free tier available)

## 🔧 Vercel Deployment Steps

### 1. **Prepare Your Repository**
```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. **Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository: `bhakti-pradhan/DebiFit`
4. Vercel will automatically detect it's a Vite project
5. Click **"Deploy"**

### 3. **Configuration (Automatic)**
Vercel will automatically use these settings from `vercel.json`:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite
- **Install Command**: `npm install`

### 4. **Environment Variables (if needed)**
If you add any environment variables later, add them in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add any `.env` variables you need

## 🌐 Custom Domain (Optional)
1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain (e.g., `debifit.com`)
3. Follow DNS configuration instructions

## 📱 Post-Deployment Checklist
- [ ] Test all pages load correctly
- [ ] Verify WhatsApp integration works
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify logo displays correctly
- [ ] Test all training service links

## 🔄 Automatic Deployments
- Every push to `main` branch triggers automatic deployment
- Preview deployments are created for pull requests
- Rollback to previous versions available in dashboard

## 🆘 Troubleshooting
If deployment fails:
1. Check build logs in Vercel dashboard
2. Ensure `npm run build` works locally
3. Verify all dependencies are in `package.json`
4. Check for any build errors in console

## 📞 Support
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vite Documentation: [vitejs.dev](https://vitejs.dev)

---
**Your DebiFit website will be live at: `https://your-project-name.vercel.app`**
