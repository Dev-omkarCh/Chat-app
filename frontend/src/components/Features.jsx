import React from 'react';
import { FiMessageCircle, FiUsers, FiShield,} from 'react-icons/fi';

const Features = () => {
  return (
    <div>
        <section id="features" className="py-12 bg-gray-100 dark:bg-gray-800 w-full">
            <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
                <FiMessageCircle className="text-accent dark:text-accentLight w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-Time Messaging</h3>
                <p>Instant messaging with real-time updates to stay connected.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
                <FiUsers className="text-accent dark:text-accentLight w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Add Friends</h3>
                <p>Add Frinds and Chat freely</p>
                </div>
                <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
                <FiShield className="text-accent dark:text-accentLight w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Conversations</h3>
                <p>We ensures your conversations are private and Secure</p>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Features
