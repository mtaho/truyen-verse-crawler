import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Settings, 
  BookOpen,
  Home,
  List,
  Heart,
  MessageSquare
} from "lucide-react";

const Reader = () => {
  const { storyId, chapterId } = useParams();
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState("16");
  const [textAlign, setTextAlign] = useState("left");
  const [theme, setTheme] = useState("light");

  // Mock chapter data
  const chapter = {
    id: parseInt(chapterId || "1"),
    title: "Chương 1: Trọng Sinh",
    content: `
      Tĩnh lặng tuyệt đối.

      Diệp Thần từ từ mở mắt, ánh mắt lạnh lùng quét qua xung quanh.

      Đây là một căn phòng đơn giản, trang trí không cầu kỳ nhưng rất sạch sẽ. Ánh sáng mặt trời chiếu qua cửa sổ, tạo nên những đốm sáng lung linh trên sàn nhà.

      "Ta... đã trở về?"

      Diệp Thần ngồi dậy, nhìn xuống đôi tay của mình. Đây chính là thân thể của hắn hồi thập lục tuổi, chưa bị phá vỡ tu vi, chưa trải qua những đau khổ tột cùng.

      "Trọng sinh! Ta thực sự đã trọng sinh!"

      Hắn siết chặt nắm tay, mắt tỏa ra ánh sáng lạnh lùng. Kiếp trước, hắn là thiên tài tu luyện nổi tiếng khắp lục địa, nhưng lại bị người bạn thân nhất phản bội, tu vi bị phế, cuối cùng chết trong tức tưởi.

      Nhưng giờ đây, hắn đã trở về!

      Với ký ức từ tiền kiếp, với những kinh nghiệm tu luyện vô giá, lần này hắn sẽ không để bất kỳ ai có cơ hội phản bội mình nữa!

      "Lâm Thiên Vũ, Xuất Thần Tông, các ngươi hãy chờ đấy..."

      Diệp Thần đứng dậy, bước ra ngoài cửa sổ nhìn xa xăm. Trong mắt hắn, ánh lửa báo thù đang cháy bỏng.

      Nhưng trước tiên, hắn cần khôi phục tu vi. Với trình độ hiện tại, muốn báo thù còn quá sớm.

      May mắn là hắn còn nhớ rõ một địa điểm bí mật từ tiền kiếp - nơi đó có một linh dược có thể giúp hắn tăng tốc độ tu luyện gấp bội.

      "Hôm nay ta sẽ bắt đầu..."

      Hắn ngồi xuống tư thế tu luyện, bắt đầu vận hành tâm pháp. Với kinh nghiệm từ tiền kiếp, chỉ trong vài phút, hắn đã cảm nhận được dòng khí linh lực trong cơ thể.

      Điều này khiến hắn vô cùng phấn khích. Kiếp trước để đạt được trình độ này, hắn đã phải mất cả tháng!

      "Lần này, ta sẽ trở thành vạn cổ thần đế!"
    `,
    publishDate: "2023-01-15"
  };

  const nextChapter = () => {
    navigate(`/story/${storyId}/read/${chapter.id + 1}`);
  };

  const prevChapter = () => {
    if (chapter.id > 1) {
      navigate(`/story/${storyId}/read/${chapter.id - 1}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Reader Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate(`/story/${storyId}`)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Quay lại
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
              >
                <Home className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Select value={fontSize} onValueChange={setFontSize}>
                <SelectTrigger className="w-20 h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="14">14px</SelectItem>
                  <SelectItem value="16">16px</SelectItem>
                  <SelectItem value="18">18px</SelectItem>
                  <SelectItem value="20">20px</SelectItem>
                  <SelectItem value="22">22px</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Reader Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="bg-gradient-card border-0 shadow-elegant">
          <CardHeader className="text-center pb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gradient-primary">
              {chapter.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              Cập nhật: {chapter.publishDate}
            </p>
          </CardHeader>

          <Separator className="mx-6" />

          <CardContent className="p-8">
            <div 
              className={`prose prose-lg max-w-none text-${textAlign}`}
              style={{ fontSize: `${fontSize}px`, lineHeight: '1.8' }}
            >
              {chapter.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4 text-foreground">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chapter Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={prevChapter}
            disabled={chapter.id <= 1}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Chương trước</span>
          </Button>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <List className="h-4 w-4 mr-2" />
              Mục lục
            </Button>
            
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Yêu thích
            </Button>
            
            <Button variant="ghost" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              Bình luận
            </Button>
          </div>

          <Button 
            variant="outline"
            onClick={nextChapter}
            className="flex items-center space-x-2"
          >
            <span>Chương sau</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border/50 p-4 md:hidden">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={prevChapter}
            disabled={chapter.id <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Chương {chapter.id}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={nextChapter}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reader;