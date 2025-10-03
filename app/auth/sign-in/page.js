"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login form submitted:", form);
      // Here you would typically handle the login logic
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    // Handle forgot password logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      {/* Header Section */}
      <div className="container mx-auto mb-8 px-4">
        <Link href="/" className="inline-block">
          <Image
            src="/assets/img/header-logo2.svg"
            alt="Travel Explorer Logo"
            width={160}
            height={50}
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Login Card */}
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-xl">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="bg-primary-gradient mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <LogIn className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-poppins text-2xl font-bold text-gray-900">
                Welcome Back
              </h1>
              <p className="font-poppins mt-2 text-gray-600">
                Sign in to your account to continue your journey
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="font-poppins mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="font-poppins focus:border-primary focus:ring-primary focus:ring-opacity-20 block w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-10 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="font-poppins mb-2 block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="font-poppins text-primary hover:text-primary-hover text-sm font-medium transition-colors duration-300"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    className="font-poppins focus:border-primary focus:ring-primary focus:ring-opacity-20 block w-full rounded-lg border border-gray-300 bg-white py-3 pr-12 pl-10 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
                  />
                  <label className="font-poppins ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary-gradient hover:shadow-primary/25 font-poppins w-full rounded-lg px-4 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg disabled:opacity-70"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    <span className="ml-2">Signing In...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="font-poppins mx-4 text-sm font-medium text-gray-500">
                Or continue with
              </span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => handleSocialLogin("google")}
                className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
              >
                <Image
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <span className="font-poppins ml-2 text-sm font-medium text-gray-700">
                  Google
                </span>
              </button>
            </div>

            {/* Signup Link */}
            <div className="mt-8 text-center">
              <p className="font-poppins text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/sign-up"
                  className="font-poppins text-primary hover:text-primary-hover font-semibold transition-colors duration-300"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="font-poppins text-sm text-gray-500">
              Secure login with encryption. Your privacy is our priority.
            </p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
    </div>
  );
}
