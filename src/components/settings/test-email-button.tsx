"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Check, AlertCircle } from "lucide-react";
import { sendTestEmailAction } from "@/app/lib/actions/email";

export function TestEmailButton() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isSimulated, setIsSimulated] = useState(false);

  async function handleSend() {
    setStatus("loading");
    try {
      const result = await sendTestEmailAction();
      if (result.success) {
        setStatus("success");
        setIsSimulated(!!result.simulated);
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-2">
      <Button 
        variant="outline" 
        onClick={handleSend}
        disabled={status === "loading"}
        className="gap-2"
      >
        {status === "loading" ? (
          "Sending..."
        ) : status === "success" ? (
          <>
            <Check className="h-4 w-4 text-green-500" />
            Sent!
          </>
        ) : (
          <>
            <Mail className="h-4 w-4" />
            Send Test Email
          </>
        )}
      </Button>
      {status === "success" && (
        <p className="text-[0.7rem] text-muted-foreground italic">
          {isSimulated 
            ? "Email simulation logged to console (no RESEND_API_KEY)." 
            : "Check your inbox for the welcome message."}
        </p>
      )}
      {status === "error" && (
        <p className="text-[0.7rem] text-red-500">
          <AlertCircle className="h-3 w-3 inline mr-1" />
          Failed to send email. Check logs.
        </p>
      )}
    </div>
  );
}
