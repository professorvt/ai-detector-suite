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

    doc.open();

  
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
            img, video, iframe { max-width: 100%; max-height: 100%; object-fit: contain; }
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
    <div className="w-full h-full bg-black relative">
      <iframe
        ref={iframeRef}
        title="Ad Content"
        className="w-full h-full border-none"
        scrolling="no"
        // ✅ Permissions: 'allow-scripts' zaroori hai ad chalane ke liye.
        // 'allow-top-navigation' humne JAANBUJH KAR nahi diya, taaki ad pure page ko redirect na kar sake.
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />

      {/* Click Overlay: Taaki user jab click kare to click register ho */}
      <div className="absolute inset-0 pointer-events-none"></div>
    </div>
  );
};

export default MonetagBox;
