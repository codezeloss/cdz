export default function JsonLd() {
    const schema = [{
        "@context": "https://schema.org",
        "@type": "Person",
        name: "codezeloss",
        jobTitle: "Full-Stack Developer",
        description: "Full-Stack Developer specializing in React.js and Next.js development",
        url: "https://codezeloss.vercel.app",
        sameAs: [
            "https://github.com/codezeloss",
            "https://x.com/codezeloss",
            // Add other social profiles
        ],
        knowsAbout: [
            "Frontend Development",
            "Full-Stack Development",
            "React.js",
            "Next.js",
            "TypeScript",
            "Redux",
            "Tailwind CSS",
            "UI Development",
            "Web Development"
        ],
        image: "https://codezeloss.vercel.app/images/main-picture.jpg",
        alumniOf: "IU INTERNATIONAL UNIVERSITY OF APPLIED SCIENCES",
    },
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "codezeloss - Web Development Services",
            description: "Professional web development services specializing in modern web applications",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Agadir",
                addressRegion: "Souss Massa",
                addressCountry: "Morocco"
            },
            areaServed: [
                {
                    "@type": "GeoCircle",
                    geoMidpoint: {
                        "@type": "GeoCoordinates",
                        latitude: 30.4278,
                        longitude: -9.5981
                    },
                    geoRadius: "50000"
                }
            ],
            service: [
                {
                    "@type": "Service",
                    name: "Full-Stack Development",
                    description: "Modern web application development using React.js and Next.js"
                },
                {
                    "@type": "Service",
                    name: "Web Development",
                    description: "Full-stack web development services"
                }
            ]
        }
    ];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
        />
    );
}