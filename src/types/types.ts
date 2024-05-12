export interface IContact {
  [key: string]: string | number; // or adjust as per the actual data types in your contacts
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  instagramHandle: string;
  temperatureScore: number;
  company: string;
  location: string;
  lastTouchpoint: string;
  latestActivity: string;
}
