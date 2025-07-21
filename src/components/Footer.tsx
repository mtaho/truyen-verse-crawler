import { BookOpen, Facebook, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8" />
              <span className="text-xl font-bold">123Truyen</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Trang web đọc truyện online hàng đầu Việt Nam với hàng ngàn 
              câu chuyện hay từ các tác giả nổi tiếng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Truy cập nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Thể loại</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Truyện hot</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Mới cập nhật</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Hoàn thành</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Thể loại hot</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Ngôn tình</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Kiếm hiệp</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Tiên hiệp</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Truyện teen</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Đam mỹ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Liên hệ</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-blue-100">contact@123truyen.vn</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-blue-100">0123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="h-4 w-4" />
                <span className="text-blue-100">fb.com/123truyen</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-blue-100 text-sm">
            © 2024 123Truyen.vn - Trang web đọc truyện online hàng đầu Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
};