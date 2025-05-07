"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login form submitted:", formData);
  };

  return (
    <div className="container max-w-md py-16 md:py-24">
      <div className="card bg-background shadow-lg">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center mb-6">Login to Your Account</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email or Username</span>
              </label>
              <div className="input-group">
                <span className="flex items-center justify-center p-3 bg-muted border border-r-0 rounded-l-md">
                  <Mail size={18} />
                </span>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input input-bordered w-full rounded-l-none"
                  required
                />
              </div>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
                <Link href="#" className="label-text-alt text-primary hover:underline">
                  Forgot password?
                </Link>
              </label>
              <div className="input-group">
                <span className="flex items-center justify-center p-3 bg-muted border border-r-0 rounded-l-md">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input input-bordered w-full rounded-l-none"
                  required
                />
              </div>
            </div>
            
            <div className="form-control">
              <div className="flex items-center">
                <input 
                  id="remember-me"
                  type="checkbox" 
                  className="checkbox checkbox-primary"
                />
                <label htmlFor="remember-me" className="label cursor-pointer ml-2">
                  <span className="label-text">Remember me</span>
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
          
          <div className="divider my-6">OR</div>
          
          <p className="text-center text-sm mt-2">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}