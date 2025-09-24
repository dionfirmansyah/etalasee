// components/Loading.tsx
'use client';
export default function Loading() {
    return (
        <div className="loading-overlay">
            <div className="spinner"></div>
            <p className="loading-text">Mohon Tunggu Sebentar...</p>

            <style jsx>{`
                .loading-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(2px);
                    z-index: 9999; /* di atas header/footer */
                }
                .spinner {
                    width: 48px;
                    height: 48px;
                    border: 4px solid #e5e5e5;
                    border-top: 4px solid black;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                    margin-bottom: 14px;
                }
                .loading-text {
                    font-size: 15px;
                    font-weight: 500;
                    letter-spacing: 0.05em;
                    color: #444;
                }
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
}
