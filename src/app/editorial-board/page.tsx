import React from 'react'
import Link from 'next/link'
import { Mail, MapPin, ExternalLink, GraduationCap, ArrowLeft, Users } from 'lucide-react'

const EditorialBoard = () => {
  const editorialMembers = [
    {
      id: 1,
      name: "Prof.(Dr.) Sandip Mandal",
      designation: "Head of the Department, CSE(IoT, CS, BT) & Chief Editor",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "sandip.mandal@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/dr-sandip-mandal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Sandip.jpeg",
      role: "chief"
    },
    {
      id: 3,
      name: "Prof. Avik Kumar Das",
      designation: "Editor",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "avikkumar.das@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/avikdasetc?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Avik.jpeg",
      role: "editor"
    },
    {
      id: 4,
      name: "Prof. Apurba Nandi",
      designation: "Editor",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "apurba.nandi@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/apurba-nandi-8b63b2174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Apurba.jpeg",
      role: "editor"
    },
    {
      id: 5,
      name: "Suman Mishra",
      designation: "Student Member",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "suman.mishra2022@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/suman-mishra420/",
      image: "/Suman.jpg",
      role: "student"
    },
    {
      id: 6,
      name: "Tista Mukherjee",
      designation: "Student Member",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "tista.mukherjee2023@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/tista-mukherjee-8a574a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Tista.jpg",
      role: "student"
    },
    {
      id: 7,
      name: "Somrik Mondal",
      designation: "Student Member",
      institution: "University of Engineering & Management",
      department: "CSE(IoT, CS, BT)",
      email: "somrik.mondal2023@uem.edu.in",
      address: "University Area, Plot No III B/5, New Town Action Area III, Newtown, Kolkata, West Bengal 700160",
      profileLink: "https://www.linkedin.com/in/somrik-mondal-558aa8321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/Somrik.jpg",
      role: "student"
    }
  ]

  // Separate members by role
  const chiefEditor = editorialMembers.filter(m => m.role === 'chief')
  const editors = editorialMembers.filter(m => m.role === 'editor')
  const studentMembers = editorialMembers.filter(m => m.role === 'student')

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50'>
      {/* Header Section */}
      <section className='pt-28 md:pt-40 pb-20 md:pb-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden'>
        {/* Decorative elements */}
        <div className='absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl'></div>

        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10'>
          {/* Back Button */}
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 group transition-colors'
          >
            <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
            Back to Contact
          </Link>

          <div className='text-center'>
            <div className='inline-block mb-6 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200'>
              <span className='text-sm font-medium text-blue-700 flex items-center gap-2'>
                <Users className='w-4 h-4' />
                Our Leadership Team
              </span>
            </div>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wide text-gray-900 mb-6'>
              Editorial <span className='text-blue-600 font-medium'>Board</span>
            </h1>
            <div className='w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10'></div>
            <p className='text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto'>
              Meet our distinguished editorial board members who bring decades of research experience 
              and academic excellence to guide our journal's scholarly mission.
            </p>
          </div>
        </div>
      </section>

      {/* Chief Editor Section */}
      <section className='py-20 md:py-32'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-6 px-6 py-2 bg-blue-50 rounded-full border border-blue-200'>
              <span className='text-sm font-medium text-blue-700'>
                Chief Editor
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-800 mb-4'>
              Leadership
            </h2>
          </div>

          <div className='max-w-2xl mx-auto'>
            {chiefEditor.map((member) => (
              <div
                key={member.id}
                className='bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 md:p-12 border border-gray-100 group'
              >
                <div className='text-center mb-10'>
                  <div className='relative inline-block mb-8'>
                    <div className='w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-105 transition-transform'>
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-28 h-28 rounded-full object-cover'
                      />
                    </div>
                    <div className='absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full border-4 border-white flex items-center justify-center'>
                      <span className='text-white text-xl'>★</span>
                    </div>
                  </div>
                  <h3 className='text-3xl font-semibold text-gray-800 mb-3'>
                    {member.name}
                  </h3>
                  <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg'>
                    <GraduationCap className='w-4 h-4' />
                    {member.designation}
                  </div>
                  <div className='mt-4 space-y-1'>
                    <p className='text-gray-700 font-medium'>{member.department}</p>
                    <p className='text-gray-600'>{member.institution}</p>
                  </div>
                </div>

                <div className='space-y-6 pt-8 border-t border-gray-100'>
                  {/* Email */}
                  <div className='bg-purple-50 rounded-xl p-4 hover:bg-purple-100 transition-colors'>
                    <div className='flex items-start gap-3'>
                      <Mail className='w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0' />
                      <div className='flex-1'>
                        <h4 className='font-semibold text-gray-800 text-sm mb-1'>Email Address</h4>
                        <a
                          href={`mailto:${member.email}`}
                          className='text-purple-700 hover:text-purple-800 font-medium break-all transition-colors'
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className='bg-blue-50 rounded-xl p-4 hover:bg-blue-100 transition-colors'>
                    <div className='flex items-start gap-3'>
                      <MapPin className='w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0' />
                      <div className='flex-1'>
                        <h4 className='font-semibold text-gray-800 text-sm mb-1'>Office Address</h4>
                        <p className='text-gray-700 leading-relaxed'>
                          {member.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Link */}
                  <div className='pt-4'>
                    <a
                      href={member.profileLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl group/link'
                    >
                      <ExternalLink className='w-5 h-5 group-hover/link:scale-110 transition-transform' />
                      View LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editors Section */}
      <section className='py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-6 px-6 py-2 bg-green-50 rounded-full border border-green-200'>
              <span className='text-sm font-medium text-green-700'>
                Editorial Team
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-800 mb-4'>
              Editors
            </h2>
          </div>

          <div className='grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto'>
            {editors.map((member) => (
              <div
                key={member.id}
                className='bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 md:p-10 border border-gray-100 group'
              >
                <div className='text-center mb-8'>
                  <div className='relative inline-block mb-6'>
                    <div className='w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform'>
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-20 h-20 rounded-full object-cover'
                      />
                    </div>
                    <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white'></div>
                  </div>
                  <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
                    {member.name}
                  </h3>
                  <div className='inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium'>
                    <GraduationCap className='w-4 h-4' />
                    {member.designation}
                  </div>
                  <div className='mt-3 space-y-1'>
                    <p className='text-gray-700 text-sm font-medium'>{member.department}</p>
                    <p className='text-gray-600 text-sm'>{member.institution}</p>
                  </div>
                </div>

                <div className='space-y-4 pt-6 border-t border-gray-100'>
                  {/* Email */}
                  <div className='bg-purple-50 rounded-xl p-3'>
                    <div className='flex items-start gap-2'>
                      <Mail className='w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0' />
                      <div className='flex-1 min-w-0'>
                        <h4 className='font-semibold text-gray-800 text-xs mb-1'>Email</h4>
                        <a
                          href={`mailto:${member.email}`}
                          className='text-purple-700 hover:text-purple-800 text-xs font-medium break-all transition-colors'
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className='bg-blue-50 rounded-xl p-3'>
                    <div className='flex items-start gap-2'>
                      <MapPin className='w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0' />
                      <div className='flex-1'>
                        <h4 className='font-semibold text-gray-800 text-xs mb-1'>Address</h4>
                        <p className='text-gray-700 text-xs leading-relaxed'>
                          {member.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Link */}
                  <a
                    href={member.profileLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-xl group/link'
                  >
                    <ExternalLink className='w-4 h-4 group-hover/link:scale-110 transition-transform' />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Members Section */}
      <section className='py-20 md:py-32'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-6 px-6 py-2 bg-orange-50 rounded-full border border-orange-200'>
              <span className='text-sm font-medium text-orange-700'>
                Student Contributors
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-800 mb-4'>
              Student Members
            </h2>
            <p className='text-lg text-gray-600 font-light max-w-2xl mx-auto'>
              Talented students contributing to editorial excellence and research innovation
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
            {studentMembers.map((member) => (
              <div
                key={member.id}
                className='bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group'
              >
                <div className='text-center mb-6'>
                  <div className='relative inline-block mb-6'>
                    <div className='w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform'>
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-20 h-20 rounded-full object-cover'
                      />
                    </div>
                    <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white'></div>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    {member.name}
                  </h3>
                  <div className='inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full text-xs font-medium'>
                    <GraduationCap className='w-3.5 h-3.5' />
                    {member.designation}
                  </div>
                  <p className='text-gray-600 text-xs mt-2'>{member.department}</p>
                </div>

                <div className='space-y-3 pt-6 border-t border-gray-100'>
                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className='flex items-center justify-center gap-2 text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-2.5 rounded-xl transition-colors group/link'
                  >
                    <Mail className='w-3.5 h-3.5 group-hover/link:scale-110 transition-transform flex-shrink-0' />
                    <span className='font-medium truncate'>{member.email}</span>
                  </a>

                  {/* Profile Link */}
                  <a
                    href={member.profileLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-2 text-xs bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-3 py-2.5 rounded-xl transition-all shadow-lg hover:shadow-xl group/link font-medium'
                  >
                    <ExternalLink className='w-3.5 h-3.5 group-hover/link:scale-110 transition-transform' />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 md:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden'>
        {/* Decorative elements */}
        <div className='absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl'></div>

        <div className='max-w-4xl mx-auto text-center px-4 md:px-8 lg:px-16 relative z-10'>
          <h2 className='text-4xl md:text-5xl font-light text-gray-800 mb-6'>
            Join Our Academic Community
          </h2>
          <p className='text-xl text-gray-600 font-light leading-relaxed mb-10'>
            We welcome submissions from researchers and academics worldwide. 
            Our editorial board ensures rigorous peer review and maintains the highest standards of academic excellence.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl group'
          >
            Get in Touch
            <ArrowLeft className='w-5 h-5 group-hover:translate-x-1 transition-transform rotate-180' />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default EditorialBoard