
import { Card, CardContent } from "@/components/ui/card"

export default function NCareDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">NCare Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">إجمالي الحجوزات</h2>
            <p className="text-3xl font-bold text-blue-600">1,245</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">العملاء الجدد</h2>
            <p className="text-3xl font-bold text-green-600">320</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">الصالونات</h2>
            <p className="text-3xl font-bold text-purple-600">87</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
