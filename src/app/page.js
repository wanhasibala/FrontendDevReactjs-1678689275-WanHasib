import Image from "next/image";
import Card from "./(component)/Card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col  p-8">
      <div className="text-2xl">All Restaurant</div>
      <div className="mt-12 grid gap-2 xl:grid-cols-5 grid-cols-2 md:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center mt-12"> <Button variant="outline" className="w-[400px]">Load More</Button></div>
   </main>
  );
}
