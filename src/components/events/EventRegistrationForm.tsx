"use client";

import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface Props {
  isFree: boolean;
  price: string;
  date: string;
  time: string;
  duration: string;
  buttonLabel: string;
}

export default function EventRegistrationForm({
  isFree,
  price,
  date,
  time,
  duration,
  buttonLabel,
}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Registered! Check your email for the session link.");
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display font-bold text-2xl">Register for this Session</h2>
        <p className="text-muted-foreground text-sm mt-1">
          {isFree ? "Free registration — seats are limited." : `Only ${price} per seat.`}
        </p>
      </div>

      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex justify-between">
          <span>Date</span>
          <span className="font-medium text-foreground">{date}</span>
        </div>
        <div className="flex justify-between">
          <span>Time</span>
          <span className="font-medium text-foreground">{time}</span>
        </div>
        <div className="flex justify-between">
          <span>Duration</span>
          <span className="font-medium text-foreground">{duration}</span>
        </div>
        <div className="flex justify-between">
          <span>Format</span>
          <span className="font-medium text-foreground">Live Online</span>
        </div>
      </div>

      <div className="divider-gradient" />

      <form onSubmit={handleSubmit} className="space-y-3" aria-label="Event registration form">
        <div>
          <label htmlFor="reg-name" className="text-xs font-semibold text-muted-foreground block mb-1">
            Full Name *
          </label>
          <input id="reg-name" type="text" required placeholder="Your full name" className="input-premium" />
        </div>
        <div>
          <label htmlFor="reg-email" className="text-xs font-semibold text-muted-foreground block mb-1">
            Email *
          </label>
          <input id="reg-email" type="email" required placeholder="your@email.com" className="input-premium" />
        </div>
        <div>
          <label htmlFor="reg-phone" className="text-xs font-semibold text-muted-foreground block mb-1">
            Phone
          </label>
          <input id="reg-phone" type="tel" placeholder="+91 98765 43210" className="input-premium" />
        </div>
        <button type="submit" className="btn-cta w-full justify-center">
          {buttonLabel}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </form>

      <p className="text-xs text-muted-foreground text-center">
        You&apos;ll receive a confirmation email with the session link.
      </p>
    </div>
  );
}
