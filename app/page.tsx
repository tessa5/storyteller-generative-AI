import Image from "next/image";
import logo from '@/images/logo.png';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StoryWriter from "@/components/StoryWriter";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-1">
        <div className="flex flex-col space-y-5 justify-center items-center pb-10 order-1 lg:-order-1">
          <Image src={logo} height={250} alt="logo" />
          <Button asChild className="border-2 bg-gradient-to-r from-[#5295d2] from-10% via-[#52b5d2] via-30% to-[#54d6c6] to-90% p-10 text-xl">
           <Link href="stories">Story time</Link>
          </Button>
        </div>
        <StoryWriter />
      </section>
      <h1 className="full">AI Agent GPTScript</h1>
    </main>
  );
}
