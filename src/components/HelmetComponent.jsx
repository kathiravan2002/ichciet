import { Helmet } from "react-helmet";

const HelmetComponent = ({ title,canonical }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICHCIET, International Conference on Human-Computer Interaction and Emerging Technologies  ,Human-Computer Interaction, HCI, Emerging Technologies, User Experience, UX Design, Human-Centered Design, Interaction Design, Artificial Intelligence, Virtual Reality, Augmented Reality, Usability, Smart Interfaces, Cognitive Computing, Digital Interfaces, Human-Machine Interaction, Adaptive Systems, International Conference 2025, HCI Conference, Technology and Design, Future Interfaces" />
            <meta name="description" content="Join the International Conference on Human-Computer Interaction and Emerging Technologies to explore the latest innovations in UX design, intelligent interfaces, and human-centered computing. Connect with global experts shaping the future of interactive technology in 2025." />
            <meta name="author" content="ICHCIET Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Human-Computer Interaction and Emerging Technologies" />
            <meta property="og:description" content="Join the International Conference on Human-Computer Interaction and Emerging Technologies to explore the latest innovations in UX design, intelligent interfaces, and human-centered computing. Connect with global experts shaping the future of interactive technology in 2025." />
            <meta property="og:url" content="https://ichciet.com/" />
            <meta property="og:image" content="https://ichciet.com/images/ICHCIET.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://ichciet.com/images/ICHCIET Fav.png" />

        </Helmet>
    );
};

export default HelmetComponent;         