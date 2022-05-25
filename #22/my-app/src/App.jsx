import data from './Data'
import Box from './Box'

function func(val) {
    return (
        <Box myColor={val.myColor} borderColor={val.borderColor} />
    );
}

function App() {
    return (<>
        <h1>Different types of Boxes</h1>
        {data.map(func)}
    </>)
}

export default App;