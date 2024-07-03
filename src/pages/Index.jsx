import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Image } from "@/components/ui/image";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Introduction Section */}
      <section className="text-center space-y-4">
        <div className="relative">
          <Image src="/placeholder.svg" alt="Dogs" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl text-white font-bold">Welcome to Dog World</h1>
          </div>
        </div>
        <p className="text-lg">
          Discover the wonderful world of dogs. Learn about different breeds, their care, and much more.
        </p>
      </section>

      <Separator />

      {/* Different Breeds Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Different Breeds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Image src="/placeholder.svg" alt={`Breed ${index + 1}`} className="w-full h-32 object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle>Breed {index + 1}</CardTitle>
                <p>Short description about Breed {index + 1}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Care Tips Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Care Tips</h2>
        <ul className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Image src="/placeholder.svg" alt={`Tip ${index + 1}`} className="w-8 h-8 object-cover" />
              <p>Care Tip {index + 1}: Description of care tip {index + 1}.</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Index;