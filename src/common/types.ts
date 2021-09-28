export type Heuristics = (
  "Visibility of system status"
  | "Match between system and the real world"
  | "User control and freedom"
  | "Consistency and standards"
  | "Error prevention"
  | "Recognition rather than recall"
  | "Flexibility and efficiency of use"
  | "Aesthetic and minimalist design"
  | "Help recognize & recover from errors"
  | "Help and documentation"
);

export type Severity= (
  '1 Minor'
  | '2 Middle'
  | '3 High'
  | '4 Major'
); 

export interface ObservationInterface {
  index: number;
  notes: string;
  heuristics: Heuristics[];
  severity: Severity;
  evidence: string; 
  recommendations: string; 
  id: string; 
}

