import {projectUserType} from './types'; 
export const heuristics = [
  'VisibilityOfSystemStatus',
  'MatchBetweenSystemAndTheRealWorld',
  'UserControlAndFreedom',
  'ConsistencyAndStandards',
  'ErrorPrevention',
  'RecognitionRatherThanRecall',
  'FlexibilityAndEfficiencyOfUse',
  'AestheticAndMinimalistDesign',
  'HelpRecognizeAndRecoverFromErrors',
  'HelpAndDocumentation',
]; 

export const severityData = [
  "1Minor",
  "2Middle",
  "3High",
  "4Major",
]; 

export const severityColor =[
  '#33A2E0',
  '#E0C433',
  '#E09033',
  '#E05D33'
]; 

export const defaultImage = 'https://daniel1martinez2.github.io/heuristic_example/UX%20Check%20Results%20664902979aa943b9b76c765bff7dde7a/Untitled%209.png'; 

export const testUsers:projectUserType[] = [
  {
    role: 'owner',
    profileImg: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDVhNWNjMDY1M2FiNDNjNzU0NjY1ZmQxOWNmNzU3MT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40',
    name: 'Daniel'
  },
  {
    role: 'collaborator',
    profileImg: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'Nath'
  },
  {
    role: 'collaborator',
    profileImg: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'Sofia Martinez Villegas'
  }
]

//Animations

export const slideIn = {
  hidden: {
    x: '100%',
    opacity: 0
  }, 
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'ease-in-out',
      damping: 0,
      stiffness: 0,
    }
  },

  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.3,
      type: 'ease-in-out',
      damping: 0,
      stiffness: 0,
    }
  }
}

export const dropIn = {
  hidden: {
    y: '-100%',
    opacity: 0
  }, 
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'ease-in',
      damping: 0,
      stiffness: 0,
    }
  },

  exit: {
    y: '-100%',
    opacity: 0,
    transition: {
      duration: 0.2,
      type: 'ease-in',
      damping: 0,
      stiffness: 0,
    }
  }

}