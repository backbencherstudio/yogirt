import React, { useState, useEffect, useRef } from 'react';

const TimelineSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const stepperRef = useRef(null);

  const steps = [
    {
      title: "Seed Planted",
      description: "The initial concept takes root",
      details: "Every great journey begins with a single idea",
      side: "left"
    },
    {
      title: "First Sprout",
      description: "Early growth and development",
      details: "Nurturing the potential of our vision",
      side: "right"
    },
    {
      title: "Branching Out",
      description: "Expanding horizons and possibilities",
      details: "Exploring new directions and opportunities",
      side: "left"
    },
    {
      title: "Reaching Higher",
      description: "Pushing boundaries and breaking limits",
      details: "Scaling new heights of innovation",
      side: "right"
    },
    {
      title: "Full Bloom",
      description: "Achieving full potential",
      details: "Realizing the complete vision",
      side: "left"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (stepperRef.current) {
        const { top, height } = stepperRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (-top) / (height - window.innerHeight)));
        setScrollProgress(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateStepProgress = (index) => {
    const stepTriggerPoint = index / (steps.length - 1);
    return Math.max(0, Math.min(1, (scrollProgress - stepTriggerPoint) / (1 / steps.length)));
  };

  return (
    <div 
      ref={stepperRef} 
      className="relative max-w-4xl mx-auto px-4 py-16"
    >
      {/* Vertical Progress Line */}
      <div 
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"
        style={{
          background: `linear-gradient(to bottom, 
            #4ade80 ${scrollProgress * 100}%, 
            #e5e7eb ${scrollProgress * 100}%
          )`
        }}
      />

      {steps.map((step, index) => {
        const stepProgress = calculateStepProgress(index);
        const isLeft = step.side === 'left';

        return (
          <div 
            key={index} 
            className={`flex items-start mb-16 relative ${isLeft ? 'pr-16' : 'pl-16'}`}
          >
            {/* Step Marker */}
            <div 
              className={`
                absolute top-0 w-6 h-6 rounded-full z-10 border-4 
                ${stepProgress > 0 
                  ? 'bg-green-500 border-green-300' 
                  : 'bg-gray-100 border-gray-300'
                }
                ${isLeft ? 'left-1/2 -translate-x-1/2 -left-3' : 'right-1/2 translate-x-1/2 -right-3'}
              `}
            />

            {/* Step Content */}
            <div 
              className={`
                w-1/2 p-6 rounded-lg shadow-md transition-all duration-300
                ${isLeft ? 'mr-auto text-left' : 'ml-auto text-right'}
              `}
              style={{
                transform: `translateX(${
                  stepProgress > 0 
                    ? (isLeft ? -stepProgress * 40 : stepProgress * 40) 
                    : (isLeft ? -40 : 40)
                }px)`,
                opacity: stepProgress
              }}
            >
              <div 
                className={`border-b-2 pb-2 mb-4 ${
                  stepProgress > 0 ? 'border-green-500' : 'border-gray-300'
                }`}
              >
                <h3 
                  className={`text-xl font-bold ${
                    stepProgress > 0 ? 'text-green-700' : 'text-gray-600'
                  }`}
                >
                  {step.title}
                </h3>
              </div>
              <p 
                className={`mb-2 ${
                  stepProgress > 0 ? 'text-green-800' : 'text-gray-500'
                }`}
              >
                {step.description}
              </p>
              <p 
                className={`text-sm ${
                  stepProgress > 0 ? 'text-green-600' : 'text-gray-400'
                }`}
              >
                {step.details}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineSection;
