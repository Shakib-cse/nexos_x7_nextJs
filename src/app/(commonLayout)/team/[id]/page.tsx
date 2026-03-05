import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import TeamMemberInDetailsPage from "@/components/commonLayout/teamPage/TeamMemberInDetailsPage";

export default function TeamMemberProfile() {
  return (
    <section className="px-6 py-10">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/team">
          <Button
            variant="ghost"
            className="flex items-center gap-3 p-0 mb-6 hover:bg-transparent hover:text-background cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary">
              <Image
                src="/icons/gameLayout/details/back.png"
                alt="Play Button"
                width={50}
                height={50}
                className="p-3"
              />
            </div>
            <span className="text-sm font-medium">Back to Team</span>
          </Button>
        </Link>

        {/* Profile Header */}
        <div className="flex items-center gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="/icons/gameLayout/details/imran.png"
              alt="Imran Ali"
            />
            <AvatarFallback>IA</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-4xl font-bold tracking-tight">Imran Ali</h1>
            <p className="text-secondary text-lg mt-1">Game Artist</p>
          </div>
        </div>

        {/* About Section */}
        <Card className="bg-transparent border-none shadow-none p-0 mt-6">
          <CardContent className="p-0 space-y-4">
            <h2 className="text-3xl font-semibold text-background">About</h2>

            <p className="text-background/70 leading-relaxed">
              Full-stack developer with 10+ years of experience in game
              development. Passionate about creating immersive gaming
              experiences and leading talented teams.
            </p>
          </CardContent>
        </Card>
      </div>

      <TeamMemberInDetailsPage />
    </section>
  );
}
