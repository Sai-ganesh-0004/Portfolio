# Resume Setup Instructions

## How to Add Your PDF Resume

1. **Prepare your resume**: Make sure your resume is in PDF format
2. **Rename the file**: Name it `Sai_Ganesh_Resume.pdf` (or update the filename in Hero.jsx)
3. **Place the file**: Copy your resume PDF to this location:
   ```
   public/assets/Sai_Ganesh_Resume.pdf
   ```

## Current Setup

The "View My Resume" button is configured to:
- **Download**: Automatically download the PDF when clicked
- **Open in new tab**: Also opens the PDF in a new browser tab
- **File location**: `/public/assets/Sai_Ganesh_Resume.pdf`

## To Change the Filename

If you want to use a different filename, update the following in `src/components/Hero/Hero.jsx`:

```jsx
<a
  href="/assets/YOUR_FILENAME.pdf"  // Change this
  download="YOUR_FILENAME.pdf"      // And this
  target="_blank"
  rel="noopener noreferrer"
>
  View My Resume
</a>
```

## Testing

1. Add your PDF resume to `public/assets/`
2. Start the development server: `npm run dev`
3. Click "View My Resume" button
4. The PDF should download and open in a new tab

That's it! Your resume download feature is ready to use.
