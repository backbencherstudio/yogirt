import { useState, useRef, useEffect } from "react";

const projects = [
    {
        id: "[ 001/003 ]",
        title: "TRANSFORMING URBAN FORESTRY WITH AI DEVELOPMENTS",
        client: "Melbourne Urban Planning Authority",
        description:
            "We developed 'Treesights,' a machine learning platform for the client. Our platform enhanced decision-making efficiency by 40%, along with 85% accuracy in identifying reforestation areas and predicting tree lifespans.",
        image: "images/Rectangle 78.png",
        modal: {
            title: "[ Transforming Urban Forestry with AI Developments ]",
            client: "Melbourne Urban Planning Authority",
            challange: "The client had trouble correlating urban tree data with environmental factors such as weather and population growth, hampering sustainable urban planning decisions.",
            solution: `Progressive AI developed "TreeInsights," a machine learning-driven platform that analysed diverse datasets, including weather patterns, tree lifespans, and population density. Using advanced visualisation tools and real-time data processing, TreeInsights gave actionable insights on oxygen production, tree life expectancy, and urban forest planning.`,
            result: `The Result: With our Artificial Intelligence solutions, the client optimized urban forestry strategies, predicting tree lifespans with 85% accuracy and identifying areas for reforestation. Our system improved decision-making efficiency by 40% and supported sustainable urban development goals.`,
            liText: ["[ KUBERNETES ]", " [ ELASTICSEARCH ] ", '[ FISSION ]', '[ STREMLET ]', '[ MELBOURNE RESEARCH CLOUD ]']
        }
    },
    {
        id: "[ 002/003 ]",
        title: "Using AI-Powered Object Detection to Enhance Airport Security",
        client: "Airport Security Solutions",
        description:
            "We developed a deep learning solution that improved airport security by improving accuracy of detecting prohibited items in X-ray images. Our system reduced false positives, boosted accuracy by 35%, and improved screening efficiency by 40%.",
        image: "images/Rectangle 79.png",
        modal: {
            title: "[ Using AI-Powered Object Detection to Enhance Airport Security ]",
            client: "Airport Security Solutions",
            challange: "Airport Security Solutions had low detection accuracy for identifying prohibited items (e.g., guns, knives) in X-ray images because of object occlusion, variance in size, and complex visual representations, leading to discrepancies and potential security risks.",
            solution: `: Our Artificial intelligence solution increased detection accuracy by 35%, minimised false positives, and enhanced object localisation by leveraging multi-scale feature extraction. The client's screening process saw a 40% hike in efficiency, setting a new benchmark for security scanning solutions in high-traffic environments.`,
            result: `The Result: With our Artificial Intelligence solutions, the client optimized urban forestry strategies, predicting tree lifespans with 85% accuracy and identifying areas for reforestation. Our system improved decision-making efficiency by 40% and supported sustainable urban development goals.`,
            liText: ["[ Python ]", "[ PyTorch ]", '[ RFBNet ]', '[ Faster R-CNN  ]', '[ GPU Accelerated Cloud Training ]'],

        }
    },
    {
        id: "[ 003/003 ]",
        title: "AI Solutions with Tableau Elasticsearch & Apache Airflow",
        client: "A Leading University Planning for Long-Term Growth",
        description:
            "Our work involved developing a real-time dashboard that automated data processes and improved resource allocation. This solution exceeded their expectations by reducing planning time by 40% and enhanced forecast accuracy by 30%.",
        image: "images/Rectangle 80.png",
        modal: {
            title: "[ Using AI-Powered Object Detection to Enhance Airport Security ]",
            client: "A Leading University Planning for Long-Term Growth",
            challange: "Our client faced challenges managing future commitments, including research funding allocation, student capacity planning, and recruitment. The process lacked transparency and adaptability, leading to delays and missed funding opportunities.",
            solution: `We developed a dashboard solution with real-time data integration. Using Apache Airflow, the system automated data pipelines, including funding applications, enrolment databases, and grant schedules. Data was indexed in Elasticsearch for efficient querying, and Tableau provided an intuitive interface to explore future trends, and risks.`,
            result: ` The client has a real-time view of its commitments, enabling optimised resource allocation. The dashboard reduced planning time by 40% and improved the forecast accuracy by 30%. This empowered stakeholders to make proactive adjustments, ensuring long-term sustainability and growth.`,

        }
    },
];


const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const containerWidth = scrollContainerRef.current.scrollWidth;
        const viewportWidth = scrollContainerRef.current.clientWidth;

        // Calculate the current index
        const totalScrollableWidth = containerWidth - viewportWidth;
        const percentageScrolled = scrollLeft / totalScrollableWidth;

        const newIndex = Math.round(percentageScrolled * (projects.length - 1));
        setCurrentIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [projects.length]);

  return (
    <div className="relative w-full h-full">
      <div className="grid lg:grid-cols-5 gap-4 text-white mt-8 font-plexs">
        {/* Text Content */}
        <div className="lg:col-span-2 col-span-5">
          <h1 className="text-[22px] xl:text-[40px] font-[700] leading-none">
            {projects[currentIndex]?.id}
          </h1>
          <h3 className="text-[24px] xl:text-[32px] mt-3 xl:mt-6 font-[700] text-[#12C6D8] uppercase">
            {projects[currentIndex]?.title}
          </h3>
          <p className="xl:mt-4 my-2 text-[#D2D2D5] lg:text-lg text-[14px] font-[400]">
            <span className="text-white">Client:</span> {projects[currentIndex]?.client}
          </p>
          <p className="xl:mt-4 text-[#D2D2D5] xl:text-[18px] text-[14px] lg:text-[16px] font-[400]">
            {projects[currentIndex]?.description}
          </p>
        </div>

        {/* Image Slider */}
        <div className="lg:col-span-3 col-span-5">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto custom-scroll h-full"
          >
            {projects.map((project, index) => (
              <img
                key={index}
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover pb-6 ${
                  index === currentIndex ? "opacity-100" : "opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
