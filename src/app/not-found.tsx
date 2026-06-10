"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, BookOpen, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center space-y-8"
        >
          <div className="space-y-2">
            <p className="font-display font-black text-[120px] leading-none text-gradient-primary">
              404
            </p>
            <h1 className="font-display font-bold text-3xl">Page Not Found</h1>
            <p className="text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="divider-gradient" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/" className="btn-primary text-sm justify-center">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link href="/courses" className="btn-secondary text-sm justify-center">
              <BookOpen className="w-4 h-4" />
              Courses
            </Link>
            <Link href="/events" className="btn-secondary text-sm justify-center">
              <Calendar className="w-4 h-4" />
              Events
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
