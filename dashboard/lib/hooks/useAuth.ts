// /lib/hooks/useAuth.ts
/**
 * Custom hook for authentication functionality
 * 
 * This hook provides:
 * - Login functionality
 * - Logout functionality
 * - Current user information
 * - Authentication status checking
 * - Token management
 * - Protected route handling
 * 
 * Usage:
 * ```
 * const { user, isLoading, login, logout, isAuthenticated } = useAuth();
 * 
 * // To login
 * const handleLogin = async () => {
 *   try {
 *     await login(username, password);
 *     // Redirect or perform post-login actions
 *   } catch (error) {
 *     // Handle login errors
 *   }
 * };
 * 
 * // To logout
 * const handleLogout = () => {
 *   logout();
 *   // Redirect to login page
 * };
 * 
 * // To check if user is authenticated
 * if (!isAuthenticated) {
 *   // Redirect or show login form
 * }
 * ```
 * 
 *@ returns {Object} Auth methods and state
 */