import { ArrowsClockwise, ChatCircle, HeartStraightBreak } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './Tuite.css';

interface TuiteProps {
  content: string;
}

export function Tuite(props: TuiteProps) {
  return (
      <Link to='/status' className='tuite'>
        <img src='https://github.com/eduardo-r-machado.png' alt='Icon perfi Eduardo Machado' />

        <div className='tuite-content'>
            <div className="tuite-content-header">
              <strong>Eduardo Machado</strong>
              <span>@EduardoMachado</span>
            </div>

            <p>{props.content}</p>
            <div className='tuite-content-footer'>
              <button><ChatCircle/> 20</button>
              <button><ArrowsClockwise/> 20</button>
              <button><HeartStraightBreak/> 20</button>
            </div>
        </div>
       </Link>
  )
}