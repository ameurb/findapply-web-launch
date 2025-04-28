
import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="md:col-span-2 space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Phone</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Email</h4>
              <p className="text-gray-600">wordia.data@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">WhatsApp</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
        <p className="text-gray-600">
          Monday - Friday: 9am - 6pm<br />
          Saturday: 10am - 2pm<br />
          Sunday: Closed
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
