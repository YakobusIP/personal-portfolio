import ProjectCard from "@/components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "BNMO Library Website",
      description: "A simple library website",
      details:
        "A website consisting of a frontend and backend side. I created both the frontend and backend as well as designed the database schema.",
      techStack: [
        { name: "Frontend", tech: "VueTS" },
        { name: "Backend", tech: "Ruby on Rails" },
        { name: "Database", tech: "PostgreSQL" }
      ],
      repositoryLinks: [
        {
          label: "Frontend Repository",
          href: "https://github.com/BNMO-Projects/BNMO-Library-Customer"
        },
        {
          label: "Backend Repository",
          href: "https://github.com/BNMO-Projects/BNMO-Library-BE"
        }
      ],
      tooltip: false
    },
    {
      title: "Personal Chatbot",
      description: "A simple chat interface to utilize OpenAI GPT APIs",
      details:
        "A chat interface utilizing server-sent events (SSE) from OpenAI GPT APIs. Uses LangChain as the LLM framework.",
      techStack: [
        { name: "Frontend", tech: "ReactTS" },
        { name: "Backend", tech: "ExpressTS" },
        { name: "LLM Framework", tech: "LangChain" }
      ],
      repositoryLinks: [
        {
          label: "Repository",
          href: "https://github.com/YakobusIP/personal-chatbot"
        }
      ],
      tooltip: false
    },
    {
      title: "RoadToFit",
      description:
        "An android mobile app to help in maintaining the ideal body state and nutritions.",
      details:
        "A group project as part of Bangkit 2023 Capstone Project. I created and deployed the consumer backend as well as the ML backend.",
      techStack: [
        { name: "Backend", tech: "ExpressTS" },
        { name: "Database", tech: "PostgreSQL" },
        { name: "Cloud Service", tech: "Google Cloud Platform" }
      ],
      repositoryLinks: [
        {
          label: "Consumer Backend Repository",
          href: "https://github.com/RoadToFit/roadtofit-be"
        },
        {
          label: "Machine Learning Repository",
          href: "https://github.com/RoadToFit/RoadtoFit-ML"
        }
      ],
      tooltip: false
    },
    {
      title: "Food Delivery App",
      description: "An android mobile app for food delivery.",
      details:
        "I created the mobile user interface as well as the backend and database schema for a simple food delivery app.",
      techStack: [
        { name: "Frontend", tech: "Mobile Flutter" },
        { name: "Backend", tech: "Python DJango" },
        { name: "CMS", tech: "PostgreSQL" }
      ],
      repositoryLinks: [
        {
          label: "Repository",
          href: "https://github.com/YakobusIP/food-delivery-app"
        }
      ],
      tooltip: false
    },
    {
      title: "OSKM ITB 2023",
      description:
        "A landing page designed to help students during OSKM ITB 2023 event.",
      details:
        "I led the development of this website which includes a landing page as well as a blog page. The blog page uses Ghost CMS to store articles.",
      techStack: [
        { name: "Frontend", tech: "ReactTS (NextJS)" },
        { name: "Backend", tech: "tRPC" },
        { name: "CMS", tech: "Ghost CMS" }
      ],
      repositoryLinks: [
        { label: "Repository", href: "https://github.com/KATITB2023/oskm-info" }
      ],
      tooltip: false
    },
    {
      title: "Binotify Web Music Player",
      description: "A simple web music player",
      details:
        "A group project to complete the Web Based Development class. I helped develop all the components, including the Docker.",
      techStack: [
        { name: "Frontend", tech: "PHP and ReactJS" },
        { name: "Backend", tech: "Java (SOAP) and ExpressJS (REST)" },
        { name: "Database", tech: "MySQL and PostgreSQL" }
      ],
      repositoryLinks: [
        {
          label: "Repository",
          href: "https://github.com/YakobusIP/Tubes-2-WBD-Binotify"
        }
      ],
      tooltip: true,
      tooltipContent:
        "This repository was cloned from the original Gitlab repository"
    },
    {
      title: "BNMO Banking Website",
      description: "A simple banking website.",
      details:
        "A banking website with admin and customer sides. I designed the database schema as well as build the application.",
      techStack: [
        { name: "Frontend", tech: "VueTS" },
        { name: "Backend", tech: "Go" },
        { name: "Database", tech: "PostgreSQL" }
      ],
      repositoryLinks: [
        {
          label: "Frontend Repository",
          href: "https://github.com/BNMO-Projects/BNMO-Banking-Frontend"
        },
        {
          label: "Backend Repository",
          href: "https://github.com/BNMO-Projects/BNMO-Banking-Backend"
        }
      ],
      tooltip: false
    },
    {
      title: "NKR Majika Mobile App",
      description: "An android mobile app for ordering food.",
      details:
        "A group project to complete the Platform Based Development class. I helped develop the twibbon component.",
      techStack: [
        { name: "Language", tech: "Kotlin" },
        {
          name: "Backend",
          tech: "Custom (provided as part of the specification)"
        },
        { name: "Database", tech: "SQLite (Room Database)" }
      ],
      repositoryLinks: [
        {
          label: "Repository",
          href: "https://github.com/sivaren/if3210-2023-android-nkr"
        }
      ],
      tooltip: true,
      tooltipContent:
        "This repository was cloned from the original Gitlab repository"
    }
  ];

  return (
    <section className="flex flex-col w-4/5 bg-white text-black justify-center py-16 gap-4">
      <div className="flex flex-col">
        <h1>Projects</h1>
        <p className="[&:not(:first-child)]:mt-4">
          My portfolio showcases a variety of projects I've tackled, from simple
          websites to complex applications. Dive in and see how I've applied my
          skills to solve real-world challenges.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-project gap-4 items-center">
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
