export type Heuristics = (
  "visibility of system status"
  | "match between system and the real world"
  | "user control and freedom"
  | "consistency and standards"
  | "error prevention"
  | "recognition rather than recall"
  | "flexibility and efficiency of use"
  | "aesthetic and minimalist design"
  | "help recognize & recover from errors"
  | "help and documentation"
);

export type Severity= (
  '1 Minor'
  | '2 Middle'
  | '3 High'
  | '4 Major'
); 

export type ObservationInterface = {
  index: number;
  notes: string;
  heuristics: string[];
  severity: Severity;
  evidence: string; 
  recommendations: string; 
  id: string; 
}

export type addObservation = (observation:ObservationInterface)=>void; 
