// /lib/context/AuthContext.tsx
/**
 * Authentication Context Provider
 * 
 * This context provides authentication state and functions to the entire application.
 * 
 * Features:
 * - Global authentication state management
 * - User information storage
 * - Token storage and management
 * - Protected routes implementation
 * - Persistence across page refreshes
 * 
 * Context values:
 * - user: The currently authenticated user or null
 * - isAuthenticated: Boolean indicating if a user is logged in
 * - isLoading: Boolean for auth loading state
 * - login(username, password): Function to authenticate user
 * - logout(): Function to log out user
 * - updateUser(userData): Function to update user information
 * 
 * Usage:
 * 1. Wrap your application with this provider in the root layout:
 * ```
 * // In app/layout.tsx
 * import { AuthProvider } from '@/lib/context/AuthContext';
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <AuthProvider>
 *           {children}
 *         </AuthProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 * 
 * 2. Access the context in components using useAuth hook:
 * ```
 * import { useAuth } from '@/lib/hooks/useAuth';
 * 
 * function ProfileComponent() {
 *   const { user, logout } = useAuth();
 *   
 *   if (!user) return <div>Loading...</div>;
 *   
 *   return (
 *     <div>
 *       <h1>Welcome, {user.name}</h1>
 *       <button onClick={logout}>Logout</button>
 *     </div>
 *   );
 * }
 * ```
 * 
 * Implementation details:
 * - Uses localStorage/cookies for token persistence
 * - Includes automatic token refresh logic
 * - Handles expired sessions
 * - Manages redirect on auth state changes
 */

