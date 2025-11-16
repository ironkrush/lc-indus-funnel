# Shree Ganesh Enterprise - Landing Page

A modern, responsive landing page for Shree Ganesh Enterprise, an industrial workforce solutions company.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure n8n Webhook

1. Create an n8n workflow with a Webhook trigger
2. Set the webhook to accept POST requests
3. Copy your webhook URL
4. Create a `.env` file in the project root:
   ```env
   VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact-form
   ```

### 3. Run the Application
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 📧 Contact Form Integration

The contact form sends data to your n8n webhook with the following structure:

```json
{
  "name": "John Doe",
  "company": "ABC Corp",
  "service": "Industrial Loading/Unloading",
  "phone": "1234567890",
  "location": "Mumbai",
  "message": "I need your services..."
}
```

### Setting up n8n Workflow

1. **Webhook Node**: Configure to receive POST requests
2. **Email Node** (optional): Send email notifications
3. **Database Node** (optional): Store submissions
4. **Any other automation** you need!

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **React Hook Form** + **Zod** - Form validation
- **n8n** - Workflow automation

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_N8N_WEBHOOK_URL` | Your n8n webhook URL | Yes |

## 📝 License

Private project for Shree Ganesh Enterprise.

