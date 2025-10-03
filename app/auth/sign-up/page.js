"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Signup form submitted:", form);
      // Here you would typically handle the signup logic
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signup with ${provider}`);
    // Handle social signup logic
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

      {/* Signup Card */}
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-xl">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="bg-primary-gradient mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <User className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-poppins text-2xl font-bold text-gray-900">
                Create Your Account
              </h1>
              <p className="font-poppins mt-2 text-gray-600">
                Join thousands of travelers exploring the world
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="font-poppins mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="font-poppins focus:border-primary focus:ring-primary focus:ring-opacity-20 block w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-10 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2"
                  />
                </div>
              </div>

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
                <label className="font-poppins mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>
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
                    placeholder="Create a strong password"
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
                <p className="font-poppins mt-2 text-xs text-gray-500">
                  Use 8+ characters with a mix of letters, numbers & symbols
                </p>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  required
                  className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
                />
                <label className="font-poppins ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-primary hover:text-primary-hover"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:text-primary-hover"
                  >
                    Privacy Policy
                  </Link>
                </label>
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
                    <span className="ml-2">Creating Account...</span>
                  </div>
                ) : (
                  "Create Account"
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

            {/* Social Signup Buttons */}
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => handleSocialSignup("google")}
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

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="font-poppins text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/auth/sign-in"
                  className="font-poppins text-primary hover:text-primary-hover font-semibold transition-colors duration-300"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="font-poppins text-sm text-gray-500">
              By signing up, you agree to our terms and confirm you have read
              our{" "}
              <Link
                href="/privacy"
                className="text-primary hover:text-primary-hover"
              >
                Privacy Policy
              </Link>
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
