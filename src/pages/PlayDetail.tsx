import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Users, AlertTriangle } from "lucide-react";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CastMember = {
  name: string;
  role: string;
};

type Play = {
  title: string;
  year: string;
  description: string;
  showDates: string;
  showTimes: string;
  cast: CastMember[];
  hasContentWarning: boolean;
  contentWarningImage: string | null;
};

const PlayDetail = () => {
  const { playId } = useParams();
  
  const playData: Record<string, Play> = {
    "mean-girls": {
      title: "Mean Girls (High School Version)",
      year: "2026",
      description: "American High School's 2026 production of Mean Girls, the hit musical. Based on the beloved film, with book by Tina Fey, lyrics by Nell Benjamin, and music by Jeff Richmond, the production followed Cady Heron as she navigated North Shore High, the Plastics, and the price of fitting in.",
      showDates: "April 2, 3, 4 and April 9, 10, 11, 2026",
      showTimes: "April 2 at 4:00 PM, All other shows at 7:00 PM",
      cast: [
        { name: "Sana Arora", role: "Cady Heron" },
        { name: "Amberly Reyes Murillo", role: "Regina George" },
        { name: "Tobi Scott", role: "Janis Ian" },
        { name: "Leonardo Estrella", role: "Damian Hubbard" },
        { name: "Mikaela Torres", role: "Gretchen Wieners" },
        { name: "Alyssa Leilani Lemus", role: "Karen Smith" },
        { name: "Arunav Sharma", role: "Aaron Samuels" },
        { name: "Divya Eashwer", role: "Mrs. George" },
        { name: "Gowri Sangeeth", role: "Ms. Norbury" },
        { name: "Veda Ramachandran", role: "Mrs. Heron" },
        { name: "James Chan", role: "Mr. Duvall" },
        { name: "Abhi Soi", role: "Kevin G." },
        { name: "Grace Zhao", role: "Ensemble" },
        { name: "Sophia Leiner", role: "Ensemble" },
        { name: "Aarya Biju", role: "Ensemble" },
        { name: "Shobna Srijith", role: "Ensemble" },
        { name: "Nathan Li", role: "Ensemble" },
        { name: "Niharika Nimashakavi", role: "Ensemble" },
        { name: "Mathew Owyang", role: "Ensemble" },
        { name: "Boginya Kirilova", role: "Ensemble" },
        { name: "Norah Nikhil", role: "Ensemble" },
        { name: "Lexi Dumatol", role: "Ensemble" },
        { name: "Lara Reyes-Terry", role: "Ensemble" },
        { name: "Anais Bock", role: "Ensemble" },
        { name: "Naina Jain", role: "Ensemble" },
        { name: "Hadi Souki", role: "Ensemble" },
      ],
      hasContentWarning: false,
      contentWarningImage: null,
    },
  };

  const play = playData[playId || ""] || playData["mean-girls"];
  
  if (play && (playId?.toLowerCase().includes("sprint") || play.contentWarningImage === "sprintimage.png")) {
    play.hasContentWarning = true;
  }

  const galleryImages: string[] = [];

  return (
    <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-b from-card to-background border-b border-border py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
              {play.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {play.description}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Content Warning */}
          {play.hasContentWarning && play.contentWarningImage && (
            <div className="bg-yellow-500/10 border-2 border-yellow-500/50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Content Warning</h3>
                  <p className="text-muted-foreground">
                    This production contains explicit language. Viewer discretion is advised.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Show Information */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Performance Dates</h3>
                  <p className="text-muted-foreground">{play.showDates}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Performance Times</h3>
                  <p className="text-muted-foreground">{play.showTimes}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
              Photo <span className="text-accent">Gallery</span>
            </h2>
            {galleryImages.length > 0 ? (
              <div className="relative">
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Production photos will be added when available.
                </p>
                {/* Empty carousel placeholder */}
                <div className="mt-8 relative">
                  <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/20 border border-border flex items-center justify-center">
                          <p className="text-muted-foreground text-sm">Gallery images not yet available</p>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            )}
            {/* Note: If sprintimage.png is included, ensure content warning is displayed above */}
          </div>

          {/* Cast List */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-accent" />
              <h2 className="font-playfair text-3xl font-bold text-foreground">
                Cast <span className="text-accent">List</span>
              </h2>
            </div>
            {play.cast && play.cast.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {play.cast.map((member: CastMember, index: number) => (
                  <div key={index} className="bg-background/50 rounded-lg p-4 border border-accent/10">
                    <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                Cast list will be updated as the production develops.
              </p>
            )}
          </div>
        </div>

        <Footer />
      </div>
  );
};

export default PlayDetail;
