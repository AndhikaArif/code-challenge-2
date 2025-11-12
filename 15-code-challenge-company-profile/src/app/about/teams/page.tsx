"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ITeam {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  phone: string;
}

export default function TeamsPage() {
  const [users, setUsers] = useState<ITeam[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data dari RandomUser
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();
        setUsers(data.results);
      } catch (err) {
        console.error("Error fetch users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const roles = [
    "Production Supervisor",
    "Quality Control Lead",
    "Marketing Specialist",
    "Sales Coordinator",
    "Logistics Manager",
    "Brand Communication Officer",
  ];

  const bios = [
    "Dedicated professional with strong attention to detail and passion for improvement.",
    "Experienced specialist who values teamwork and long-term growth.",
    "Creative problem solver focused on delivering high-quality results.",
    "Energetic team member with strong operational and communication skills.",
    "Committed to efficiency and maintaining world-class standards.",
    "Works closely with teams to ensure consistent and effective output.",
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50 py-20 px-6 text-gray-800">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Meet Our Team
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          The dedicated people behind VIT — working together to deliver quality,
          innovation, and trust for millions of customers across Indonesia.
        </motion.p>
      </div>

      {/* Loading state */}
      {loading && (
        <p className="text-center text-gray-500">Loading team members...</p>
      )}

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {!loading &&
          users.map((user, index) => (
            <motion.div
              key={index}
              className="bg-white shadow rounded-2xl overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Foto */}
              <div className="w-full h-64 relative">
                <Image
                  src={user.picture.large}
                  alt={user.name.first}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                {/* Nama */}
                <h2 className="text-xl font-semibold text-gray-900">
                  {user.name.first} {user.name.last}
                </h2>

                {/* Role */}
                <p className="text-red-500 font-medium mt-1">
                  {roles[index % roles.length]}
                </p>

                {/* Bio */}
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  {bios[index % bios.length]}
                </p>

                {/* Contact (dummy dari API) */}
                <div className="mt-6 text-sm text-gray-500">
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </main>
  );
}
