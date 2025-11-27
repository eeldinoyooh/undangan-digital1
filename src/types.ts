export interface GuestParams {
  name: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Declaration for AOS library since it's loaded via CDN
declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void;
      refresh: () => void;
    };
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}
