import React from 'react';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <svg viewBox="0 0 240 240" height={240} width={240} className="pl">
                <circle
                    strokeLinecap="round"
                    strokeDashoffset={-330}
                    strokeDasharray="0 660"
                    strokeWidth={20}
                    fill="none"
                    r={105}
                    cy={120}
                    cx={120}
                    className="pl__ring pl__ring--a"
                />
                <circle
                    strokeLinecap="round"
                    strokeDashoffset={-110}
                    strokeDasharray="0 220"
                    strokeWidth={20}
                    fill="none"
                    r={35}
                    cy={120}
                    cx={120}
                    className="pl__ring pl__ring--b"
                />
                <circle
                    strokeLinecap="round"
                    strokeDasharray="0 440"
                    strokeWidth={20}
                    fill="none"
                    r={70}
                    cy={120}
                    cx={85}
                    className="pl__ring pl__ring--c"
                />
                <circle
                    strokeLinecap="round"
                    strokeDasharray="0 440"
                    strokeWidth={20}
                    fill="none"
                    r={70}
                    cy={120}
                    cx={155}
                    className="pl__ring pl__ring--d"
                />
            </svg>
            <style>{`
        .loader-wrapper .pl {
          width: 6em;
          height: 6em;
        }

        .loader-wrapper .pl__ring {
          animation: ringA 2s linear infinite;
        }

        .loader-wrapper .pl__ring--a {
          stroke: rgb(16 185 129); /* emerald-500 */
        }

        .loader-wrapper .pl__ring--b {
          animation-name: ringB;
          stroke: rgb(20 184 166); /* teal-500 */
        }

        .loader-wrapper .pl__ring--c {
          animation-name: ringC;
          stroke: rgb(52 211 153); /* emerald-400 */
        }

        .loader-wrapper .pl__ring--d {
          animation-name: ringD;
          stroke: rgb(45 212 191); /* teal-400 */
        }

        @media (prefers-color-scheme: dark) {
          .loader-wrapper .pl__ring--a {
            stroke: rgb(52 211 153); /* emerald-400 */
          }

          .loader-wrapper .pl__ring--b {
            stroke: rgb(45 212 191); /* teal-400 */
          }

          .loader-wrapper .pl__ring--c {
            stroke: rgb(16 185 129); /* emerald-500 */
          }

          .loader-wrapper .pl__ring--d {
            stroke: rgb(20 184 166); /* teal-500 */
          }
        }

        @keyframes ringA {
          from, 4% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }

          12% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -335;
          }

          32% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -595;
          }

          40%, 54% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -660;
          }

          62% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -665;
          }

          82% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -925;
          }

          90%, to {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -990;
          }
        }

        @keyframes ringB {
          from, 12% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -110;
          }

          20% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -115;
          }

          40% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -195;
          }

          48%, 62% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }

          70% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }

          90% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -305;
          }

          98%, to {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }
        }

        @keyframes ringC {
          from {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }

          8% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }

          28% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }

          36%, 58% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }

          66% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }

          86% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }

          94%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }

        @keyframes ringD {
          from, 8% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }

          16% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }

          36% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }

          44%, 50% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }

          58% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }

          78% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }

          86%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }
      `}</style>
        </div>
    );
}

export default Loader;