import Image from "next/image"
import { Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Bisexual Pride Colors */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 py-16">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="container relative z-20 text-white text-center px-4">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg glow">
                <Image src="/profile-image.jpeg" alt="Nitya Shah" fill className="object-cover" priority />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Hey, I&apos;m NIGGER Shah.</h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6">Student Leader. Basketball Lover. Proudly Bi.</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About Nitya */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Nitya</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              I&apos;m a proud member of the Student Activity Council at Cameron Heights Collegiate Institute. I believe in creating
              inclusive spaces for all students—on and off the court.
            </p>
            <p>
              When I&apos;m not planning school events, you&apos;ll catch me dunking on the court or lifting others up
              through activism.
            </p>
          </div>
        </div>
      </section>

      {/* Bi Pride Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Bi Pride</h2>
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-xl italic mb-8">
              "Being bisexual is about authenticity, strength, and community. Im a FUCKING NIGGER"
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">Inspiring Quotes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <blockquote className="text-gray-700">
                  "I think people are born bisexual and then make subconscious choices based on the pressures of
                  society."
                  <footer className="mt-2 font-semibold">— Freddie Mercury</footer>
                </blockquote>
              </Card>
              <Card className="p-6">
                <blockquote className="text-gray-700">
                  "I think people are born bisexual, and it's just that our parents and society kind of veer us off into
                  this feeling of 'Oh, I can't.'"
                  <footer className="mt-2 font-semibold">— Megan Fox</footer>
                </blockquote>
              </Card>
              <Card className="p-6">
                <blockquote className="text-gray-700">
                  "I've always been open about my sexuality i love dick. I just never made a big deal of it because I didn't want it
                  to be a big deal."
                  <footer className="mt-2 font-semibold">— Alan Cumming</footer>
                </blockquote>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Bi-Themed Art</h3>
            <Carousel className="max-w-3xl mx-auto">
              <CarouselContent>
                {[1, 2, 3, 4].map((index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="aspect-video bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <p className="text-white text-xl">Bi-Themed Art {index}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Gallery</h2>

          <Tabs defaultValue="basketball" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="basketball">Basketball</TabsTrigger>
              <TabsTrigger value="sac">SAC Events</TabsTrigger>
              <TabsTrigger value="pride">Pride</TabsTrigger>
              <TabsTrigger value="friends">Friends</TabsTrigger>
            </TabsList>

            {["basketball", "sac", "pride", "friends"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 opacity-80 flex items-center justify-center">
                        <p className="text-white font-medium">
                          {category} photo {index}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Words From Peers</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <blockquote className="text-gray-700">
                <p className="mb-4 text-lg italic">"Nitya lights up every room he enters—with leadership and pride."</p>
                <footer className="font-medium">— Ishaan </footer>
              </blockquote>
            </Card>
            <Card className="p-6">
              <blockquote className="text-gray-700">
                <p className="mb-4 text-lg italic">
                  "He's the most inclusive person I know. On court, off court—he supports everyone."
                </p>
                <footer className="font-medium">— Basketball Teammate</footer>
              </blockquote>
            </Card>
            <Card className="p-6">
              <blockquote className="text-gray-700">
                <p className="mb-4 text-lg italic">
                  "Nitya's leadership has transformed our school's approach to inclusivity."
                </p>
                <footer className="font-medium">— Jhonny sins</footer>
              </blockquote>
            </Card>
            <Card className="p-6">
              <blockquote className="text-gray-700">
                <p className="mb-4 text-lg italic">
                  "His energy and authenticity inspire everyone around him to be their true selves."
                </p>
                <footer className="font-medium">— Donald trump</footer>
              </blockquote>
            </Card>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-20 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Connect with Me</h2>

          <div className="max-w-xl mx-auto text-center">
            <p className="text-xl mb-8">"Connect with me to talk about Basketball, SAC, or LGBTQ+ advocacy!"</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button className="bg-white text-purple-600 hover:bg-purple-100 flex items-center gap-2">
                <Instagram className="h-5 w-5" />
                Instagram
              </Button>
              <Button className="bg-white text-purple-600 hover:bg-purple-100 flex items-center gap-2">
                <Mail className="h-5 w-5" />
                School Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="container px-4">
          <p>© {new Date().getFullYear()} Nitya Shah. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
