# Bright Data Unlock Webhook Demo

A simple Next.js webhook listener for Bright Data unlock events, designed to run directly on Vercel.

[![Watch the video](https://img.youtube.com/vi/zbz6TY3fsms/maxresdefault.jpg)](https://youtu.be/zbz6TY3fsms?si=dtPyDcBP_tJEJgCt "Watch on YouTube")

## Deploy to Vercel

### Option 1: Deploy Button (Fastest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/brightdata/bright-data-unlock-webhook-demo)

### Option 2: GitHub Integration

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

### Option 3: Manual Git Import

1. Fork or clone this repository to your GitHub account
2. Connect your GitHub account to Vercel
3. Import the repository from your Vercel dashboard
4. Deploy automatically

## Your Webhook Endpoint

Once deployed, your webhook endpoint will be:
```
https://your-project-name.vercel.app/api/webhook
```

## Testing the Webhook

### Test with curl:
```bash
curl -X POST https://your-project-name.vercel.app/api/webhook \
  -H "Content-Type: application/json" \
  -d '{"event": "unlock", "user_id": "123", "data": "test"}'
```

### Check if webhook is active:
```bash
curl https://your-project-name.vercel.app/api/webhook
```

## Webhook Handler

The webhook handler is located in `app/api/webhook/route.js`. Add your custom logic here:

```javascript
// Place your webhook handling code after this line:
console.log("Webhook received:", data)
```

## Project Structure

```
bright-data-unlock-webhook-demo/
├── app/
│   ├── api/
│   │   └── webhook/
│   │       └── route.js      # Webhook endpoint
│   └── page.js               # Home page
├── package.json
└── README.md
```

## Monitoring and Logs

View webhook logs in the Vercel dashboard:
1. Go to your project dashboard on Vercel
2. Click on "Functions" tab
3. Select your webhook function to view logs
4. Monitor incoming requests and responses

## Troubleshooting

### Common Issues:

1. **Webhook not receiving data**
   - Check the URL is correct: `/api/webhook`
   - Ensure Content-Type is `application/json`

2. **Deployment fails**
   - Check Vercel build logs in the dashboard
   - Ensure all dependencies are properly listed

3. **Function timeout**
   - Webhook processing should complete within 10 seconds (Hobby tier)
   - For longer processing, consider async handling

## Support

For deployment issues, check the Vercel documentation or open an issue in this repository.
