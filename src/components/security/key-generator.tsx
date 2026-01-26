"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Copy, Check } from "lucide-react";
import { createApiKey } from "@/app/lib/actions/security";

export function KeyGenerator() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [newKey, setNewKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const key = await createApiKey(name);
      setNewKey(key);
      setName("");
    } catch (err) {
      alert("Failed to generate key");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (newKey) {
      navigator.clipboard.writeText(newKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
        setOpen(val);
        if (!val) setNewKey(null);
    }}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Generate New Key
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create API Key</DialogTitle>
          <DialogDescription>
            This key will allow you to authenticate with the Consonant API.
          </DialogDescription>
        </DialogHeader>
        
        {!newKey ? (
          <form onSubmit={handleGenerate} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="key-name">Key Name</Label>
              <Input
                id="key-name"
                placeholder="Production API Key"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Generating..." : "Generate Key"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4 pt-4">
            <div className="rounded-md bg-yellow-50 p-3 border border-yellow-100 text-xs text-yellow-800">
               <strong>Important:</strong> Copy this key now! It won't be shown again for security reasons.
            </div>
            <div className="relative flex items-center">
              <code className="flex-1 bg-muted p-3 rounded font-mono text-sm break-all pr-12">
                {newKey}
              </code>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2"
                onClick={copyToClipboard}
              >
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <Button className="w-full" variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
