import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Eye, Heart, Clock } from "lucide-react";
import storyCover1 from "@/assets/story-cover-1.jpg";
import storyCover2 from "@/assets/story-cover-2.jpg";
import storyCover3 from "@/assets/story-cover-3.jpg";
import storyCover4 from "@/assets/story-cover-4.jpg";

const featuredStories = [
  {
    id: 1,
    title: "Yêu Em Từ Cái Nhìn Đầu Tiên",
    author: "Minh Châu",
    cover: storyCover1,
    genre: "Ngôn Tình",
    chapters: 45,
    status: "Đang cập nhật",
    rating: 4.8,
    views: "125K",
    description: "Câu chuyện tình yêu ngọt ngào giữa cô gái bình thường và CEO lạnh lùng..."
  },
  {
    id: 2,
    title: "Thiên Hạ Đệ Nhất Kiếm",
    author: "Võ Lâm Truyền Kỳ",
    cover: storyCover2,
    genre: "Kiếm Hiệp",
    chapters: 234,
    status: "Hoàn thành",
    rating: 4.9,
    views: "523K",
    description: "Hành trình của một kiếm khách trẻ tuổi chinh phục thiên hạ..."
  },
  {
    id: 3,
    title: "Tuổi Học Trò Của Chúng Ta",
    author: "Thu Thảo",
    cover: storyCover3,
    genre: "Truyện Teen",
    chapters: 28,
    status: "Đang cập nhật",
    rating: 4.7,
    views: "89K",
    description: "Những kỷ niệm đẹp nhất về thời học sinh với tình bạn và tình yêu..."
  },
  {
    id: 4,
    title: "Long Tộc Thiên Tài",
    author: "Huyền Thoại",
    cover: storyCover4,
    genre: "Tiên Hiệp",
    chapters: 156,
    status: "Đang cập nhật",
    rating: 4.6,
    views: "267K",
    description: "Câu chuyện về một thiên tài tu luyện với dòng máu rồng..."
  }
];

export const StoryGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Truyện Nổi Bật</h2>
            <p className="text-muted-foreground text-lg">
              Những câu chuyện được yêu thích nhất
            </p>
          </div>
          <Button variant="outline">Xem thêm</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStories.map((story) => (
            <Card 
              key={story.id} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={story.cover} 
                  alt={story.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <Badge 
                  className={`absolute top-3 right-3 ${
                    story.status === 'Hoàn thành' 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  {story.status}
                </Badge>

                {/* Genre Badge */}
                <Badge 
                  variant="secondary"
                  className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white"
                >
                  {story.genre}
                </Badge>

                {/* Stats */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>{story.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{story.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{story.chapters} chương</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Tác giả: {story.author}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {story.description}
                </p>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <div className="flex items-center justify-between w-full">
                  <Button variant="hero" size="sm" className="flex-1 mr-2">
                    Đọc ngay
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gold" size="lg">
            Khám phá thêm truyện hay
          </Button>
        </div>
      </div>
    </section>
  );
};