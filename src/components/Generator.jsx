import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS, SCHEMES } from '../utils/exercises'
import Button from './Button'

function Header(props) {
  const {index, title, description} = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator(props) {
  const {muscles, setMuscles, fate, setFate, goal, setGoal, updateWorkout} = props

  const [showModal, setShowModal] = useState(false)
  

  // let showModal = false

  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {

    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
            return
    }

    if (muscles.length >  2) {
      return 
    }

    if (fate !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }
   
    setMuscles([...muscles, muscleGroup])

    if (muscles.length === 2) {
      setShowModal(false)
    }


  }
  
  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Gains', 'o\'clock']}>
      <Header index={"01"} title={"Choose your fate"} description={"Select the workout type you want to complete:"} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setMuscles([])
              setFate(type)
            }} className={'bg-slate-950 border border-blue-400 py-3 duration-200 px-4 hover:border-orange-400 rounded-lg ' + (type === fate ? 'border-orange-600' : 'border-blue-400') }   key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>


      <Header index={"02"} title={"Decide the Target Groups"} description={"Select which muscles you want to train:"} />
      <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative flex p-3 items-center justify-center'>
          <p className='capitalize'>{muscles.length == 0 ? 'Select Muscle Groups' : muscles.join(' ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className='flex flex-col p-3'>
            {(fate === 'individual' ? WORKOUTS[fate] : Object.keys(WORKOUTS[fate])).map((muscleGroup, muscleGroupIndex) => {
                return (
                    <button onClick={() => {
                        updateMuscles(muscleGroup)
                     }} key={muscleGroupIndex} className={'hover:text-orange-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-orange-400' : ' ')}>
                         <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                    </button>
                 )
             })}
         </div>
     )}
</div>


      <Header index={"03"} title={"Get Huge"} description={"Select your desired area to improve:"} />
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {
              setGoal(scheme)
            }} className={'bg-slate-950 border border-blue-400 py-3 duration-200 hover:border-orange-400 rounded-lg px-4 ' + (scheme === goal ? 'border-orange-600' : 'border-blue-400') }   key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div> 
    
      <Button func={updateWorkout} text={"Formulate"} />
    </SectionWrapper>

  )
}
