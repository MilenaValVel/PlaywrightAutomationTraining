// Model the New Request wizard data as types: ContactDetails, Location, RequestDetails, Attachment, and one NewRequest that combines them


type Priority = 'Low' | 'Medium' | 'High' | 'Urgent';

type RequestDetails = {
  title: string;
  description: string;
  dateOfRequest: string;
  category: string;
  priority: Priority;
  isEmergency: boolean;
};

type ContactMethod = 'Email' | 'Phone' | 'SMS' | 'Mail';

type RequestLocationDetails = {
  streetAddress: string;
  city: string;
  postalCode: string;
  latitude?: number;
  longitude?: number;
  description: string;
};

type ContactDetails = {
  preferredMethod: ContactMethod;
  email: string;
  phone: string;
  mailingAddress?: {
    street: string;
    city: string;
    postalCode?: string;
  };
  affectedServices?: string[];
  alternateContact?: {
    phone: string; 
  };
};

type Attachment = {
  fileName: string;
  mimeType: string;
  sizeBytes: number;
};

type NewRequest = {
  details: RequestDetails;
  location: RequestLocationDetails;
  contact: ContactDetails;
  attachments: Attachment[];
  termsAccepted: boolean;
};

//Create 3 valid test data objects and 3 invalid ones (missing or wrong fields), with a comment why each is invalid

 // VALID 1: Low-priority service request
const validRequest1: NewRequest = {
  details: {
    title: 'Damaged park bench',
    description: 'A wooden bench in the public park requires maintenance.',
    dateOfRequest: '2026-11-21',
    category: 'Roads & Infrastructure',
    priority: 'Low',
    isEmergency: false
  },
  location: {
    streetAddress: '6 Yana Yazova',
    city: 'Sofia',
    postalCode: '1700',
    description: 'Near the main park entrance'
  },
  contact: {
    preferredMethod: 'Email',
    email: 'ivan@example.com',
    phone: '+359888111111'
  },
  attachments: [],
  termsAccepted: true
};

// VALID 2: High-priority service request
const validRequest2: NewRequest = {
  details: {
    title: 'Large pothole on road',
    description: 'A large pothole creates a dangerous situation for vehicles.',
    dateOfRequest: '2026-11-21',
    category: 'Roads & Infrastructure',
    priority: 'High',
    isEmergency: false
  },
  location: {
    streetAddress: '10 Vitosha Blvd',
    city: 'Sofia',
    postalCode: '1000',
    description: 'Near the pedestrian crossing'
  },
  contact: {
    preferredMethod: 'Phone',
    email: 'maria@example.com',
    phone: '+359888222222'
  },
  attachments: [
    {
      fileName: 'pothole.jpg',
      mimeType: 'image/jpeg',
      sizeBytes: 150000
    }
  ],
  termsAccepted: true
};

// VALID 3: Urgent emergency request
const validRequest3: NewRequest = {
  details: {
    title: 'Fallen tree blocking road',
    description: 'A fallen tree is blocking traffic and endangering pedestrians.',
    dateOfRequest: '2026-11-21',
    category: 'Roads & Infrastructure',
    priority: 'Urgent',
    isEmergency: true
  },
  location: {
    streetAddress: '6 Yana Yazova',
    city: 'Sofia',
    postalCode: '1700',
    description: 'Tree blocking both traffic lanes'
  },
  contact: {
    preferredMethod: 'Phone',
    email: 'petar@example.com',
    phone: '+359888333333',
    alternateContact: {
      phone: '+359888444444'
    }
  },
  attachments: [],
  termsAccepted: true
};


 // INVALID 1: Missing required Request Title
const invalidRequest1: NewRequest =  {
  details: {
    // title is missing - REQUIRED FIELD
    description: 'A damaged road surface requires urgent maintenance.',
    dateOfRequest: '2026-11-21',
    category: 'Roads & Infrastructure',
    priority: 'High',
    isEmergency: false
  },
  location: {
    streetAddress: '6 Yana Yazova',
    city: 'Sofia',
    postalCode: '1700',
    description: 'Near the main intersection'
  },
  contact: {
    preferredMethod: 'Email',
    email: 'test1@example.com',
    phone: '+359888111111'
  },
  attachments: [],
  termsAccepted: true
};

// INVALID 2: Incorrect priority value
const invalidRequest2: NewRequest =  {
  details: {
    title: 'Broken streetlight',
    description: 'The streetlight is not working and the street is dark.',
    dateOfRequest: '2026-11-21',
    category: 'Roads & Infrastructure',
    priority: 'Critical', // INVALID: Not an allowed priority
    isEmergency: false
  },
  location: {
    streetAddress: '10 Vitosha Blvd',
    city: 'Sofia',
    postalCode: '1000',
    description: 'Streetlight near the bus stop'
  },
  contact: {
    preferredMethod: 'Email',
    email: 'test2@example.com',
    phone: '+359888222222'
  },
  attachments: [],
  termsAccepted: true
};

// INVALID 3: Emergency without alternate contact
const invalidRequest3: NewRequest = {
  details: {
    title: 'Fallen tree blocking road',
    description: 'A fallen tree is blocking traffic and endangering pedestrians.',
    dateOfRequest: '2026-11-21',
    category: 'Roads & Infrastructure',
    priority: 'Urgent',
    isEmergency: true
  },
  location: {
    streetAddress: '6 Yana Yazova',
    city: 'Sofia',
    postalCode: '1700',
    description: 'Tree blocking both traffic lanes'
  },
  contact: {
    preferredMethod: 'Phone',
    email: 'test3@example.com',
    phone: '+359888333333'
    // INVALID: Missing mandatory alternateContact
  },
  attachments: [],
  termsAccepted: true
};

