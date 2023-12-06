import { Role } from './Role';

// Define the User interface here
export interface User {
  id: number;
  name: string;
  role: Role;
  email: string;
  numberPhone: string;
}
