import React from "react";
import { Calendar, Download, Eye, FileText, Users } from "lucide-react";
import { Award, Lightbulb, Briefcase, Image, Sparkles } from "lucide-react";

const AboutJournal = () => {
  const pdfButtons = [
    {
      id: 1,
      title: "Editorial PDF",
      description: "Letters from the editors and journal insights",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      file: "/pdfs/1.pdf",
    },
    {
      id: 2,
      title: "Research Highlights",
      description: "Featured studies and breakthrough findings",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      file: "/pdfs/2.pdf",
    },
    {
      id: 3,
      title: "Awards & Recognition",
      description: "Honors, achievements, and accolades",
      icon: Award,
      color: "from-yellow-500 to-orange-600",
      hoverColor: "hover:from-yellow-600 hover:to-orange-700",
      bgColor: "bg-yellow-50",
      textColor: "text-orange-700",
      file: "/pdfs/3.pdf",
    },
    {
      id: 4,
      title: "Industry Collaboration",
      description: "Partnerships and product-level highlights",
      icon: Briefcase,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      file: "/pdfs/4.pdf",
    },
    {
      id: 5,
      title: "Visual Archive",
      description: "Photos, graphics, and visual documentation",
      icon: Image,
      color: "from-pink-500 to-rose-600",
      hoverColor: "hover:from-pink-600 hover:to-rose-700",
      bgColor: "bg-pink-50",
      textColor: "text-rose-700",
      file: "/pdfs/5.pdf",
    },
  ];

  return (
    <>
      <section className="pt-28 md:pt-40 pb-20 md:pb-28 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200">
              <span className="text-sm font-medium text-purple-700">
                Our Mission & Vision
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wide text-gray-900 mb-6">
              About the{" "}
              <span className="text-purple-600 font-medium">Journal</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              SatyaVision Chronicles is the research magazine of the Innovation
              and Entrepreneurship Development Cell (I.E.D.C), Department of CSE
              (IoT, Cybersecurity & Blockchain Technology), University of Engineering and Management (UEM) Kolkata,
              celebrating innovation, inquiry, and technological excellence. The
              magazine highlights impactful research powered by advanced
              supercomputing infrastructure, GPU-accelerated AI/ML models, and
              intelligent edge systems. It showcases interdisciplinary work
              across healthcare AI, neuroscience, smart agriculture, blockchain
              security, and next-generation intelligent platforms. Featuring
              high-quality publications, patents, prototypes, and collaborative
              research outcomes, the Chronicle reflects recent trends in
              engineering and technology while inspiring students and
              researchers to transform ideas into real-world solutions within a
              vibrant innovation ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Downloads Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block mb-6 px-6 py-2 bg-purple-50 rounded-full border border-purple-200">
              <span className="text-sm font-medium text-purple-700">
                Download Resources
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Explore Our Publications
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Access comprehensive documentation of our research journey,
              achievements, and collaborations
            </p>
          </div>

          {/* Individual PDF Buttons */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {pdfButtons.map((pdf) => {
              const Icon = pdf.icon;
              return (
                <a
                  key={pdf.id}
                  href={pdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 overflow-hidden"
                >
                  {/* Decorative gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pdf.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 ${pdf.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      <Icon className={`w-8 h-8 ${pdf.textColor}`} />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                      {pdf.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {pdf.description}
                    </p>

                    <div
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${pdf.color} ${pdf.hoverColor} text-white px-5 py-2.5 rounded-xl font-medium text-sm shadow-lg group-hover:shadow-xl transition-all`}
                    >
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                      Download PDF
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${pdf.color} opacity-10 rounded-bl-3xl`}
                  ></div>
                </a>
              );
            })}
          </div>

          {/* Master PDF Button */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>

              <a
                href="/pdfs/master.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block group"
              >
                <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-8 md:p-10 border border-white/20">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Sparkles className="w-10 h-10 text-white animate-pulse" />
                      </div>

                      <div className="text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                          Complete Magazine Archive
                          <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
                            ALL-IN-ONE
                          </span>
                        </h3>
                        <p className="text-white/90 text-sm md:text-base font-light">
                          Download the complete merged PDF with all sections
                          included
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white text-purple-700 px-6 py-3 rounded-xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                      <span>Download PDF</span>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                </div>
              </a>
            </div>

            {/* Info text */}
            <p className="text-center text-gray-600 text-sm mt-6 font-light">
              📄 The master PDF includes all five sections in a single
              comprehensive document
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const Archive = () => {
  const archiveIssues = [
    {
      id: 1,
      volume: "Volume 1",
      issue: "Issue 1",
      year: "2025",
      month: "December",
      coverImage: "/iedc-logo.png",
      totalArticles: 12,
      downloadCount: "2.1K",
      frequency: "Bi-annual",
      subject: "Recent trends in Engineering and Technology",
      language: "English",
      articles: [
        {
          id: 1,
          title:
            "Application of Deep Learning Algorithm for Judicious Use of Anti-VEGF in Diabetic Macular Edema",
          authors:
            "Anwesa Mondal, Apurba Nandi, Subhasish Pramanik, Lakshmi Kanta Mondal",
          pages: "4569",
          doi: "10.1038/s41598-025-4569",
          status: "Published",
          featured: true,
          abstract:
            "Diabetic Macular Edema (DME) is a major complication of diabetic retinopathy characterized by fluid accumulation in the macula, leading to vision impairment. The standard treatment involves anti-VEGF therapy, but ~36% of patients do not respond adequately. This study develops a Hybrid Deep Learning model integrating OCT images and clinical data from 181 patients to predict treatment responses, achieving 85% accuracy and supporting more personalized treatment strategies.",
          keywords: [
            "Deep Learning",
            "Diabetic Macular Edema",
            "Anti-VEGF",
            "Ophthalmology",
            "Hybrid Models",
          ],
          type: "Research Article",
          journal: "Scientific Reports",
          volume: "15",
          issue: "1",
          publisher: "Nature Publishing Group UK",
          citationCount: 6,
          accessCount: 2666,
          publishedDate: "February 7, 2025",
        },
        {
          id: 2,
          title:
            "Deep Convolutional Neural Network Based Smart Traffic Prediction Using IoT",
          authors: "Apurba Nandi, Santi P. Maity",
          pages: "105–110",
          doi: "10.1109/ICSCIT64012.2025.10456789",
          status: "Published",
          featured: false,
          abstract:
            "This paper introduces a smart traffic prediction model using IoT-enabled sensors combined with deep convolutional neural networks (CNNs). The proposed system predicts real-time traffic flow patterns and congestion, offering improved efficiency compared to traditional statistical models. Experimental validation shows the framework’s effectiveness in reducing prediction errors, making it highly suitable for intelligent transportation systems.",
          keywords: [
            "Smart Traffic",
            "IoT",
            "Deep Learning",
            "CNN",
            "Intelligent Transport Systems",
          ],
          type: "Conference Paper",
          journal:
            "2025 IEEE International Conference on Smart Computing and Information Technology (ICSCIT)",
          volume: "",
          issue: "",
          publisher: "IEEE",
          citationCount: 3,
          accessCount: 1450,
          publishedDate: "January 17, 2025",
        },
        {
          id: 3,
          title:
            "Explainable Deep Learning Models for Early Detection of Alzheimer’s Disease",
          authors:
            "Apurba Nandi, Debabrata Samanta, Nilanjan Dey, Amira Ashour",
          pages: "78–85",
          doi: "10.1007/978-981-99-1234-5_7",
          status: "Published",
          featured: false,
          abstract:
            "This chapter presents explainable deep learning frameworks for early detection of Alzheimer’s disease using MRI scans. By integrating Grad-CAM visualization, the study improves transparency and interpretability in diagnostic models. Comparative analysis with baseline CNNs demonstrates enhanced accuracy and explainability, supporting more reliable medical decision-making.",
          keywords: [
            "Explainable AI",
            "Deep Learning",
            "Alzheimer’s Disease",
            "MRI",
            "Grad-CAM",
          ],
          type: "Book Chapter",
          journal:
            "Handbook of Explainable Artificial Intelligence in Healthcare",
          volume: "",
          issue: "",
          publisher: "Springer",
          citationCount: 8,
          accessCount: 1675,
          publishedDate: "March 5, 2025",
        },
        {
          id: 4,
          title:
            "A Robust Face Recognition System under Adverse Weather Conditions Using Ensemble Deep Learning",
          authors: "Apurba Nandi, Gourab Mandal, Anirban Bhandari",
          pages: "512–520",
          doi: "10.1109/ICCV64023.2025.11012345",
          status: "Published",
          featured: false,
          abstract:
            "This work presents a robust face recognition framework designed to operate reliably under adverse weather conditions such as fog, rain, and low-light scenarios. The system integrates ensemble deep learning models with preprocessing filters to extract stable features. Experimental evaluation on distorted datasets confirms significant performance improvement over traditional CNN-based methods.",
          keywords: [
            "Face Recognition",
            "Ensemble Learning",
            "Adverse Weather",
            "Image Preprocessing",
            "CNN",
          ],
          type: "Conference Paper",
          journal:
            "2025 IEEE International Conference on Computer Vision (ICCV)",
          volume: "",
          issue: "",
          publisher: "IEEE",
          citationCount: 4,
          accessCount: 1320,
          publishedDate: "April 12, 2025",
        },
        {
          id: 5,
          title:
            "Deep Q Network-Driven Intelligent Systems: Advancing the Dynamics of Student-Alumni Networking and Professional Mentorship",
          authors:
            "Neepa Kundu, Gourab Mandal, Anirban Bhandari, Udita Bhaskar, Apurba Nandi",
          pages: "445–450",
          doi: "10.1109/INCIP64058.2025.11019749",
          status: "Published",
          featured: false,
          abstract:
            "Alumni recommendation systems play a crucial role in enhancing student-alumni interactions and facilitating career development. This paper presents an innovative recommendation system utilizing Deep Q-Networks (DQN) to optimize these connections. By integrating skill embeddings and leveraging historical data, the system generates tailored recommendations that foster meaningful connections and improve networking efficiency. Comparative analysis highlights significant improvements over traditional methods, ultimately contributing to better career outcomes for students.",
          keywords: [
            "Alumni Recommendation",
            "Deep Q-Networks",
            "Skill Embeddings",
            "Student Support",
            "Networking",
          ],
          type: "Conference Paper",
          journal:
            "2025 International Conference on Next Generation Communication & Information Processing (INCIP)",
          volume: "",
          issue: "",
          publisher: "IEEE",
          citationCount: 2,
          accessCount: 1021,
          publishedDate: "January 23, 2025",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <AboutJournal />

      {/* Archive Issues */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="space-y-12">
            {archiveIssues.map((issue) => (
              <div
                key={issue.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="grid lg:grid-cols-4 gap-8 p-8">
                  {/* Issue Cover */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-4 sm:p-6 text-white h-auto  flex flex-col justify-between overflow-hidden relative">
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

                      <div className="relative z-10">
                        {/* Header with badge */}
                        <div className="flex flex-col items-start justify-between gap-3 mb-3 flex-wrap sm:flex-nowrap">
                          <div className="min-w-0">
                            <h3 className="text-xl sm:text-2xl font-light mb-1 truncate">
                              {issue.volume}
                            </h3>
                            <h4 className="text-lg sm:text-xl font-bold truncate">
                              {issue.issue}
                            </h4>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-xl text-xs font-medium shrink-0 space-y-1">
                            <div className="text-sm font-semibold">
                              {issue.month} {issue.year}
                            </div>

                            <div className="text-white/80">
                              <span className="font-semibold">Frequency:</span>{" "}
                              {issue.frequency}
                            </div>

                            <div className="text-white/80">
                              <span className="font-semibold">Subject:</span>{" "}
                              {issue.subject}
                            </div>

                            <div className="text-white/80">
                              <span className="font-semibold">Language:</span>{" "}
                              {issue.language}
                            </div>
                          </div>
                        </div>

                        {/* Cover image with better sizing */}
                        <div className="w-full p-3 h-28 sm:h-32 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 shadow-lg">
                          <img
                            src={issue.coverImage}
                            alt="Issue cover"
                            className="w-auto h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Stats grid */}
                      <div className="relative z-10 flex flex-col gap-2 sm:gap-3">
                        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-2 sm:p-3 flex items-center gap-2">
                          <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg shrink-0">
                            <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-xs opacity-80 truncate">
                              Articles
                            </span>
                            <span className="font-bold text-sm sm:text-base">
                              {issue.totalArticles}
                            </span>
                          </div>
                        </div>

                        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-2 sm:p-3 flex items-center gap-2">
                          <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg shrink-0">
                            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-xs opacity-80 truncate">
                              Downloads
                            </span>
                            <span className="font-bold text-sm sm:text-base">
                              {issue.downloadCount}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Articles List */}
                  <div className="lg:col-span-3">
                    <div className="mb-6">
                      <h3 className="text-2xl font-light text-gray-800 mb-2">
                        {issue.volume}, {issue.issue} - {issue.month}{" "}
                        {issue.year}
                      </h3>
                      <p className="text-gray-600">
                        Featured research articles and papers
                      </p>
                    </div>

                    <div className="space-y-6">
                      {issue.articles.map((article, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-6 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-lg font-medium text-gray-800 leading-tight pr-4">
                              {article.title}
                            </h4>
                            <div className="flex gap-2 flex-shrink-0">
                              <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>{article.authors}</span>
                            </div>

                            <div className="flex gap-6 text-sm text-gray-500">
                              <span>Pages: {article.pages}</span>
                              <span>DOI: {article.doi}</span>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed">
                              {article.abstract}
                            </p>
                          </div>

                          <div className="flex gap-3 mt-4">
                            <button className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                              View Abstract
                            </button>
                            <button className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                              Download PDF
                            </button>
                          </div>
                        </div>
                      ))}

                      {issue.totalArticles > issue.articles.length && (
                        <div className="text-center py-4">
                          <button className="text-purple-600 hover:text-purple-700 font-medium">
                            View All {issue.totalArticles} Articles →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Archive Statistics
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Our growing collection of research publications
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-purple-600 mb-2">
                30+
              </div>
              <div className="text-gray-600">Total Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Issues Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-purple-600 mb-2">
                5.4K
              </div>
              <div className="text-gray-600">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-purple-600 mb-2">
                45+
              </div>
              <div className="text-gray-600">Contributing Authors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Archive;
