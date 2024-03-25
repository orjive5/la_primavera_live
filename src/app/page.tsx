import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Video from "@/components/video";
import VideoGallery from "@/components/videoGallery";

export default function Home() {

  return (
    <main className="relative min-h-screen relative w-full bg-[#e4f3f6]">
      <div id="home" className="absolute top-0"></div>
      <Navbar />
      <Introduction />
      <About />
      <VideoGallery />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
