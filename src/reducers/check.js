
const intialState={
  correct:0,
  question:[
    {
      id:1,
      question:" React is library",
      answer:"true",
      givenAnswer:""
    },
    { id:2,
      question:"India is the largest country in the world",
      answer:"false",
      givenAnswer:""
    },
    { id:3,
      question:"India won world cup 2015 in cricket",
      answer:"false",
      givenAnswer:""
    },
    { id:4,
      question:"Highest individual score in cricket is 274 runs in ODI",
      answer:"false",
      givenAnswer:""
    },
    { id:5,
      question:"Narendra Modi is Prime Minister of india",
      answer:"true",
      givenAnswer:""
    }]
};
export default function  (state = intialState, action) {
  switch (action.type) {
    case 'CHECK_ANSWER':
      return {
        correct:action.data.correct,
        question:[...action.data.question]
      };
    default:
      return state
    }
}
