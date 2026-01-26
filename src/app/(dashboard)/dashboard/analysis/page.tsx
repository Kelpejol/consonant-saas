import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Construction } from "lucide-react";

export default function AnalysisPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Analysis</h2>
      
      <Card className="bg-blue-50 border-blue-100">
        <CardHeader>
           <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              <CardTitle>Advanced ROI Analytics</CardTitle>
           </div>
           <CardDescription className="text-blue-600">
             We are crunching your grain usage data to provide deeper insights into customer profitability.
           </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
            <Construction className="h-12 w-12 text-blue-300 animate-bounce mb-4" />
            <p className="text-sm font-medium text-blue-800">Coming Soon: Segment-by-segment grain attribution.</p>
        </CardContent>
      </Card>
    </div>
  );
}
