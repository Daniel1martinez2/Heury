import {ProjectUserType} from './types'; 
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

export const testUsers:ProjectUserType[] = [
  {
    role: 'owner',
    profileImg: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDVhNWNjMDY1M2FiNDNjNzU0NjY1ZmQxOWNmNzU3MT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40',
    name: 'Daniel',
    id:'1'
  },
  {
    role: 'collaborator',
    profileImg: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'Nath',
    id:'2'
  },
  {
    role: 'collaborator',
    profileImg: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'Sofia Martinez Villegas',
    id:'3'
  },
  {
    role: 'collaborator',
    profileImg: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'Nadie',
    id:'4'
  },
  {
    role: 'collaborator',
    profileImg: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'AAAA',
    id:'5'
  },
  {
    role: 'collaborator',
    profileImg: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'EFE',
    id:'6'
  },
]

// Example


//  const users =  [
//     {
//       id: '',
//       name: 'daniel', 
//       profilePic: 'https://',
//       projects:[
//         {
//           id: '',
//           projectName: 'test1', 
//           projectUsers: [
//             {
//               userName: 'daniel',
//               role: 'owner',
//               id: ''
//             },
//             {
//               userName: 'sofia',
//               role: 'collaborator',
//               id: ''
//             }
//           ], 
//           observations:[
//             {
//               id: '', 
//               notes: '',
//               heuristics: [ 'HelpRecognizeAndRecoverFromErrors','HelpAndDocumentation'],
//               evidence: '', 
//               severity: '',
//               recommendations: ''
//             }
//           ],
//         }
//       ]
//     }
//   ]



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

export const appear = {
  hidden: {
    opacity: 0
  }, 
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'ease-in-out',
      damping: 0,
      stiffness: 0,
    }
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      type: 'ease-in-out',
      damping: 0,
      stiffness: 0,
    }
  }
}

export const appearOpacity = {
  ...appear, visible:{ opacity: .7}
}