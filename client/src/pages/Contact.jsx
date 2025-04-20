import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Globe,
  MessageSquare,
  Users,
  Store,
  Headphones,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  const locations = [
    {
      city: "New York",
      address: "123 Fashion Avenue, NY 10001",
      phone: "+1 (212) 555-0123",
      hours: "Mon-Sat: 10AM-8PM",
    },
    {
      city: "Paris",
      address: "45 Rue de la Mode, 75008",
      phone: "+33 1 23 45 67 89",
      hours: "Mon-Sat: 10AM-8PM",
    },
    {
      city: "Milan",
      address: "Via della Moda 78, 20121",
      phone: "+39 02 1234 5678",
      hours: "Mon-Sat: 10AM-8PM",
    },
  ];

  const contactStats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Customer Support Team",
      value: "24/7",
    },
    {
      icon: <Store className="w-6 h-6" />,
      label: "Global Boutiques",
      value: "25+",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "Response Time",
      value: "< 2h",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      label: "Languages",
      value: "12+",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center text-white">
        <div className="w-full h-full bg-black/40 px-5 md:px-10 py-16">
          <div className="flex flex-col md:gap-10 lg:gap-10 gap-3 max-w-7xl mx-auto">
            <h1 className="md:text-5xl text-2xl w-2/3 md:w-1/2 font-serif">
              Connect With ESCARTA
            </h1>
            <p className="md:text-2xl w-2/3 md:w-1/2 font-serif">
              Let's start a conversation about elevating your style journey.
            </p>
            <button className="border border-white w-fit px-5 py-2 rounded-full text-2xl max-sm:text-base hover:bg-white hover:text-black duration-300">
              Book Consultation
            </button>
            <div className="max-sm:hidden h-40"></div>
          </div>
        </div>
      </div>

      <div className="w-full flex max-sm:flex-col">
        <div className="w-1/3 max-sm:w-full flex flex-col items-start p-10 max-sm:p-5 bg-white">
          <h2 className="text-3xl font-serif text-gray-900 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-6 w-full">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-slate-900 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-gray-900">Email Us</h3>
                <p className="text-gray-600">contact@escarta.com</p>
                <p className="text-gray-600">support@escarta.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-slate-900 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-gray-900">Call Us</h3>
                <p className="text-gray-600">+1 (800) ESCARTA</p>
                <p className="text-gray-600">+1 (212) 555-0123</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-slate-900 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-gray-900">Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9AM - 8PM</p>
                <p className="text-gray-600">Saturday: 10AM - 6PM</p>
                <p className="text-gray-600">Sunday: 12PM - 5PM</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-serif text-gray-900 mb-6">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-12 w-full">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200"
              alt="ESCARTA Global"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="w-2/3 max-sm:w-full flex flex-col items-start p-10 max-sm:p-5">
          <div className="w-full mb-16">
            <h2 className="text-4xl max-sm:text-3xl font-serif text-gray-900 mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-900 rounded-sm text-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-16">
            {contactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center mb-4 text-slate-900">
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

          <div className="w-full">
            <h2 className="text-3xl font-serif text-gray-900 mb-8">
              Global Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-slate-900 mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">
                    {location.city}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>{location.address}</p>
                    <p>{location.phone}</p>
                    <p>{location.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
