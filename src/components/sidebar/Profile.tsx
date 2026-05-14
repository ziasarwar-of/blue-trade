"use client";

import { Calendar, Edit, Mail, MapPin, Phone, Shield } from "lucide-react";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
      <div className="max-w-360 mx-auto">
        <div className="space-y-4 md:space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Profile
            </h1>

            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg text-white">
              <Edit className="w-4 h-4" />
              <span className="hidden sm:inline">Edit Profile</span>
            </button>
          </div>

          {/* Profile Card */}
          <div className="bg-[#0f1229] rounded-2xl p-6 md:p-8 border border-blue-500/10 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Avatar */}
              <div className="flex flex-col items-center md:items-start">
                 <div className="w-32 h-32  flex items-center justify-center">
                   <Image
                  src="/ziapic.jpg"
                  alt="Profile"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover rounded-full"
                />

                </div> 
               
                <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm">
                  Change Photo
                </button>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Zia Ur Rehman
                  </h2>

                  <p className="text-gray-400">Premium Member</p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-400 text-sm">Email</span>
                    </div>

                    <p className="text-white">zia@bluetrade.io</p>
                  </div>

                  {/* Phone */}
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-400 text-sm">Phone</span>
                    </div>

                    <p className="text-white">+92 (331) 123-4567</p>
                  </div>

                  {/* Location */}
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-400 text-sm">Location</span>
                    </div>

                    <p className="text-white">Pakistan</p>
                  </div>

                  {/* Member Since */}
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-400 text-sm">
                        Member Since
                      </span>
                    </div>

                    <p className="text-white">January 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Statistics */}
            <div className="bg-[#0f1229] rounded-2xl p-6 border border-blue-500/10 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">
                Account Statistics
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Trades</span>
                  <span className="text-white font-semibold">342</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="text-green-400 font-semibold">68.4%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Profit</span>
                  <span className="text-green-400 font-semibold">
                    $13,850.27
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Active Days</span>
                  <span className="text-white font-semibold">134</span>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-[#0f1229] rounded-2xl p-6 border border-blue-500/10 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">
                Security
              </h3>

              <div className="space-y-4">
                {/* 2FA */}
                <div className="flex items-center justify-between p-3 bg-[#1e293b] rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-white">
                      Two-Factor Authentication
                    </span>
                  </div>

                  <span className="text-green-400 text-sm">Enabled</span>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3 bg-[#1e293b] rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Email Verification</span>
                  </div>

                  <span className="text-green-400 text-sm">Verified</span>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 bg-[#1e293b] rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Phone Verification</span>
                  </div>

                  <span className="text-green-400 text-sm">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
