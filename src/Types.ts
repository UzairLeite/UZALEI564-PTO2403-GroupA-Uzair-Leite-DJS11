import { ReactNode } from "react";

export interface Episode {
    description: ReactNode;
    audioUrl: string;
    id: string;
    title: string;
    seasonId: string;
  }
  
  export interface Show {
    id: string;
    title: string;
    description: string;
    seasons: number;
    image: string;
    genres: number[];
    updated: string;
    episodes?: Episode[];
  }