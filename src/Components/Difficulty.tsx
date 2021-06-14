import { difficultyType } from "../Types";
import CSS from 'csstype';

export const Difficulty: React.FC<{difficulty: difficultyType; style?: CSS.Properties}> = ({difficulty, style}): JSX.Element => {
  let color = 'black';
  switch (difficulty) {
  case 'easy':
    color = '#20C639'
    break;
  case 'impossible':
    color = '#FF009D'
    break;
  case 'difficult':
  case 'hard':
    color = '#E31717'
    break;
  case 'medium':
    color = '#EB9F45'
    break;
  }

  return (<p style={{color: color, ...style}}>{difficulty.toUpperCase()}</p>);
}
