"use client";

import { useState } from "react";
import Link from "next/link";
import { AtSign, Lock, User, Users } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralId: "",
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
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle registration logic here
    console.log("Registration form submitted:", formData);
  };

  return (
    <div className="container max-w-lg py-16 md:py-24">
      <div className="card bg-background shadow-lg">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <div className="input-group">
                <span className="flex items-center justify-center p-3 bg-muted border border-r-0 rounded-l-md">
                  <User size={18} />
                </span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="johndoe"
                  className="input input-bordered w-full rounded-l-none"
                  required
                />
              </div>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="input-group">
                <span className="flex items-center justify-center p-3 bg-muted border border-r-0 rounded-l-md">
                  <AtSign size={18} />
                </span>
                <input
                  type="email"
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
              <p className="text-xs text-muted-foreground mt-1">
                Must be at least 8 characters
              </p>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Referral ID (Optional)</span>
              </label>
              <div className="input-group">
                <span className="flex items-center justify-center p-3 bg-muted border border-r-0 rounded-l-md">
                  <Users size={18} />
                </span>
                <input
                  type="text"
                  name="referralId"
                  value={formData.referralId}
                  onChange={handleChange}
                  placeholder="Enter referral ID"
                  className="input input-bordered w-full rounded-l-none"
                />
              </div>
            </div>
            
            <div className="form-control mt-4">
              <div className="flex items-start">
                <input 
                  id="terms" 
                  type="checkbox" 
                  className="checkbox checkbox-primary mt-1"
                  required
                />
                <label htmlFor="terms" className="label cursor-pointer ml-2">
                  <span className="label-text">
                    I agree to the{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/disclaimer" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                  </span>
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary w-full mt-6">
              Register
            </button>
          </form>
          
          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}