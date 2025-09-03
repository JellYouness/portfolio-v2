"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Slider from "./Slider";
import { Collections, Slideshow } from "@mui/icons-material";

interface DialogProps {
    // Autres propriétés du composant de dialogue
    className?: string;
}

const ProjectGallery = ({ title, images, isMobile = false }: any) => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-center p-2 bg-black rounded-full hover:scale-110 transition-all">
        <Collections className="text-2xl" />
      </DialogTrigger>
      <DialogContent className="min-w-[92vw] sm:min-w-[80vw] h-[90dvh] sm:h-auto">
        <DialogHeader>
          <DialogTitle className="pt-2 sm:pt-0">{title}</DialogTitle>
        </DialogHeader>
        <Slider images={images} isMobile={isMobile} />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectGallery;
