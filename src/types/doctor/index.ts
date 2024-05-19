export interface TDoctor {
    id: string;
    name: string;
    profilePhoto: string;
    contactNumber: string;
    address: string;
    registrationNumber: string;
    experience: number | undefined;
    gender: "MALE" | "FEMALE";
    apointmentFee: number | undefined;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    specialties?: TSpecialties[];
  }
  
  export interface TSpecialties {
    specialtiesId: string;
    isDeleted?: null;
  }
  
  export interface IDoctorFormData {
    doctor: TDoctor;
    password: string;
  }