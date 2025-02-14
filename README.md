# LiveEditor

LiveEditor is a real-time collaborative document editor built with Next.js 15, TypeScript, Tailwind CSS, and ShadCN UI. It allows users to create and share documents, invite collaborators, and edit documents simultaneously with others.

## ✨ Features

- **Shared Document Creation** – Users can create and manage shared documents.
- **Real-Time Collaboration** – Edit documents simultaneously with others.
- **User Invitations** – Invite others to view or edit documents.
- **Threaded Comments** – Open threads and discuss within the document.
- **Live Notifications** – Get notified of changes and updates.
- **Lightweight Editor** – Built using Lexical for a smooth and simplified editing experience.

## 🚀 Tech Stack

- **Next.js 15** – React framework for server-side rendering and static generation.
- **TypeScript** – Strongly typed language for better development experience.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **ShadCN UI** – Modern UI components for a seamless design.
- **Lexical** – Lightweight and extensible editor framework.
- **Liveblocks** – Provides real-time collaboration and presence management.
- **Clerk** – Authentication and user management.
- **Sentry** – Error monitoring and performance tracking.

## 📦 Installation

Clone the repository and install dependencies:

```sh
# Clone the repository
git clone https://github.com/DmytroLysachenko/live-editor.git
cd live-editor

# Install dependencies
npm install  # or yarn install or pnpm install
```

## 🔧 Usage

Start the development server:

```sh
npm run dev  # or yarn dev or pnpm dev
```

Build for production:

```sh
npm run build && npm start
```

## ⚙️ Configuration

Create a `.env.local` file and add the necessary environment variables:

```sh
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=

LIVEBLOCKS_SECRET_KEY=

SENTRY_AUTH_TOKEN=
```

## 📜 Scripts

| Command         | Description                 |
| --------------- | --------------------------- |
| `npm run dev`   | Run the development server  |
| `npm run build` | Build the application       |
| `npm start`     | Start the production server |
| `npm run lint`  | Run ESLint checks           |

## 📌 Contributing

1. Fork the repository.
2. Create a new branch (`feature/my-feature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a Pull Request.

### 📬 Contact

For questions or suggestions, reach out at **dlysachenko98@gmail.com**.
