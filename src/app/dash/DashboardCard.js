"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card"
import { Progress } from "@/app/components/ui/progress"


export default function DashboardCard({ title, value, subtitle, progress }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {progress !== undefined && (
          <Progress value={progress} className="h-2 mt-2" />
        )}
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-2">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  )
}