import InnerWrapper from './InnerWrapper'

function OuterWrapper ({setCount}){
    return <InnerWrapper setCount={setCount} />
}

export default OuterWrapper