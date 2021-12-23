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
export type ProjectParams = {
  projectId: string; 
}

export type ObservationType = {
  notes: string;
  heuristics: string[];
  severity: string;
  evidence: string; 
  recommendations: string; 
  id: string; 
}

export type ProjectType = {
  name: string;
  id: string;
  users: ProjectUserType[]; 
  observations: ObservationType[]; 
  coverImage?: string;
}

export interface ObservationInterface {
  observationData:ObservationType;
  index: number;
  projectId: string; 
}

export interface ModalScreenInterface{
  setShowModal:React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}; 

export interface CheckInputInterface{
  name: string; 
  validation: boolean; 
  onEditCheckBoxArray: any; 
}; 

export interface ModalOverlayInterface {
  setShowModal: any;
  editData?: any;
  projectId: string; 
  
}; 


export interface FormElements extends HTMLFormControlsCollection {
  recommendation: HTMLTextAreaElement;
  notes: HTMLTextAreaElement;
  severity: any; 
}

export interface Form extends HTMLFormElement {
  readonly elements: FormElements;
}

export type addObservation = (observation:ObservationType)=>void; 

export type User = {
  profileImg?: string;
  name: string;
  id: string;
}

export type ProjectUserType  = User & {
  role: 'owner' | 'collaborator';
}

export type UserFirebase  = User & {
  projectsIds: string[];
  mail: string;
}

export type VisualizationType = 'table' | 'document' | 'stats'; 