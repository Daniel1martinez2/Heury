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

export type ObservationType = {
  notes: string;
  heuristics: string[];
  severity: string;
  evidence: string; 
  recommendations: string; 
  id: string; 
}

export interface ObservationInterface {
  observationData:ObservationType;
  onSetObservation: any;
  onDeleteObservation: (id:string) => void; 
  index: number;
}

export interface ObservationFormInterface{
  onAddObservation?: addObservation;
  setShowModal:any ;
  editData?:any;
  onSetObservation?:any
}; 

export interface CheckInputInterface{
  name: string; 
  validation: boolean; 
  onEditCheckBoxArray: any; 
}; 

export interface ModalOverlayInterface {
  onAddObservation?: addObservation;
  setShowModal: any;
  editData?: any;
  onSetObservation?: any
}; 


export interface FormElements extends HTMLFormControlsCollection {
  notes: HTMLTextAreaElement;
  severity: any; 
  solution: HTMLTextAreaElement;
}
export interface Form extends HTMLFormElement {
  readonly elements: FormElements;
}

export type addObservation = (observation:ObservationType)=>void; 

export type ProjectUserType = {
  role: 'owner' | 'collaborator';
  profileImg?: string;
  name: string;
  id: string;
}