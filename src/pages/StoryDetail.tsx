import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Star, 
  Eye, 
  Heart, 
  Share2, 
  Download,
  BookOpen,
  User,
  Calendar,
  Tags,
  List
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import storyCover1 from "@/assets/story-cover-1.jpg";

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock story data - in real app this would come from API
  const story = {
    id: 1,
    title: "Vạn Cổ Thần Đế",
    author: "Phong Hỏa Hi Chư Hầu",
    cover: storyCover1,
    genre: "Tiên Hiệp",
    chapters: 3456,
    status: "Đang cập nhật",
    rating: 4.8,
    views: "2.1M",
    followers: "45K",
    description: "Một thiên tài tu luyện bị phản bội, trọng sinh về quá khứ, quyết tâm báo thù và trở thành vạn cổ thần đế. Với kinh nghiệm từ tiền kiếp, hắn sẽ xưng bá thiên hạ, chinh phục mọi kẻ thù.",
    tags: ["Tu luyện", "Trọng sinh", "Báo thù", "Thần thoại", "Huyền huyễn"],
    publishDate: "2023-01-15",
    lastUpdate: "Hôm nay"
  };

  const chapters = [
    { id: 1, title: "Chương 1: Trọng Sinh", readCount: "123K", publishDate: "2023-01-15" },
    { id: 2, title: "Chương 2: Ký Ức Tiền Kiếp", readCount: "115K", publishDate: "2023-01-16" },
    { id: 3, title: "Chương 3: Khởi Đầu Tu Luyện", readCount: "108K", publishDate: "2023-01-17" },
    { id: 4, title: "Chương 4: Thức Tỉnh Linh Căn", readCount: "102K", publishDate: "2023-01-18" },
    { id: 5, title: "Chương 5: Báo Thù Đầu Tiên", readCount: "98K", publishDate: "2023-01-19" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-accent/50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại
        </Button>

        {/* Story Info Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Story Cover & Actions */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden bg-gradient-card border-0 shadow-elegant">
              <div className="relative">
                <img 
                  src={story.cover} 
                  alt={story.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Status Badge */}
                <Badge 
                  className="absolute top-4 right-4 bg-primary hover:bg-primary/90"
                >
                  {story.status}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-gradient-primary hover:scale-105 transition-transform"
                    onClick={() => navigate(`/story/${id}/read/1`)}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Đọc từ đầu
                  </Button>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      Yêu thích
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Tải về
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Story Details */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
                  {story.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{story.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{story.lastUpdate}</span>
                  </div>
                  
                  <Badge variant="secondary">{story.genre}</Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-gradient-subtle rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 font-semibold">{story.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Đánh giá</p>
                  </div>
                  
                  <div className="text-center p-3 bg-gradient-subtle rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      <span className="ml-1 font-semibold">{story.views}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Lượt xem</p>
                  </div>
                  
                  <div className="text-center p-3 bg-gradient-subtle rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                      <span className="ml-1 font-semibold">{story.followers}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Theo dõi</p>
                  </div>
                  
                  <div className="text-center p-3 bg-gradient-subtle rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <List className="h-4 w-4 text-muted-foreground" />
                      <span className="ml-1 font-semibold">{story.chapters}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Chương</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Mô tả</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Tags className="h-4 w-4 mr-2" />
                  Thẻ tag
                </h3>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="hover:bg-accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Chapters List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Danh sách chương</h2>
            <Button variant="outline" size="sm">
              Sắp xếp
            </Button>
          </div>

          <Card className="bg-gradient-card border-0">
            <CardContent className="p-0">
              {chapters.map((chapter, index) => (
                <div 
                  key={chapter.id}
                  className="flex items-center justify-between p-4 hover:bg-accent/30 transition-colors cursor-pointer border-b border-border/50 last:border-b-0"
                  onClick={() => navigate(`/story/${id}/read/${chapter.id}`)}
                >
                  <div className="flex-1">
                    <h4 className="font-medium hover:text-primary transition-colors">
                      {chapter.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {chapter.publishDate} • {chapter.readCount} lượt đọc
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-4">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StoryDetail;