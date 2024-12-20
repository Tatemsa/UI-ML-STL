export interface Fan {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  nationality: string;
  preferences: {
    roomType: string[];
    interests: string[];
    dietaryRestrictions: string[];
  };
  membershipLevel: 'STANDARD' | 'GOLD' | 'PLATINUM';
  points: number;
  registrationDate: Date;
}

export interface FanStats {
  totalFans: number;
  newFansThisMonth: number;
  activeFans: number;
  fansByLevel: {
    STANDARD: number;
    GOLD: number;
    PLATINUM: number;
  };
}