"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
  FileText,
  ExternalLink,
  Globe,
  Info,
  Users,
  ArrowRight,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const institutionProfile = {
    name: "University of Engineering & Management (UEM), Kolkata",
    description: `University of Engineering & Management (UEM), Kolkata stands as a premier research-driven institution, recognized for excellence in AI/ML, supercomputing, IoT, cybersecurity, blockchain, and interdisciplinary engineering research. With strong industry–academia collaborations, state-of-the-art laboratories, high-impact publications, patents, and innovation-led initiatives, UEM Kolkata fosters a future-ready research ecosystem that empowers students and faculty to address real-world challenges and lead technological transformation at national and global levels.`,
    links: {
      uem: "https://uem.edu.in",
      iem: "https://iem.edu.in",
      linkedin:
        "https://www.linkedin.com/company/uem-innovation-and-entrepreneurship-development-cell/",
    },
  };

  const contactInfo = {
    address: `University Of Engineering & Management, New Town, University Area, Plot No. III, B/5, New Town Rd, Action Area III, Newtown, New Town, West Bengal 743502`,
    email: "iedc.iotcsbt@iem.edu.in",
    website: "https://iedc-journal.vercel.app",
    workingHours: `Monday - Friday: 9:00 AM - 6:00 PM
Saturday: 9:00 AM - 1:00 PM
Sunday: Closed`,
  };

  const editorialBoard = [
    {
      id: 1,
      name: "Prof.(Dr.) Sandip Mandal",
      designation: "Head of the Department, CSE(IoT, CS, BT) & Chief Editor",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "sandip.mandal@uem.edu.in",
      address:
        "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink:
        "https://www.linkedin.com/in/dr-sandip-mandal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Sandip.jpeg",
      role: "chief",
    },
    {
      id: 3,
      name: "Prof. Avik Kumar Das",
      designation: "Editor",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "avikkumar.das@uem.edu.in",
      address:
        "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink:
        "https://www.linkedin.com/in/avikdasetc?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Avik.jpeg",
      role: "editor",
    },
    {
      id: 4,
      name: "Prof. Apurba Nandi",
      designation: "Editor",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "apurba.nandi@uem.edu.in",
      address:
        "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink:
        "https://www.linkedin.com/in/apurba-nandi-8b63b2174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Apurba.jpeg",
      role: "editor",
    },
    {
      id: 5,
      name: "Suman Mishra",
      designation: "Student Member",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "suman.mishra2022@uem.edu.in",
      address:
        "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/suman-mishra420/",
      image: "/Suman.jpg",
      role: "student",
    },
    {
      id: 6,
      name: "Tista Mukherjee",
      designation: "Student Member",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "tista.mukherjee2023@uem.edu.in",
      address:
        "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink:
        "https://www.linkedin.com/in/tista-mukherjee-8a574a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Tista.jpg",
      role: "student",
    },
    {
      id: 7,
      name: "Somrik Mondal",
      designation: "Student Member",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "somrik.mondal2023@uem.edu.in",
      address:
        "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink:
        "https://www.linkedin.com/in/somrik-mondal-558aa8321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Somrik.jpg",
      role: "student",
    },
  ];

  // Show only first 3 members for contact page preview
  const featuredMembers = editorialBoard.slice(0, 3);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Header Section with improved spacing */}
      <section className="pt-28 md:pt-40 pb-20 md:pb-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200">
              <span className="text-sm font-medium text-blue-700">
                We're here to help
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wide text-gray-900 mb-6">
              Get in <span className="text-blue-600 font-medium">Touch</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Connect with our editorial team, submit your research, or find
              answers to your questions. We're committed to supporting the
              global research community.
            </p>
          </div>
        </div>
      </section>

      {/* Institution Profile Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-50 rounded-full border border-blue-200">
              <span className="text-sm font-medium text-blue-700">
                About Our Institution
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              {institutionProfile.name}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {institutionProfile.description}
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={institutionProfile.links.uem}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl group"
                >
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  UEM Website
                </a>
                <a
                  href={institutionProfile.links.iem}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl group"
                >
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  IEM Website
                </a>
                <a
                  href={institutionProfile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl group"
                >
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  IEDC LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Information with improved spacing */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 font-light">
                  Multiple ways to reach out to us
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Our Address
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email & Website Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Email Us
                      </h3>
                    </div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-purple-600 hover:text-purple-700 font-medium break-all text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  {/* Website */}
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Website
                      </h3>
                    </div>
                    <a
                      href={contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium break-all text-sm"
                    >
                      Visit Our Site
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Working Hours
                      </h3>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {contactInfo.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                  Send a Message
                </h2>
                <p className="text-lg text-gray-600 font-light">
                  We'll get back to you as soon as possible
                </p>
              </div>

              {/* Alert */}
              {showAlert && (
                <Alert className="bg-blue-50 border-blue-200 animate-in fade-in slide-in-from-top-2 duration-500">
                  <Info className="h-5 w-5 text-blue-600" />
                  <AlertTitle className="text-blue-900">
                    Form Under Development
                  </AlertTitle>
                  <AlertDescription className="text-blue-800">
                    We're currently working on this feature. In the meantime,
                    please reach out to us directly via email at{" "}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-medium underline hover:text-blue-900"
                    >
                      {contactInfo.email}
                    </a>
                  </AlertDescription>
                </Alert>
              )}

              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john.doe@example.com"
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>

                  {/* Affiliation */}
                  <div>
                    <label
                      htmlFor="affiliation"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Institutional Affiliation
                    </label>
                    <input
                      type="text"
                      id="affiliation"
                      name="affiliation"
                      placeholder="Your university or organization"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="submission">Manuscript Submission</option>
                      <option value="review">Peer Review Inquiry</option>
                      <option value="editorial">Editorial Board</option>
                      <option value="technical">Technical Support</option>
                      <option value="subscription">Subscription</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Please describe your inquiry in detail..."
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Board Preview Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-50 rounded-full border border-blue-200">
              <span className="text-sm font-medium text-blue-700">
                Our Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Editorial Board
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Meet some of our distinguished editorial team members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">
            {featuredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group"
              >
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">
                    {member.designation}
                  </p>
                  <p className="text-xs text-gray-600">{member.department}</p>
                </div>

                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2.5 rounded-xl transition-colors group/link"
                  >
                    <Mail className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform flex-shrink-0" />
                    <span className="font-medium truncate">{member.email}</span>
                  </a>
                  <a
                    href={member.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-xs bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-2.5 rounded-xl transition-colors group/link"
                  >
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform" />
                    <span className="font-medium">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Board Button */}
          <div className="text-center">
            <Link
              href="/editorial-board"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl group"
            >
              <Users className="w-5 h-5" />
              View Complete Editorial Board
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section with improved spacing */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-green-50 rounded-full border border-green-200">
              <span className="text-sm font-medium text-green-700">
                Visit Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Find Us on the Map
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Located in the heart of Kolkata's education hub
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5125635141785!2d88.48732647452583!3d22.5599251334362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata%20(UEM)!5e0!3m2!1sen!2sin!4v1757783173456!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Contact;
