import React from "react";
import {
  Users,
  Building2,
  Award,
  Clock,
  Target,
  Rocket,
  Heart,
  Briefcase,
  CheckCircle2,
  Trophy,
} from "lucide-react";

function About() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Satisfied Customers",
      value: "50,000+",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      label: "Retail Locations",
      value: "25+",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Fashion Awards",
      value: "15+",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Years of Style",
      value: "12+",
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sustainable Fashion",
      description:
        "We're committed to creating fashion that not only looks good but also respects our environment through sustainable practices and ethical manufacturing.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer-Centric",
      description:
        "Your style journey is our priority. We create designs that make you feel confident and comfortable, ensuring every piece tells your unique story.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Trendsetting Innovation",
      description:
        "We stay ahead of global fashion trends while creating timeless pieces that transcend seasons and define contemporary style.",
    },
  ];

  const services = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Bespoke Tailoring",
      description:
        "Personalized fitting and customization services for the perfect fit.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Style Consultation",
      description:
        "Expert styling advice to help you curate your perfect wardrobe.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Premium Collections",
      description:
        "Exclusive designer collections crafted with premium materials.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full bg-[url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center text-white">
        <div className="w-full h-full bg-black/30 px-5 md:px-10 py-16">
          <div className="flex flex-col md:gap-10 lg:gap-10 gap-3 max-w-7xl mx-auto">
            <h1 className="md:text-5xl text-2xl w-2/3 md:w-1/2 font-serif">
              Where Style Meets Elegance
            </h1>
            <p className="md:text-2xl w-2/3 md:w-1/2 font-serif">
              Step into a world where every outfit tells a story, and your style
              speaks volumes without saying a word.
            </p>
            <button className="border border-white w-fit px-5 py-2 rounded-full text-2xl max-sm:text-base hover:bg-white hover:text-black duration-300">
              Shop Now
            </button>
            <div className="max-sm:hidden h-40"></div>
          </div>
        </div>
      </div>

      <div className="w-full flex max-sm:flex-col">
        <div className="w-1/3 max-sm:w-full flex flex-col items-start p-10 max-sm:p-5 bg-white">
          <h2 className="text-3xl font-serif text-gray-900 mb-6">
            Our Heritage
          </h2>
          <div className="prose text-gray-600">
            <p className="mb-4">
              Founded in 2011, ESCARTA emerged from a passion for creating
              exceptional fashion that transcends trends. What began as a
              boutique atelier has evolved into a global fashion house known for
              its distinctive style and commitment to sustainability.
            </p>
            <p className="mb-4">
              Our journey has been defined by innovation in sustainable fashion,
              expert craftsmanship, and a deep understanding of contemporary
              style. We've revolutionized the industry with our eco-conscious
              approaches and timeless designs.
            </p>
            <p>
              Today, ESCARTA stands as a symbol of sustainable luxury, trusted
              by fashion enthusiasts worldwide. Our collections continue to push
              boundaries while maintaining our commitment to ethical fashion and
              exceptional quality.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-serif text-gray-900 mb-6">
              Creative Team
            </h3>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1200"
                alt="Our Design Team"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <p className="text-gray-600">
                Our creative team brings together visionary designers, expert
                craftsmen, and sustainable fashion pioneers to create
                collections that define modern elegance.
              </p>
            </div>
          </div>
        </div>

        <div className="w-2/3 max-sm:w-full flex flex-col items-start p-10 max-sm:p-5">
          <div className="w-full mb-12">
            <h1 className="text-4xl max-sm:text-3xl font-serif text-gray-900 mb-6">
              About ESCARTA
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              ESCARTA is more than a fashion brand; we're a movement towards
              sustainable luxury. Our collections blend innovative design with
              ethical practices, creating pieces that make you look good and
              feel good about wearing them.
            </p>
            <p className="text-lg text-gray-600">
              With a focus on timeless elegance and sustainable innovation, we
              help our customers express their unique style while contributing
              to a more sustainable fashion industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-blue-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200"
              alt="Fashion Collection"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200"
              alt="Sustainable Fashion"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
