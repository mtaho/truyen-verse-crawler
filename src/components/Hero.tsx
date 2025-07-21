import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-book.jpg";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Thế giới
                <span className="block bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
                  Truyện Hay
                </span>
                Nhất
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
                Khám phá hàng ngàn truyện hay từ ngôn tình, tiên hiệp đến truyện teen. 
                Đọc miễn phí, cập nhật mỗi ngày.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gold" size="lg" className="text-lg px-8">
                <Play className="h-5 w-5 mr-2" />
                Bắt đầu đọc
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Star className="h-5 w-5 mr-2" />
                Truyện hot
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-blue-200 text-sm">Truyện hay</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Cập nhật hàng ngày</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-blue-200 text-sm">Miễn phí</div>
              </div>
            </div>
          </div>

          {/* Featured Book */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <img 
                src={heroImage} 
                alt="Featured Book"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Hot
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-semibold">4.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};