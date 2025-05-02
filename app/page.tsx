import Image from "next/image"
import {
  Instagram,
  Mail,
  Briefcase,
  Award,
  Calendar,
  Users,
  ChevronDown,
  Laptop,
  Globe,
  TrendingUp,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Color Shifting Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center color-shift-bg py-16">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="container relative z-20 text-white text-center px-4">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg glow">
                <Image src="/profile-image.jpeg" alt="Nitya Shah" fill className="object-cover" priority />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Nitya Shah</h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6">
                Student Leader. Basketball Player. Academic Achiever.
              </p>
              <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* About Section */}
      <section className="py-20 bg-grey-100">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-grey-800 mx-auto mb-12 rounded-full"></div>
          <div className="max-w-3xl mx-auto text-lg text-grey-700 space-y-6 bg-grey-50 p-8 rounded-2xl card-shadow">
            <p>
              I'm a dedicated student leader at Cameron Heights Collegiate Institute with a passion for creating
              positive change in my community. As an active member of the Student Activity Council, South Asian Student
              Alliance, Tech Crew and a former DECA member, I work to foster an inclusive and engaging environment for
              all students.
            </p>
            <p>
              When I'm not focused on academics or leadership responsibilities, you'll find me on the basketball court,
              where I've developed strong teamwork and discipline skills that translate to all areas of my life.
            </p>
            <div className="pt-4 flex justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-grey-900 hover:from-blue-700 hover:to-black text-white flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider section-divider-blue"></div>

      {/* Activities & Involvement Section */}
      <section className="py-20 bg-grey-900 text-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-400">Activities & Involvement</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-grey-500 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 border-t-4 border-blue-500 card-shadow bg-grey-800 text-white">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-900 flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Student Council</h3>
                <p className="text-grey-300">
                  Active member of the Student Activity Council, organizing events and initiatives for the student body.
                </p>
              </div>
            </Card>

            <Card className="p-6 border-t-4 border-grey-500 card-shadow bg-grey-800 text-white">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-grey-700 flex items-center justify-center mb-4">
                  <Laptop className="h-10 w-10 text-grey-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tech Crew</h3>
                <p className="text-grey-300">
                  Member of the school's Tech Crew, providing technical support for school events and productions.
                </p>
              </div>
            </Card>

            <Card className="p-6 border-t-4 border-blue-500 card-shadow bg-grey-800 text-white">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-900 flex items-center justify-center mb-4">
                  <Globe className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">SASA</h3>
                <p className="text-grey-300">
                  Active participant in the South Asian Student Association, celebrating cultural diversity and
                  heritage.
                </p>
              </div>
            </Card>

            <Card className="p-6 border-t-4 border-grey-500 card-shadow bg-grey-800 text-white">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-grey-700 flex items-center justify-center mb-4">
                  <TrendingUp className="h-10 w-10 text-grey-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">DECA</h3>
                <p className="text-grey-300">
                  DECA member (2023-2024), developing business, leadership, and entrepreneurship skills through
                  competitions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-grey-800 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-none card-shadow bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-grey-800 flex items-center justify-center mb-4">
                  <Briefcase className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Leadership</h3>
                <p className="text-grey-600">
                  Experienced in organizing events, leading teams, and implementing initiatives that benefit the student
                  body.
                </p>
              </div>
            </Card>

            <Card className="p-6 border-none card-shadow bg-gradient-to-br from-grey-100 to-grey-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-grey-700 to-grey-900 flex items-center justify-center mb-4">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Athletics</h3>
                <p className="text-grey-600">
                  Dedicated basketball player with strong teamwork skills, discipline, and competitive spirit.
                </p>
              </div>
            </Card>

            <Card className="p-6 border-none card-shadow bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-grey-800 flex items-center justify-center mb-4">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Time Management</h3>
                <p className="text-grey-600">
                  Skilled at balancing academics, extracurricular activities, and personal commitments effectively.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="section-divider section-divider-blue"></div>

      {/* Gallery */}
      <section className="py-20 bg-grey-100">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Portfolio Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-grey-800 mx-auto mb-12 rounded-full"></div>

          <Tabs defaultValue="basketball" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-white/50 backdrop-blur-sm rounded-xl p-1">
              <TabsTrigger
                value="basketball"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-grey-900 data-[state=active]:text-white rounded-lg"
              >
                Basketball
              </TabsTrigger>
              <TabsTrigger
                value="leadership"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-grey-900 data-[state=active]:text-white rounded-lg"
              >
                Leadership
              </TabsTrigger>
              <TabsTrigger
                value="tech"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-grey-900 data-[state=active]:text-white rounded-lg"
              >
                Tech Crew
              </TabsTrigger>
              <TabsTrigger
                value="deca"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-grey-900 data-[state=active]:text-white rounded-lg"
              >
                DECA
              </TabsTrigger>
            </TabsList>

            {["basketball", "leadership", "tech", "deca"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div
                      key={index}
                      className="aspect-square relative rounded-xl overflow-hidden shadow-md card-shadow"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-grey-900 opacity-80 flex items-center justify-center">
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

      <div className="section-divider"></div>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-grey-800 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 shadow-md card-shadow border-none bg-gradient-to-br from-blue-50 to-blue-100">
              <blockquote className="text-grey-700">
                <div className="w-12 h-12 mb-4 text-blue-500 opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="mb-4 text-lg italic">
                  "Nitya demonstrates exceptional leadership qualities and brings positive energy to every project."
                </p>
                <footer className="font-medium text-blue-700">— Basketball Coach</footer>
              </blockquote>
            </Card>
            <Card className="p-6 shadow-md card-shadow border-none bg-gradient-to-br from-grey-100 to-grey-200">
              <blockquote className="text-grey-700">
                <div className="w-12 h-12 mb-4 text-grey-500 opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="mb-4 text-lg italic">
                  "A dedicated student who consistently shows initiative and helps others succeed."
                </p>
                <footer className="font-medium text-grey-700">— Math Teacher</footer>
              </blockquote>
            </Card>
            <Card className="p-6 shadow-md card-shadow border-none bg-gradient-to-br from-grey-100 to-grey-200">
              <blockquote className="text-grey-700">
                <div className="w-12 h-12 mb-4 text-grey-500 opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="mb-4 text-lg italic">
                  "Nitya's technical skills and reliability make him an invaluable member of our Tech Crew."
                </p>
                <footer className="font-medium text-grey-700">— Tech Crew Supervisor</footer>
              </blockquote>
            </Card>
            <Card className="p-6 shadow-md card-shadow border-none bg-gradient-to-br from-blue-50 to-blue-100">
              <blockquote className="text-grey-700">
                <div className="w-12 h-12 mb-4 text-blue-500 opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="mb-4 text-lg italic">
                  "An excellent team player who inspires others through hard work and dedication in DECA competitions."
                </p>
                <footer className="font-medium text-blue-700">— DECA Advisor</footer>
              </blockquote>
            </Card>
          </div>
        </div>
      </section>

      <div className="section-divider section-divider-blue"></div>

      {/* Connect */}
      <section className="py-20 color-shift-bg text-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Connect with Me</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-12 rounded-full"></div>

          <div className="max-w-xl mx-auto text-center glass-effect p-8 rounded-xl">
            <p className="text-xl mb-8">"Interested in leadership opportunities or collaboration? Let's connect!"</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white flex items-center gap-2">
                <Instagram className="h-5 w-5" />
                Instagram
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-grey-900 to-blue-900 text-white text-center">
        <div className="container px-4">
          <p>© {new Date().getFullYear()} Nitya Shah. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
