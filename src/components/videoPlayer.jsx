import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { useRef, useState } from 'react';

const cld = new Cloudinary({
    cloud: {
        cloudName: 'da4l4bhhn',
        secure: true // Enforce HTTPS
    }
});

export default function VideoPlayer() {
    const videoRef = useRef();
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Configure video with transformations
    const video = cld.video('brcseoyh5lpzobxqiomp')
        .quality('auto:good') // Better quality than default 'auto'
        .format('auto:webp') // Prioritize modern formats
        .resize('scale', { width: 800, crop: 'limit' });

    const toggleFullscreen = () => {
        if (!videoRef.current) return;

        if (!document.fullscreenElement) {
            videoRef.current.requestFullscreen()
                .then(() => setIsFullscreen(true))
                .catch(err => console.error('Fullscreen error:', err));
        } else {
            document.exitFullscreen()
                .then(() => setIsFullscreen(false));
        }
    };

    // Handle keyboard controls for accessibility
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleFullscreen();
        }
    };

    return (
        <div
            style={{
                maxWidth: '800px',
                margin: '0 auto',
                position: 'relative'
            }}
            onDoubleClick={toggleFullscreen}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="Video player container"
        >
            <AdvancedVideo
                cldVid={video}
                ref={videoRef}
                controls
                controlsList="nodownload" // Disable download option
                style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    backgroundColor: '#000' // Better loading background
                }}
                playsInline
                muted={false}
                aria-label="Product demonstration video"
                tabIndex={-1} // Prevent double focus
            />

            {/* Fullscreen toggle indicator */}
            {!isFullscreen && (
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    pointerEvents: 'none'
                }}>
                    Double-click for fullscreen
                </div>
            )}
        </div>
    );
}