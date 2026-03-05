"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="w-full flex justify-center px-4 py-16">
      <Card className="w-full max-w-6xl bg-muted-foreground border-none rounded-2xl shadow-xl">
        <CardContent className="grid md:grid-cols-2 gap-10 p-10">
          {/* LEFT SIDE */}
          <div className="text-background space-y-6">
            <h2 className="text-4xl font-semibold">Contact Us</h2>
            <p className="text-background/70 max-w-md">
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>

            <div className="flex items-center gap-3 text-background/70">
              <Mail className="w-5 h-5 text-secondary" />
              <span>Contact@qbitgames.com</span>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form className="space-y-5">
            <Input
              placeholder="Full Name"
              className="bg-[#131927] border-none text-background placeholder:text-background/70 h-12"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#131927] border-none text-background placeholder:text-background/70 h-12"
            />
            <Input
              placeholder="Phone"
              className="bg-[#131927] border-none text-background placeholder:text-background/70 h-12"
            />
            <Textarea
              placeholder="Message"
              className="bg-[#131927] border-none text-background placeholder:text-background/70 min-h-35"
            />

            <Button
              type="submit"
              className="w-full h-12 text-background font-medium rounded-lg bg-primary transition cursor-pointer"
            >
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
