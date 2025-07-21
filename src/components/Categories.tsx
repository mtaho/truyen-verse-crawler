import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sword, GraduationCap, Sparkles, Clock, Flame } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Ngôn Tình",
    icon: Heart,
    count: "2,450",
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950"
  },
  {
    id: 2,
    name: "Kiếm Hiệp",
    icon: Sword,
    count: "1,823",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: 3,
    name: "Truyện Teen",
    icon: GraduationCap,
    count: "3,124",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    id: 4,
    name: "Tiên Hiệp",
    icon: Sparkles,
    count: "1,567",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    id: 5,
    name: "Mới Cập Nhật",
    icon: Clock,
    count: "892",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  },
  {
    id: 6,
    name: "Hot Nhất",
    icon: Flame,
    count: "445",
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950"
  }
];

export const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thể Loại Truyện</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Khám phá đa dạng thể loại truyện từ lãng mạn đến phiêu lưu
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-card border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className={`${category.bgColor} ${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.count} truyện
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Xem tất cả thể loại
          </Button>
        </div>
      </div>
    </section>
  );
};