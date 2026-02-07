import { useEffect, useRef } from "react";

interface MonetagBoxProps {
  zoneId?: string;
}

const MonetagBox = ({ zoneId = "10581081" }: MonetagBoxProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentWindow?.document;
    if (!doc) return;

    // 1. Iframe ka environment setup
    doc.open();

    // 2. HTML Content + Monetag Script Injection
    // Hum script ko iframe ke body me inject kar rahe hain taaki wo wahi trapped rahe
    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { 
              margin: 0; 
              padding: 0; 
              background-color: #000; 
              height: 100vh; 
              width: 100vw; 
              display: flex; 
              justify-content: center; 
              align-items: center; 
              overflow: hidden;
            }
            /* Agar koi image/video ad aaye to wo responsive ho */
            img, video, iframe { max-width: 100%; max-height: 100%; }
          </style>
        </head>
        <body>
          <script>
            (function(s){
              s.dataset.zone='${zoneId}';
              s.src='https://gizokraijaw.net/vignette.min.js';
            })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));
          </script>
        </body>
      </html>
    `;

    doc.write(content);
    doc.close();
  }, [zoneId]);

  return (
    <div className="w-full h-full bg-black">
      <iframe
        ref={iframeRef}
        title="Ad Content"
        className="w-full h-full border-none"
        scrolling="no"
        // ✅ Permissions: Allow scripts but keep it isolated
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </div>
  );
};

export default MonetagBox;
